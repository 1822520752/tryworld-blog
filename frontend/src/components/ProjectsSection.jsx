import React, { useState, useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  // 项目数据
  const projects = [
    {
      id: 1,
      title: "羽毛球快速计分板",
      description: "专为羽毛球比赛设计的实时计分工具，提供直观的比分显示和快速计分功能，让比赛更加专业。",
      shortDescription: "羽毛球实时计分工具",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=240&fit=crop&q=80",
      link: "https://577840261.github.io/badmintonrapidscoreboard/",
      github: "https://github.com/577840261/badmintonrapidscoreboard",
      tags: ["HTML5", "CSS3", "JavaScript", "Web API"],
      category: "体育工具",
      status: "已部署"
    },
    {
      id: 2,
      title: "羽毛球拍线张力计算器",
      description: "专业的羽毛球拍穿线张力计算工具，根据球员水平和打法风格推荐最适合的线张力配置。",
      shortDescription: "球拍张力智能计算",
      image: "https://images.unsplash.com/photo-1544937684-d73b2a6f44de?w=400&h=240&fit=crop&q=80",
      link: "https://577840261.github.io/badminton-racket-tension-calculator/",
      github: "https://github.com/577840261/badminton-racket-tension-calculator",
      tags: ["JavaScript", "CSS3", "HTML5", "算法"],
      category: "计算工具",
      status: "已部署"
    },
    {
      id: 3,
      title: "冷笑话生成器",
      description: "智能冷笑话生成工具，收录大量经典冷笑话并支持随机生成，为生活增添欢声笑语。",
      shortDescription: "智能冷笑话生成",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=240&fit=crop&q=80",
      link: "https://577840261.github.io/Dad-Joke-Engine/",
      github: "https://github.com/577840261/Dad-Joke-Engine",
      tags: ["JavaScript", "JSON", "CSS3", "响应式设计"],
      category: "娱乐工具",
      status: "已部署"
    },
    {
      id: 4,
      title: "情话生成器",
      description: "浪漫情话智能生成工具，精选各类情话模板，帮助表达爱意，让感情更加甜蜜。",
      shortDescription: "浪漫情话生成工具",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=240&fit=crop&q=80",
      link: "https://577840261.github.io/LoveWords/",
      github: "https://github.com/577840261/LoveWords",
      tags: ["JavaScript", "CSS3", "HTML5", "动画效果"],
      category: "生活工具",
      status: "已部署"
    },
    {
      id: 5,
      title: "AI辩论竞赛",
      description: "模拟AI辩论比赛的互动平台，支持多种辩论主题，展示人工智能的逻辑思维和语言能力。",
      shortDescription: "AI智能辩论平台",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop&q=80",
      link: "https://577840261.github.io/AI-Debate-Competition/",
      github: "https://github.com/577840261/AI-Debate-Competition",
      tags: ["JavaScript", "AI算法", "CSS3", "交互设计"],
      category: "AI应用",
      status: "已部署"
    },
    {
      id: 6,
      title: "人生时钟",
      description: "以独特的时钟形式展示人生时光流逝，帮助用户珍惜时间，思考人生意义的哲理工具。",
      shortDescription: "人生哲理时钟工具",
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=240&fit=crop&q=80",
      link: "https://577840261.github.io/-LifeClock/",
      github: "https://github.com/577840261/-LifeClock",
      tags: ["JavaScript", "Canvas", "时间算法", "动画"],
      category: "哲理工具",
      status: "已部署"
    }
  ];

  // 检测移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 交集观察器用于动画
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    const projectCards = sectionRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach(card => {
      observerRef.current.observe(card);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [projects]);

  // 获取技术标签颜色
  const getTechColor = (tech) => {
    const colors = {
      'React': '#61dafb',
      'Vue.js': '#4fc08d',
      'Python': '#3776ab',
      'JavaScript': '#f7df1e',
      'Node.js': '#339933',
      'HTML5': '#e34f26',
      'CSS3': '#1572b6',
      'AI算法': '#ff6b6b',
      'Canvas': '#ff9f43',
      'Web API': '#00d2d3'
    };
    return colors[tech] || '#00ff88';
  };

  // 获取状态颜色
  const getStatusColor = (status) => {
    const colors = {
      '已部署': '#00ff88',
      '已完成': '#00ffff',
      '开发中': '#ffff00',
      '测试中': '#ff6600'
    };
    return colors[status] || '#00ff88';
  };

  // 处理项目链接点击
  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  // 处理GitHub链接点击
  const handleGithubClick = (e, github) => {
    e.stopPropagation();
    if (github) {
      window.open(github, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <div className="container mobile-container">
        {/* 标题部分 */}
        <div className="projects-header">
          <h2 className="neon-glow">项目展示</h2>
          <p className="section-subtitle">从想法到实现，每个项目都是成长的足迹</p>
        </div>

        {/* 项目网格 */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${visibleProjects.has(project.id) ? 'visible' : ''}`}
              data-project-id={project.id}
              onClick={() => handleProjectClick(project.link)}
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--status-color': getStatusColor(project.status)
              }}
            >
              {/* 项目图片 */}
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="project-category">{project.category}</div>
                  <div className="project-status">{project.status}</div>
                </div>
              </div>

              {/* 项目内容 */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {isMobile ? project.shortDescription : project.description}
                </p>

                {/* 技术标签 */}
                <div className="tech-tags">
                  {(isMobile ? project.tags.slice(0, 3) : project.tags).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="tech-tag"
                      style={{ '--tech-color': getTechColor(tag) }}
                    >
                      {tag}
                    </span>
                  ))}
                  {isMobile && project.tags.length > 3 && (
                    <span className="tech-more">+{project.tags.length - 3}</span>
                  )}
                </div>

                {/* 操作按钮 */}
                <div className="project-actions">
                  <button 
                    className="action-btn primary-btn"
                    onClick={() => handleProjectClick(project.link)}
                    aria-label={`查看${project.title}项目`}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    查看项目
                  </button>
                  <button 
                    className="action-btn secondary-btn"
                    onClick={(e) => handleGithubClick(e, project.github)}
                    aria-label={`查看${project.title}源码`}
                  >
                    <i className="fab fa-github"></i>
                    {isMobile ? '源码' : '查看源码'}
                  </button>
                </div>
              </div>

              {/* 悬停光效 */}
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* 基础布局样式 */
        .container.mobile-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          box-sizing: border-box;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .projects-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          margin: 0;
        }

        /* 响应式网格布局 */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          width: 100%;
        }

        /* 项目卡片样式 */
        .project-card {
          position: relative;
          background: rgba(26, 26, 46, 0.9);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 255, 136, 0.2);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(50px);
          opacity: 0;
          animation-delay: var(--delay);
          backdrop-filter: blur(10px);
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .project-card.visible {
          transform: translateY(0);
          opacity: 1;
          animation: slideInUp 0.6s ease-out forwards;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary-green);
          box-shadow: 
            0 20px 40px rgba(0, 255, 136, 0.2),
            0 0 60px rgba(0, 255, 136, 0.1);
        }

        /* 项目图片区域 */
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem;
        }

        .project-category {
          background: var(--gradient-primary);
          color: var(--dark-blue);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
        }

        .project-status {
          background: var(--status-color);
          color: var(--dark-blue);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 0 15px var(--status-color);
        }

        /* 项目内容区域 */
        .project-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-title {
          color: var(--primary-green);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.3;
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
        }

        .project-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        /* 技术标签 */
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--tech-color);
          color: var(--tech-color);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: var(--tech-color);
          color: var(--dark-blue);
          box-shadow: 0 0 15px var(--tech-color);
        }

        .tech-more {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* 操作按钮 */
        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          flex: 1;
          padding: 0.8rem 1.2rem;
          border: none;
          border-radius: var(--radius-md);
          font-family: var(--font-primary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          min-height: 48px;
          touch-action: manipulation;
        }

        .primary-btn {
          background: var(--gradient-primary);
          color: var(--dark-blue);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
        }

        .primary-btn:active {
          transform: translateY(0);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* 光效 */
        .card-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: var(--radius-lg);
          background: conic-gradient(
            from 0deg,
            transparent,
            var(--primary-green),
            transparent,
            var(--neon-purple),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          animation: rotate 4s linear infinite;
        }

        .project-card:hover .card-glow {
          opacity: 0.3;
        }

        /* 动画定义 */
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* 移动端响应式设计 */
        @media (max-width: 768px) {
          .container.mobile-container {
            padding: 1rem;
          }

          .projects-header {
            margin-bottom: 2rem;
          }

          .projects-header h2 {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-card {
            min-height: 350px;
          }

          .project-image {
            height: 160px;
          }

          .project-content {
            padding: 1rem;
          }

          .project-title {
            font-size: 1.2rem;
          }

          .project-description {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .tech-tags {
            gap: 0.4rem;
            margin-bottom: 1rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
          }

          .project-actions {
            flex-direction: column;
            gap: 0.8rem;
          }

          .action-btn {
            padding: 0.8rem 1rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .container.mobile-container {
            padding: 0.8rem;
          }

          .projects-header h2 {
            font-size: 1.8rem;
          }

          .projects-grid {
            gap: 1rem;
          }

          .project-card {
            min-height: 320px;
          }

          .project-image {
            height: 140px;
          }

          .project-content {
            padding: 0.8rem;
          }

          .project-title {
            font-size: 1.1rem;
            margin-bottom: 0.8rem;
          }

          .project-description {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }

          .tech-tag {
            font-size: 0.7rem;
            padding: 0.25rem 0.5rem;
          }

          .action-btn {
            padding: 0.7rem 0.8rem;
            font-size: 0.85rem;
            min-height: 44px;
          }
        }

        /* 高分辨率屏幕优化 */
        @media (min-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* 性能优化 */
        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .project-image img,
          .action-btn {
            transition: none;
          }
          
          .card-glow {
            animation: none;
          }
        }

        /* 高对比度模式支持 */
        @media (prefers-contrast: high) {
          .project-card {
            border-width: 2px;
            border-color: var(--primary-green);
          }
          
          .tech-tag {
            border-width: 2px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;