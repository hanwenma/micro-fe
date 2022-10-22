import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

let root = null

function render(props = {}) {
  const container = props.container || document.getElementById('root')

  if(!container) return

  root = ReactDOM.createRoot(container)
  root.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>,
  )
}

// 当 window.__Micro_App__ 不存在时，意味着是子应用单独运行
if (!window.__Micro_App__) {
  render()
}

// 子应用必须导出 以下生命周期 bootstrap、mount、unmount
export const bootstrap = async () => {
  console.log('react bootstrap ...')
}
export const mount = async (props) => {
  render(props)
  console.log('react mount ...')
}
export const unmount = async () => {
  console.log('react unmount ...', root)
  root?.unmount()
  root = null
}
