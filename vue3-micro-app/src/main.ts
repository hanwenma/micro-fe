import { createApp } from 'vue'
import type { App as AppType } from 'vue'
import App from './App.vue'
import router from './router'

let instance: AppType | null = null

function render(container?: string) {
    instance = createApp(App)
    instance.use(router).mount(container || '#micro-vue-app')
}

// 当 window.__Micro_App__ 不存在时，意味着是子应用单独运行
if (!window.__Micro_App__) {
    render();
}

// 子应用必须导出 以下生命周期 bootstrap、mount、unmount
export const bootstrap = async () => {
    console.log('vue3 bootstrap ...');
};
export const mount = async (props: any) => {
    render(props.container);
    console.log('vue3 mount ...');
};
export const unmount = async () => {
    console.log('vue3 unmount ...', instance);
    if (instance) {
        instance.unmount();
        instance._container.innerHTML = ''
        instance = null
    }
};