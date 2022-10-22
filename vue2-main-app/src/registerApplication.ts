// import { registerMicroApps, start } from 'qiankun';
import { registerMicroApps, start } from './micro-fe';

// 默认子应用
export const applications = [
    {
        name: 'singleVue3', // app name registered
        entry: 'http://localhost:5000',
        container: '#micro-content',
        activeRule: '/vue3-micro-app',
    },
    {
        name: 'singleReact', // app name registered
        entry: 'http://localhost:3000',
        container: '#micro-content',
        activeRule: '/react-micro-app',
    },
]

// 注册子应用
export const registerApps = (apps: any[] = applications) => {
    registerMicroApps(apps);

    start();
}