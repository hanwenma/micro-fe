import { listenHistoryRoute, matchHistoryRoute } from './historyRoute'
import type { MicroApp } from './type'

// 保存子应用
let _apps: MicroApp[]

// 获取子应用
export const getApp = () => _apps

// 注册子应用
export const registerMicroApps = (apps: MicroApp[] = []) => {
    _apps = apps;
}

// 启动子应用
export const start = () => {
    // 1. 监听路由变化
    listenHistoryRoute()

    // 2. 匹配子应用路由（初始化）
    matchHistoryRoute()
}
