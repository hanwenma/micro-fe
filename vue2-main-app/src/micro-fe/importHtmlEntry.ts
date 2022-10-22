import { fectResource } from './fetch'
import type { MicroApp } from './type'

const Noop = (props?: any) => props

export const importEntry = async (app: MicroApp) => {
    // 获取模板
    const html = await fectResource(app.entry)

    // 字符串模板 -> DOM 结构，目的是方便使用 DOM API
    const template = document.createElement('div')
    template.innerHTML = html

    // 获取模板中所有的 scripts
    const scripts = Array.from(template.querySelectorAll('script'))

    // 加载模板中对应的 script 脚本内容 
    function getExternalScripts() {
        return Promise.all(scripts.map(script => {
            const src = script.getAttribute('src')

            if (!src) return Promise.resolve(script.innerHTML)

            return fectResource(src.indexOf('//') > -1 ? src : app.entry + src)
        }))
    }

    // 执行模板中对应的 script 脚本内容
    async function execScripts() {
        const scripts = await getExternalScripts();
        window.__Micro_App__ = true;

        // 手动构建 CommonJS 规范
        const module = { exports: { bootstrap: Noop, mount: Noop, unmount: Noop } }
        const exports = module.exports

        scripts.forEach((code) => {
            eval(code)
        });

        return module.exports
    }

    return {
        template,
        getExternalScripts,
        execScripts
    }
}