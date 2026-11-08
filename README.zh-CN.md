# Cubbie 桌面网站

**[点击访问 GitHub Pages 在线网站](https://xianlinlu.github.io/cubbie-website-2/)**

由 **XianlinLu（Arianna Xianlin Lu）** 开发和维护的 Cubbie 桌面前端项目，使用 Next.js、React 和 TypeScript。

## 项目工作与原创贡献

本仓库重点展示项目专属的前端开发工作：组件组织、Cubbie 内容整合、桌面交互连接、支持键盘操作的工作日标签与 FAQ、动画集成、内容校验和静态部署配置。

原创贡献仅指项目专属代码与开发工作，不代表拥有 Cubbie 品牌、提供的文案、保留的第三方插画或开源依赖。具体来源和权利范围见 [来源与版权说明](docs/ATTRIBUTION.md) 及 [LICENSE](LICENSE)。

## 本地运行

需要 Node.js 24 或更新版本。

```sh
npm ci
npm run dev
```

浏览器打开 http://localhost:3000。运行 `npm run build` 会在 `out/` 生成静态网站，无需后端服务或环境密钥。

## 验证

```sh
npm run check
npm run verify:content
```

内容检查需要 Python 3，比较桌面文案清单与构建后的 HTML，包括隐藏的工作日标签和 FAQ 答案。`/_qa/desktop.html` 可检查 1280、1440 和 1600 px 桌面宽度。

## 编辑位置

- 页面入口：`src/app/page.tsx`
- 首页文案、组件与区块样式：`src/components/cubbie/`
- 全局配色与字体：`src/app/globals.css`
- 图片、动画、字体与标志：`public/cubbie/`
- 内容校验清单：`docs/copy-inventory.json`
- 来源与版权说明：`docs/ATTRIBUTION.md`

## 功能范围

保留当前桌面页面和素材，以及下拉菜单、工作日标签、FAQ、锚点导航、Cookie 设置和滚动动画。外部功能及登录链接前往 Cubbie 对应页面；本项目不会连接真实账户、发送邮件或提交作业。仅主动打开的 Cookie 设置保存本地偏好，不含分析或营销追踪器。

## 部署

可使用静态托管服务发布 `out/`。部署到 GitHub 项目子路径时，运行 `NEXT_PUBLIC_BASE_PATH=/cubbie-website-2 npm run build`。仓库内保留手动触发的 GitHub Pages 工作流。

[English](README.md) · [日本語](README.ja.md)
