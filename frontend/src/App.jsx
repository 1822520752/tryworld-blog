import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground.jsx';
import Navbar from './components/Navbar.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import HonorsSection from './components/HonorsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SkillsRadar from './components/SkillsRadar.jsx';
import Timeline from './components/Timeline.jsx';
import ContactForm from './components/ContactForm.jsx';
import './styles/global.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [digitalRain, setDigitalRain] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [githubStats, setGithubStats] = useState(null);

  useEffect(() => {
    // 加载全局样式
    const loadStyles = () => {
      // FontAwesome CSS
      const fontAwesome = document.createElement('link');
      fontAwesome.rel = 'stylesheet';
      fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fontAwesome);

      // Tailwind CSS
      const tailwind = document.createElement('link');
      tailwind.rel = 'stylesheet';
      tailwind.href = 'https://hpi-hub.tos-cn-beijing.volces.com/haisnap/cdn/tailwind.min.css';
      document.head.appendChild(tailwind);

      // Google Fonts
      const googleFonts = document.createElement('link');
      googleFonts.rel = 'stylesheet';
      googleFonts.href = 'https://fonts.loli.net/css2?family=Inter:wght@300;400;500;600;700;900&family=Fira+Code:wght@300;400;500&display=swap';
      document.head.appendChild(googleFonts);
    };

    // 获取GitHub统计数据
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch('/api/github/stats');
        const result = await response.json();
        if (result.success) {
          setGithubStats(result.data);
        } else {
          console.warn('GitHub统计数据获取失败:', result.error);
        }
      } catch (error) {
        console.error('GitHub API调用失败:', error);
      }
    };

    loadStyles();
    fetchGitHubStats();

    // 数字雨加载动画
    const loadingTimer = setTimeout(() => {
      setDigitalRain(false);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  // 主题切换处理
  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    const root = document.documentElement;
    
    if (theme === 'purple') {
      root.style.setProperty('--primary-color', '#ff00ff');
      root.style.setProperty('--secondary-color', '#00ffff');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #ff00ff, #8a2be2)');
    } else {
      root.style.setProperty('--primary-color', '#00ff88');
      root.style.setProperty('--secondary-color', '#ff00ff');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #00ff88, #00ffff)');
    }
  };

  // 平滑滚动到指定section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return <LoadingScreen digitalRain={digitalRain} />;
  }

  return (
    <div className={`app ${currentTheme}`}>
      {/* 粒子背景 */}
      <ParticleBackground />
      
      {/* 导航栏 */}
      <Navbar 
        onThemeChange={handleThemeChange}
        currentTheme={currentTheme}
        onNavigate={scrollToSection}
      />

      {/* 主要内容区域 */}
      <main className="main-content">
        {/* 个人名片区域 */}
        <section id="home" className="hero-section">
          <ProfileCard githubStats={githubStats} />
        </section>

        {/* 荣誉展示区 */}
        <HonorsSection />

        {/* 项目展示区 */}
        <ProjectsSection />

        {/* 技能雷达图 */}
        <SkillsRadar />

        {/* 学习历程时间轴 */}
        <Timeline />

        {/* 联系表单 */}
        <ContactForm />
      </main>

      {/* 滚动提示 */}
      <ScrollIndicator />

      <style jsx>{`
        .app {
          min-height: 100vh;
          background: var(--dark-blue);
          color: #ffffff;
          font-family: var(--font-primary);
          overflow-x: hidden;
          position: relative;
        }

        .main-content {
          position: relative;
          z-index: 1;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        /* 视差滚动效果 */
        .parallax-element {
          transform: translateZ(0);
          will-change: transform;
        }

        /* 主题切换动画 */
        .app.purple {
          --primary-green: #ff00ff;
          --neon-cyan: #00ffff;
          --neon-purple: #8a2be2;
        }

        .app.dark {
          --primary-green: #00ff88;
          --neon-cyan: #00ffff;
          --neon-purple: #ff00ff;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .hero-section {
            min-height: 80vh;
            padding-top: 80px;
          }
        }

        /* 性能优化 */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

// 加载屏幕组件
const LoadingScreen = ({ digitalRain }) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="cyber-logo">
          <div className="logo-text">试界</div>
          <div className="logo-subtitle">AI Developer</div>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="countdown">{countdown}</div>
        </div>

        <div className="loading-text">
          初始化量子计算矩阵...
        </div>
      </div>

      {digitalRain && <DigitalRainCanvas />}

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .loading-content {
          text-align: center;
          z-index: 2;
          position: relative;
        }

        .cyber-logo {
          margin-bottom: 3rem;
        }

        .logo-text {
          font-size: 4rem;
          font-weight: 900;
          color: #00ff88;
          text-shadow: 
            0 0 10px #00ff88,
            0 0 20px #00ff88,
            0 0 40px #00ff88;
          animation: logoGlow 2s ease-in-out infinite alternate;
        }

        .logo-subtitle {
          font-size: 1.2rem;
          color: #00ffff;
          margin-top: 0.5rem;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .loading-progress {
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
        }

        .progress-bar {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00ff88, #00ffff);
          width: 0%;
          animation: progressFill 3s ease-out forwards;
          box-shadow: 0 0 10px #00ff88;
        }

        .countdown {
          font-size: 2rem;
          font-weight: bold;
          color: #ff00ff;
          text-shadow: 0 0 20px #ff00ff;
          min-width: 40px;
        }

        .loading-text {
          color: rgba(255, 255, 255, 0.7);
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          animation: textBlink 1.5s ease-in-out infinite;
        }

        @keyframes logoGlow {
          0% {
            text-shadow: 
              0 0 10px #00ff88,
              0 0 20px #00ff88,
              0 0 40px #00ff88;
          }
          100% {
            text-shadow: 
              0 0 20px #00ff88,
              0 0 30px #00ff88,
              0 0 60px #00ff88;
          }
        }

        @keyframes progressFill {
          to {
            width: 100%;
          }
        }

        @keyframes textBlink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0.3;
          }
        }

        @media (max-width: 768px) {
          .logo-text {
            font-size: 3rem;
          }
          
          .progress-bar {
            width: 150px;
          }
        }
      `}</style>
    </div>
  );
};

// 数字雨画布组件
const DigitalRainCanvas = () => {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff88';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}
    />
  );
};

// 滚动指示器组件
const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="scroll-line">
        <div 
          className="scroll-progress"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      <style jsx>{`
        .scroll-indicator {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: none;
        }

        .scroll-line {
          width: 2px;
          height: 100px;
          background: rgba(0, 255, 136, 0.2);
          border-radius: 1px;
          overflow: hidden;
        }

        .scroll-progress {
          width: 100%;
          background: linear-gradient(to bottom, #00ff88, #00ffff);
          border-radius: 1px;
          transition: height 0.1s ease;
          box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
        }

        @media (min-width: 768px) {
          .scroll-indicator {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default App;