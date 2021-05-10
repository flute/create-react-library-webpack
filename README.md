# create-react-library-webpack
开发react组件库的简易脚手架，基于webpack打包。

#### 目前支持：

- [✅] demo热更新预览
- [✅] jsx语法
- [✅] less语法
- [✅] antd主题色
- [✅] react、react-dom、antd等作为外部依赖，不进行打包，减小包体积
- [✅] 打包分析

... 功能较为简单，胜在常用，额外的功能可在此基础上扩展

#### 目录

```js
├── .babelrc
├── README.md
├── config  // webpack打包配置
│   ├── webpack.base.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
├── example // 开发测试
│   └── src
├── lib     // 打包后的文件
│   └── index.js
├── package.json
└── src     // 组件源码
    ├── index.js
    └── index.less
```

#### 使用

```js
npm i // 安装依赖

npm start // 开发测试

npm run build // 执行打包

npm run analyze // 打包分析
```