import { importEntry } from './importHtmlEntry'
import type { MicroApp } from './type'


export const bootstrap = async (app: MicroApp) => {
    if (app.bootstrap) await app.bootstrap({ ...app });
};

export const mount = async (app: MicroApp) => {
    app.isMount = true;
    const container = document.querySelector(app.container)
    if (app.mount) {
        await app.mount({ ...app, container })
    }
};

export const unmount = async (app: MicroApp) => {
    app.isMount = false;

    if (app.unmount) {
        await app.unmount({ ...app })
    }
};

export const loadApp = async (app: MicroApp) => {
    const { execScripts } = await importEntry(app);

    const appContext = await execScripts();

    // 将生命周期钩子添加到 app 应用上
    app.bootstrap = appContext.bootstrap;
    app.mount = appContext.mount;
    app.unmount = appContext.unmount;
    
    await bootstrap(app);
    await mount(app);
}