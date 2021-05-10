import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.less'
import ExampleComponent from '../../src' // 引入组件

const App = () => {
  return (
    <ExampleComponent>
      Count：
    </ExampleComponent>
  )
}

render(<App />, document.getElementById('root'))