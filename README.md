# dumi-demo

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Run test,

```bash
$ npm test
```

Build library via `father-build`,

```bash
$ npm run build
```

## 备注

1. 基于 dumi master 分支，commit id 为：7e28f4da85f096f09c59698350fda13aecc3ffcd
2. 安装依赖后，运行`npm start`运行 dev，打开文档网站，在 Bar 和 Foo 组件之间切换，控制台报错
3. 原因在于 theme-default layout.tsx 中一段日期格式化代码会产生 invalid date 对象，在 date-time-format-timezone polyfill 之后会报错
