# 试界 TryWorld - 个人博客

> 一个高中生 AI 开发者的个人博客，专注于人工智能和 Web 开发领域的技术分享与项目展示。

## 项目简介

这是试界 TryWorld 的个人博客网站，采用前后端分离架构开发，具有现代化的 UI 设计和流畅的交互体验。

### 主要功能

- 个人简介展示
- 项目作品集
- 技能雷达图
- 荣誉展示
- 成长历程时间线
- 联系方式

## 技术栈

### 前端
- **React** - 用户界面构建
- **Vite** - 构建工具
- **FontAwesome** - 图标库
- **CSS3** - 样式设计（霓虹灯效果、动画等）

### 后端
- **Node.js** - 运行环境
- **Express** - Web 框架

## 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
# 安装前端依赖
cd frontend
npm install

# 安装后端依赖
cd ../backend
npm install
```

### 启动项目

```bash
# 启动后端服务（端口 47191）
cd backend
npm start

# 启动前端开发服务器（端口 5173）
cd frontend
npm run dev
```

### 访问地址
- 前端：http://localhost:5173
- 后端 API：http://localhost:47191

## 项目结构

```
kai-blog-071307/
├── frontend/                # 前端项目
│   ├── src/
│   │   ├── components/      # React 组件
│   │   ├── styles/          # 样式文件
│   │   ├── App.jsx          # 主应用组件
│   │   └── index.jsx        # 入口文件
│   ├── public/              # 静态资源
│   └── vite.config.mjs      # Vite 配置
├── backend/                 # 后端项目
│   ├── server.js            # 服务器入口
│   └── package.json         # 依赖配置
└── README.md                # 项目说明
```

## 特色功能

- 霓虹灯效果标题
- 粒子背景动画
- 3D 头像悬浮效果
- 响应式设计（支持移动端）
- 暗色主题

## 作者

**试界 TryWorld**
- 高中生 AI 开发者
- 专注于人工智能和 Web 开发

## 许可证

MIT License
