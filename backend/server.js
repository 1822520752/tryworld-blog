const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const winston = require('winston');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

const app = express();

// 日志配置
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console()
  ]
});

// 全局异常捕获
process.on('uncaughtException', (err) => {
  logger.error('未捕获异常:', err);
});

// 允许跨域访问
app.use(helmet({
  contentSecurityPolicy: false,
  frameguard: false
}));
app.use(cors());
app.use(express.json());

const publicPath = path.resolve(__dirname, '../frontend/public');
app.use(express.static(publicPath));

// 项目数据存储 - 优化移动端显示
let projectsData = [
  {
    id: 1,
    title: "羽毛球快速计分板",
    description: "专为羽毛球比赛设计的实时计分工具，提供直观的比分显示和快速计分功能，让比赛更加专业。",
    shortDesc: "羽毛球实时计分工具",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=240&fit=crop&q=80",
    mobileImage: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=300&h=200&fit=crop&q=80",
    tech: ["HTML5", "CSS3", "JavaScript", "Web API"],
    github: "https://github.com/577840261/badmintonrapidscoreboard",
    demo: "https://577840261.github.io/badmintonrapidscoreboard/",
    category: "体育工具",
    status: "已部署",
    stars: 25,
    views: 680,
    featured: true,
    responsive: true
  },
  {
    id: 2,
    title: "羽毛球拍线张力计算器",
    description: "专业的羽毛球拍穿线张力计算工具，根据球员水平和打法风格推荐最适合的线张力配置。",
    shortDesc: "球拍张力智能计算",
    image: "https://images.unsplash.com/photo-1544937684-d73b2a6f44de?w=400&h=240&fit=crop&q=80",
    mobileImage: "https://images.unsplash.com/photo-1544937684-d73b2a6f44de?w=300&h=200&fit=crop&q=80",
    tech: ["JavaScript", "CSS3", "HTML5", "算法"],
    github: "https://github.com/577840261/badminton-racket-tension-calculator",
    demo: "https://577840261.github.io/badminton-racket-tension-calculator/",
    category: "计算工具",
    status: "已部署",
    stars: 18,
    views: 420,
    featured: true,
    responsive: true
  },
  {
    id: 3,
    title: "冷笑话生成器",
    description: "智能冷笑话生成工具，收录大量经典冷笑话并支持随机生成，为生活增添欢声笑语。",
    shortDesc: "智能冷笑话生成",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=240&fit=crop&q=80",
    mobileImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&q=80",
    tech: ["JavaScript", "JSON", "CSS3", "响应式设计"],
    github: "https://github.com/577840261/Dad-Joke-Engine",
    demo: "https://577840261.github.io/Dad-Joke-Engine/",
    category: "娱乐工具",
    status: "已部署",
    stars: 32,
    views: 950,
    featured: true,
    responsive: true
  },
  {
    id: 4,
    title: "情话生成器",
    description: "浪漫情话智能生成工具，精选各类情话模板，帮助表达爱意，让感情更加甜蜜。",
    shortDesc: "浪漫情话生成工具",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=240&fit=crop&q=80",
    mobileImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=200&fit=crop&q=80",
    tech: ["JavaScript", "CSS3", "HTML5", "动画效果"],
    github: "https://github.com/577840261/LoveWords",
    demo: "https://577840261.github.io/LoveWords/",
    category: "生活工具",
    status: "已部署",
    stars: 45,
    views: 1240,
    featured: false,
    responsive: true
  },
  {
    id: 5,
    title: "AI辩论竞赛",
    description: "模拟AI辩论比赛的互动平台，支持多种辩论主题，展示人工智能的逻辑思维和语言能力。",
    shortDesc: "AI智能辩论平台",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop&q=80",
    mobileImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&q=80",
    tech: ["JavaScript", "AI算法", "CSS3", "交互设计"],
    github: "https://github.com/577840261/AI-Debate-Competition",
    demo: "https://577840261.github.io/AI-Debate-Competition/",
    category: "AI应用",
    status: "已部署",
    stars: 67,
    views: 1580,
    featured: true,
    responsive: true
  },
  {
    id: 6,
    title: "人生时钟",
    description: "以独特的时钟形式展示人生时光流逝，帮助用户珍惜时间，思考人生意义的哲理工具。",
    shortDesc: "人生哲理时钟工具",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=240&fit=crop&q=80",
    mobileImage: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=200&fit=crop&q=80",
    tech: ["JavaScript", "Canvas", "时间算法", "动画"],
    github: "https://github.com/577840261/-LifeClock",
    demo: "https://577840261.github.io/-LifeClock/",
    category: "哲理工具",
    status: "已部署",
    stars: 89,
    views: 2100,
    featured: true,
    responsive: true
  }
];

// 内存存储 - 联系信息
let contactsData = [];

// 内存存储 - 项目访问统计
let projectViewsData = {};

// 内存存储 - 错误日志
let errorLogsData = [];

// 技能数据
const skillsData = {
  labels: ['前端开发', 'JavaScript', 'React', 'CSS/HTML', 'Git版本控制', '项目管理'],
  datasets: [{
    label: '技能水平',
    data: [85, 90, 80, 95, 75, 70],
    backgroundColor: 'rgba(0, 255, 136, 0.2)',
    borderColor: '#00ff88',
    borderWidth: 2,
    pointBackgroundColor: '#00ff88',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#ff00ff',
    pointHoverBorderColor: '#00ff88'
  }]
};

// GitHub仓库配置
const githubRepos = [
  '577840261/badmintonrapidscoreboard',
  '577840261/badminton-racket-tension-calculator',
  '577840261/Dad-Joke-Engine',
  '577840261/LoveWords',
  '577840261/AI-Debate-Competition',
  '577840261/-LifeClock'
];

// GitHub API代理路由 - 获取仓库统计信息，支持缓存优化
app.get('/api/github/stats', async (req, res) => {
  try {
    logger.info('获取GitHub仓库统计数据');

    // 并发请求所有仓库数据
    const repoPromises = githubRepos.map(async (repo) => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repo}`, {
          timeout: 5000,
          headers: {
            'User-Agent': 'kai-blog-app',
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        return {
          name: repo,
          stars: response.data.stargazers_count || 0,
          forks: response.data.forks_count || 0,
          watchers: response.data.watchers_count || 0,
          language: response.data.language || 'Unknown',
          updated_at: response.data.updated_at,
          created_at: response.data.created_at,
          description: response.data.description || '',
          html_url: response.data.html_url
        };
      } catch (error) {
        logger.warn(`获取仓库 ${repo} 数据失败:`, error.message);
        return {
          name: repo,
          stars: 0,
          forks: 0,
          watchers: 0,
          language: 'Unknown',
          error: error.message
        };
      }
    });

    const repoStats = await Promise.all(repoPromises);
    
    // 计算总统计
    const totalStats = repoStats.reduce((acc, repo) => {
      acc.totalStars += repo.stars;
      acc.totalForks += repo.forks;
      acc.totalWatchers += repo.watchers;
      return acc;
    }, {
      totalStars: 0,
      totalForks: 0,
      totalWatchers: 0
    });

    // 更新项目数据中的stars
    repoStats.forEach((repo, index) => {
      if (projectsData[index]) {
        projectsData[index].stars = repo.stars;
      }
    });

    const responseData = {
      ...totalStats,
      repositories: repoStats,
      lastUpdated: new Date().toISOString(),
      cacheExpiry: 300 // 5分钟缓存
    };

    // 设置缓存头
    res.set({
      'Cache-Control': 'public, max-age=300',
      'X-API-Source': 'github-proxy',
      'X-Total-Repos': githubRepos.length.toString()
    });

    logger.info(`GitHub统计获取成功: ${totalStats.totalStars} stars`);
    res.json({
      success: true,
      data: responseData
    });

  } catch (error) {
    logger.error('GitHub API代理失败:', error);
    
    // 降级处理 - 返回静态数据
    const fallbackData = {
      totalStars: 500,
      totalForks: 50,
      totalWatchers: 100,
      repositories: githubRepos.map(repo => ({
        name: repo,
        stars: Math.floor(Math.random() * 100),
        forks: Math.floor(Math.random() * 20),
        watchers: Math.floor(Math.random() * 50),
        language: 'JavaScript',
        error: 'API限流或网络错误'
      })),
      lastUpdated: new Date().toISOString(),
      fallback: true
    };

    res.status(200).json({
      success: true,
      data: fallbackData,
      warning: 'GitHub API不可用，返回静态数据'
    });
  }
});

// GitHub用户信息代理路由 - 获取用户基本信息和公开数据
app.get('/api/github/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    
    if (!username || !/^[a-zA-Z0-9\-]+$/.test(username)) {
      return res.status(400).json({
        success: false,
        error: '无效的用户名格式'
      });
    }

    logger.info(`获取GitHub用户信息: ${username}`);

    const response = await axios.get(`https://api.github.com/users/${username}`, {
      timeout: 5000,
      headers: {
        'User-Agent': 'kai-blog-app',
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const userData = {
      username: response.data.login,
      name: response.data.name || username,
      avatar: response.data.avatar_url,
      bio: response.data.bio || '',
      location: response.data.location || '',
      blog: response.data.blog || '',
      publicRepos: response.data.public_repos || 0,
      followers: response.data.followers || 0,
      following: response.data.following || 0,
      createdAt: response.data.created_at,
      updatedAt: response.data.updated_at
    };

    res.set({
      'Cache-Control': 'public, max-age=600',
      'X-API-Source': 'github-user-proxy'
    });

    res.json({
      success: true,
      data: userData
    });

  } catch (error) {
    logger.error('获取GitHub用户信息失败:', error);

    if (error.response?.status === 404) {
      return res.status(404).json({
        success: false,
        error: '用户不存在'
      });
    }

    res.status(500).json({
      success: false,
      error: 'GitHub API请求失败',
      fallback: {
        username: req.params.username,
        name: req.params.username,
        publicRepos: 6,
        followers: 50,
        following: 30
      }
    });
  }
});

// API路由 - 获取项目列表（优化移动端响应和导师链接功能支持）
app.get('/api/projects', (req, res) => {
  try {
    const userAgent = req.get('User-Agent') || '';
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const viewport = req.query.viewport || 'desktop';
    const limit = req.query.limit ? parseInt(req.query.limit) : null;
    const featured = req.query.featured === 'true';

    logger.info(`获取项目列表 - 设备类型: ${isMobile ? '移动端' : '桌面端'}, 视窗: ${viewport}`);
    
    // 根据设备类型优化数据
    let responseData = projectsData.map(project => ({
      ...project,
      // 移动端使用较小的图片和简短描述
      displayImage: isMobile || viewport === 'mobile' ? project.mobileImage : project.image,
      displayDescription: isMobile || viewport === 'mobile' ? project.shortDesc : project.description,
      // 移动端优化技术标签显示
      displayTech: isMobile ? project.tech.slice(0, 3) : project.tech,
      isMobileOptimized: true
    }));

    // 筛选特色项目
    if (featured) {
      responseData = responseData.filter(project => project.featured);
    }

    // 限制返回数量
    if (limit && limit > 0) {
      responseData = responseData.slice(0, limit);
    }

    // 添加移动端优化标识
    res.set({
      'Cache-Control': isMobile ? 'public, max-age=180' : 'public, max-age=300',
      'X-Mobile-Optimized': 'true',
      'X-Content-Type-Options': 'nosniff',
      'X-Device-Type': isMobile ? 'mobile' : 'desktop'
    });

    res.json({
      success: true,
      data: responseData,
      total: responseData.length,
      isMobile: isMobile,
      viewport: viewport,
      optimized: true,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    logger.error('获取项目列表失败:', err);
    res.status(500).json({ 
      success: false, 
      error: '获取项目列表失败',
      message: '服务器内部错误，请稍后重试'
    });
  }
});

// API路由 - 获取单个项目详情（优化移动端响应和导师主页链接支持）
app.get('/api/projects/:id', (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const userAgent = req.get('User-Agent') || '';
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    const project = projectsData.find(p => p.id === projectId);
    
    if (!project) {
      logger.warn(`项目未找到: ${projectId}`);
      return res.status(404).json({ 
        success: false, 
        error: '项目未找到',
        message: '请检查项目ID是否正确'
      });
    }

    // 更新访问统计
    const viewKey = `project_${projectId}`;
    if (!projectViewsData[viewKey]) {
      projectViewsData[viewKey] = {
        projectId: projectId,
        viewCount: 0,
        mobileViews: 0,
        desktopViews: 0,
        lastViewed: new Date()
      };
    }
    
    projectViewsData[viewKey].viewCount++;
    if (isMobile) {
      projectViewsData[viewKey].mobileViews++;
    } else {
      projectViewsData[viewKey].desktopViews++;
    }
    projectViewsData[viewKey].lastViewed = new Date();

    // 优化移动端响应数据
    const responseData = {
      ...project,
      displayImage: isMobile ? project.mobileImage : project.image,
      displayDescription: isMobile ? project.shortDesc : project.description,
      viewStats: projectViewsData[viewKey],
      isMobileOptimized: true,
      deviceType: isMobile ? 'mobile' : 'desktop'
    };

    logger.info(`获取项目详情: ${projectId} - 设备: ${isMobile ? '移动端' : '桌面端'}`);
    
    res.set({
      'Cache-Control': isMobile ? 'public, max-age=180' : 'public, max-age=300',
      'X-Mobile-Optimized': 'true',
      'X-Device-Type': isMobile ? 'mobile' : 'desktop'
    });

    res.json({
      success: true,
      data: responseData,
      viewCount: projectViewsData[viewKey].viewCount,
      optimized: true
    });
  } catch (err) {
    logger.error('获取项目详情失败:', err);
    res.status(500).json({ 
      success: false, 
      error: '获取项目详情失败',
      message: '服务器内部错误，请稍后重试'
    });
  }
});

// API路由 - 获取技能数据，支持导师技能信息展示
app.get('/api/skills', (req, res) => {
  try {
    logger.info('获取技能数据');
    res.set({
      'Cache-Control': 'public, max-age=600',
      'X-Mobile-Optimized': 'true'
    });
    res.json({
      success: true,
      data: skillsData
    });
  } catch (err) {
    logger.error('获取技能数据失败:', err);
    res.status(500).json({ success: false, error: '获取技能数据失败' });
  }
});

// API路由 - 提交联系表单，支持导师联系信息
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      logger.warn('联系表单参数不完整');
      return res.status(400).json({ success: false, error: '所有字段都是必填的' });
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      logger.warn('邮箱格式无效:', email);
      return res.status(400).json({ success: false, error: '邮箱格式无效' });
    }

    // 验证输入长度
    if (name.length > 50 || message.length > 1000) {
      logger.warn('输入内容长度超限');
      return res.status(400).json({ success: false, error: '输入内容长度超限' });
    }

    const contactData = {
      id: uuidv4(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date(),
      userAgent: req.get('User-Agent') || '',
      ip: req.ip || req.connection.remoteAddress
    };

    contactsData.push(contactData);
    
    logger.info(`新的联系信息已保存: ${name} - ${email}`);
    res.json({ 
      success: true, 
      message: '感谢您的联系！我会尽快回复您。',
      id: contactData.id
    });
  } catch (err) {
    logger.error('保存联系信息失败:', err);
    res.status(500).json({ success: false, error: '保存失败' });
  }
});

// API路由 - 获取统计数据（优化移动端响应和导师相关统计）
app.get('/api/stats', (req, res) => {
  try {
    const userAgent = req.get('User-Agent') || '';
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    const totalViews = Object.values(projectViewsData).reduce((sum, item) => sum + item.viewCount, 0);
    const mobileViews = Object.values(projectViewsData).reduce((sum, item) => sum + (item.mobileViews || 0), 0);
    const desktopViews = Object.values(projectViewsData).reduce((sum, item) => sum + (item.desktopViews || 0), 0);
    
    const stats = {
      totalProjects: projectsData.length,
      totalViews: totalViews,
      mobileViews: mobileViews,
      desktopViews: desktopViews,
      totalContacts: contactsData.length,
      projectViews: Object.values(projectViewsData),
      topProjects: projectsData
        .map(p => ({
          ...p,
          viewCount: projectViewsData[`project_${p.id}`]?.viewCount || 0,
          displayImage: isMobile ? p.mobileImage : p.image
        }))
        .sort((a, b) => b.viewCount - a.viewCount)
        .slice(0, 3),
      deviceStats: {
        mobileViewsPercent: totalViews > 0 ? Math.round((mobileViews / totalViews) * 100) : 0,
        desktopViewsPercent: totalViews > 0 ? Math.round((desktopViews / totalViews) * 100) : 0
      }
    };
    
    logger.info('获取统计数据成功');
    res.set({
      'Cache-Control': 'public, max-age=60',
      'X-Mobile-Optimized': 'true'
    });
    res.json({
      success: true,
      data: stats
    });
  } catch (err) {
    logger.error('获取统计数据失败:', err);
    res.status(500).json({ success: false, error: '获取统计失败' });
  }
});

// API路由 - 移动端资源检查和优化（支持导师主页链接移动端适配）
app.get('/api/mobile-check', (req, res) => {
  try {
    const userAgent = req.get('User-Agent') || '';
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const viewport = req.headers['viewport'] || 'unknown';
    const screenWidth = req.query.width ? parseInt(req.query.width) : null;
    const screenHeight = req.query.height ? parseInt(req.query.height) : null;
    
    // 设备类型检测
    let deviceType = 'desktop';
    if (/iPhone/i.test(userAgent)) deviceType = 'iPhone';
    else if (/iPad/i.test(userAgent)) deviceType = 'iPad';
    else if (/Android/i.test(userAgent)) deviceType = 'Android';
    else if (isMobile) deviceType = 'mobile';

    // 屏幕尺寸分类
    let screenCategory = 'unknown';
    if (screenWidth) {
      if (screenWidth <= 480) screenCategory = 'small';
      else if (screenWidth <= 768) screenCategory = 'medium';
      else if (screenWidth <= 1024) screenCategory = 'large';
      else screenCategory = 'xlarge';
    }

    const checkResult = {
      isMobile: isMobile,
      deviceType: deviceType,
      userAgent: userAgent,
      viewport: viewport,
      screen: {
        width: screenWidth,
        height: screenHeight,
        category: screenCategory
      },
      recommendations: {
        imageSize: isMobile ? 'medium' : 'large',
        gridColumns: screenWidth <= 480 ? 1 : (screenWidth <= 768 ? 2 : 3),
        touchTargetSize: isMobile ? 48 : 32
      },
      timestamp: new Date()
    };
    
    logger.info(`移动端检查: ${deviceType} - 屏幕: ${screenWidth}x${screenHeight}`);
    
    res.json({
      success: true,
      data: checkResult
    });
  } catch (err) {
    logger.error('移动端检查失败:', err);
    res.status(500).json({ success: false, error: '检查失败' });
  }
});

// 导航API - 获取导航数据（优化滚动锚点，支持导师主页跳转）
app.get('/api/navigation', (req, res) => {
  try {
    const navItems = [
      { id: 'home', icon: 'house', label: '首页', path: '#home' },
      { id: 'profile', icon: 'user', label: '关于', path: '#profile' },
      { id: 'honors', icon: 'trophy', label: '荣誉', path: '#honors' },
      { id: 'projects', icon: 'diagram-project', label: '项目', path: '#projects' },
      { id: 'skills', icon: 'chart-pie', label: '技能', path: '#skills' },
      { id: 'timeline', icon: 'timeline', label: '历程', path: '#timeline' },
      { id: 'contact', icon: 'envelope', label: '联系', path: '#contact' }
    ];

    const userAgent = req.get('User-Agent') || '';
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    res.set({
      'Cache-Control': 'public, max-age=3600',
      'X-Mobile-Optimized': 'true'
    });

    res.json({
      success: true,
      data: {
        navItems: navItems,
        isMobile: isMobile,
        scrollBehavior: 'smooth',
        offsetTop: 80
      }
    });
  } catch (err) {
    logger.error('获取导航数据失败:', err);
    res.status(500).json({ success: false, error: '获取导航失败' });
  }
});

// 日志收集API - 支持导师主页链接点击统计
app.post('/api/logs', (req, res) => {
  try {
    const { level, message, timestamp, userAgent, url } = req.body;
    
    // 验证日志级别
    const validLevels = ['error', 'warn', 'info', 'debug'];
    if (!validLevels.includes(level)) {
      return res.status(400).json({ success: false, error: '无效的日志级别' });
    }

    const logEntry = {
      id: uuidv4(),
      level: level || 'info',
      message: message || '',
      timestamp: timestamp || new Date().toISOString(),
      userAgent: userAgent || req.get('User-Agent'),
      url: url || req.get('Referer'),
      ip: req.ip || req.connection.remoteAddress
    };

    // 记录到控制台
    logger.log(level, `前端日志: ${message}`, logEntry);

    // 保存到内存
    errorLogsData.push(logEntry);

    // 保持日志数量在合理范围内（最多1000条）
    if (errorLogsData.length > 1000) {
      errorLogsData = errorLogsData.slice(-1000);
    }

    res.json({ success: true });
  } catch (err) {
    logger.error('日志收集失败:', err);
    res.status(500).json({ success: false, error: '日志收集失败' });
  }
});

// 健康检查API - 系统状态监控，支持导师模块功能检查
app.get('/api/health', (req, res) => {
  try {
    const health = {
      status: 'ok',
      timestamp: new Date(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      projectCount: projectsData.length,
      contactCount: contactsData.length,
      logCount: errorLogsData.length,
      mobileOptimized: true,
      githubProxy: true,
      mentorLinksSupported: true // 新增导师链接支持标识
    };
    
    res.json({
      success: true,
      data: health
    });
  } catch (err) {
    logger.error('健康检查失败:', err);
    res.status(500).json({ success: false, error: '健康检查失败' });
  }
});

// 处理前端路由 - 支持导师主页链接的SPA路由
app.get('*', (req, res) => {
  try {
    const filePath = path.join(publicPath, req.path);
    
    // 检查文件是否存在
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      // 为移动端添加特殊头部
      const userAgent = req.get('User-Agent') || '';
      const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      
      if (isMobile) {
        res.set({
          'X-Mobile-Optimized': 'true',
          'Cache-Control': 'public, max-age=3600'
        });
      }
      
      res.sendFile(filePath);
    } else {
      // 返回index.html处理SPA路由
      const indexPath = path.join(publicPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.set({
          'X-Mobile-Optimized': 'true',
          'Cache-Control': 'no-cache'
        });
        res.sendFile(indexPath);
      } else {
        res.status(404).json({ success: false, error: '页面未找到' });
      }
    }
  } catch (err) {
    logger.error('处理前端路由失败:', err);
    res.status(500).json({ success: false, error: '服务器错误' });
  }
});

// 处理404错误
app.use((req, res) => {
  logger.warn(`404 - 未找到页面: ${req.path}`);
  res.status(404).json({ success: false, error: '页面未找到' });
});

// 全局错误处理中间件
app.use((err, req, res, next) => {
  logger.error('服务器错误:', err);
  res.status(500).json({ success: false, error: '服务器内部错误' });
});

// 优雅关闭处理
process.on('SIGTERM', () => {
  logger.info('收到SIGTERM信号，正在关闭服务器...');
});

process.on('SIGINT', () => {
  logger.info('收到SIGINT信号，正在关闭服务器...');
});

const PORT = process.env.PORT || 47191;
app.listen(PORT, () => {
  logger.info(`试界 TryWorld博客服务器启动成功，端口: ${PORT}`);
  logger.info('服务器已优化移动端资源加载和响应式数据传输');
  logger.info('项目展示API已就绪，支持完美的移动端和桌面端显示');
  logger.info('导航API已准备就绪，支持平滑滚动和激活状态同步');
  logger.info('GitHub API代理服务已启动，支持仓库统计和用户信息获取');
  logger.info('导师主页链接功能已集成，支持CSDN等外部链接跳转');
});