import { getApp } from './index'
import { loadApp, unmount } from './application'

let previousRoute: string = ''
let nextRoute: string = window.location.pathname

export const getPreviousRoute = () => previousRoute
export const getNextRoute = () => nextRoute

// 监听路由变化
export const listenHistoryRoute = () => {

    // 监听路由变化
    window.addEventListener('popstate', () => {
        // 这里是通过 history.[go | back | forward] 方式时触发，
        // 包括浏览器的前进后退按钮
        previousRoute = nextRoute
        nextRoute = window.location.pathname

        matchHistoryRoute()// 匹配路由
    })

    // 重写 pushState
    const rawPushState = window.history.pushState;
    window.history.pushState = (...args) => {
        previousRoute = window.location.pathname // 导航前
        rawPushState.apply(window.history, args) // 调用原始方法
        nextRoute = window.location.pathname // 导航后

        // 匹配路由
        matchHistoryRoute()
    }

    // 重写 replaceState
    const rawReplaceState = window.history.pushState;
    window.history.replaceState = (...args) => {
        previousRoute = window.location.pathname // 导航前
        rawReplaceState.apply(window.history, args) // 调用原始方法
        nextRoute = window.location.pathname // 导航后

        // 匹配路由
        matchHistoryRoute()
    }
}

// 匹配路由
export const matchHistoryRoute = async () => {
    
    const apps = getApp();
    const activeApp = apps.find(item => nextRoute.startsWith(item.activeRule))
    
    // 若之前的子应用存在，需要先卸载
    const previousApp = apps.find(item => item.activeRule.startsWith(previousRoute))
    if (previousApp && previousApp !== activeApp) {
        await unmount(previousApp) 
    }
    
    if (!activeApp || activeApp.isMount) return

    // 加载子应用
    loadApp(activeApp)
}