import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faHome, 
  faUser, 
  faTrophy, 
  faProjectDiagram, 
  faChartPie, 
  faTimeline, 
  faEnvelope,
  faMoon,
  faSun,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onThemeChange, currentTheme, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(currentTheme || 'dark');
  const [isThemeAnimating, setIsThemeAnimating] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { id: 'home', label: '首页', icon: faHome },
    { id: 'profile', label: '关于', icon: faUser },
    { id: 'honors', label: '荣誉', icon: faTrophy },
    { id: 'projects', label: '项目', icon: faProjectDiagram },
    { id: 'skills', label: '技能', icon: faChartPie },
    { id: 'timeline', label: '历程', icon: faTimeline },
    { id: 'contact', label: '联系', icon: faEnvelope }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);

      // 仅检测当前活跃的section，不进行任何定位操作
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        const navbarHeight = 80;
        return rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
        // 仅更新URL哈希，不强制滚动
        if (window.location.hash !== `#${currentSection.id}`) {
          window.history.replaceState(null, null, `#${currentSection.id}`);
        }
      }
    };

    // 移除初始哈希检查和自动滚动逻辑
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // 同步外部传入的主题状态
  useEffect(() => {
    if (currentTheme && currentTheme !== theme) {
      setTheme(currentTheme);
    }
  }, [currentTheme, theme]);

  const handleNavClick = (sectionId, event) => {
    // 阻止默认行为和事件冒泡
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    console.log(`导航点击: ${sectionId}`);
    
    // 立即更新活动状态和URL哈希
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    const newHash = `#${sectionId}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, null, newHash);
    }
    
    // 获取目标元素但不进行任何滚动操作
    let targetSection = document.getElementById(sectionId);
    
    if (!targetSection) {
      targetSection = document.querySelector(`[data-section="${sectionId}"]`) ||
                      document.querySelector(`.${sectionId}-section`) ||
                      document.querySelector(`section[id*="${sectionId}"]`);
    }
    
    // 特殊处理profile区域
    if (sectionId === 'profile' && !targetSection) {
      targetSection = document.querySelector('.hero-section') ||
                      document.querySelector('.profile-card') ||
                      document.querySelector('[class*="profile"]');
    }
    
    if (targetSection) {
      console.log(`找到目标元素:`, targetSection);
      // 仅确保元素可见，不进行滚动定位
      targetSection.style.display = 'block';
      targetSection.style.visibility = 'visible';
      targetSection.style.opacity = '1';
    } else {
      console.warn(`目标区域 "${sectionId}" 未找到`);
    }
    
    // 使用父组件传递的导航方法
    if (onNavigate) {
      onNavigate(sectionId);
    }

    // 添加触觉反馈
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  const toggleTheme = () => {
    if (isThemeAnimating) return;
    
    setIsThemeAnimating(true);
    const newTheme = theme === 'dark' ? 'purple' : 'dark';
    setTheme(newTheme);
    
    // 调用父组件的主题切换方法
    if (onThemeChange) {
      onThemeChange(newTheme);
    }
    
    // 更新CSS变量
    const root = document.documentElement;
    if (newTheme === 'purple') {
      root.style.setProperty('--primary-color', '#ff00ff');
      root.style.setProperty('--secondary-color', '#00ffff');
    } else {
      root.style.setProperty('--primary-color', '#00ff88');
      root.style.setProperty('--secondary-color', '#ff00ff');
    }

    setTimeout(() => {
      setIsThemeAnimating(false);
    }, 500);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <span className="logo-text">试界 TryWorld</span>
            <div className="logo-glow"></div>
          </div>

          <div className="desktop-menu">
            <div className="nav-menu">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  onMouseDown={(e) => e.preventDefault()} 
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                  <div className="nav-glow"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="nav-controls">
            <button
              className={`theme-toggle ${isThemeAnimating ? 'animating' : ''}`}
              onClick={toggleTheme}
            >
              <FontAwesomeIcon
                icon={theme === 'dark' ? faMoon : faSun}
                className="theme-icon"
              />
              <div className="theme-glow"></div>
            </button>

            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} className="menu-icon" />
            </button>
          </div>
        </div>

        {/* 导航栏边框发光效果 */}
        <div className="nav-border"></div>
      </nav>

      {/* 移动端侧边抽屉菜单 */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <FontAwesomeIcon icon={faRocket} />
              <span>试界 TryWorld</span>
            </div>
            <button 
              className="mobile-menu-close"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="mobile-menu-items">
            {navItems.map((item, index) => (
              <div
                key={item.id}
                className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(item.id, e)}
                onMouseDown={(e) => e.preventDefault()}
                style={{ '--delay': `${index * 0.1}s`, cursor: 'pointer' }}
              >
                <FontAwesomeIcon icon={item.icon} className="mobile-nav-icon" />
                <span className="mobile-nav-label">{item.label}</span>
                <div className="mobile-nav-glow"></div>
              </div>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <button 
              className="mobile-theme-toggle"
              onClick={toggleTheme}
            >
              <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
              <span>{theme === 'dark' ? '夜间模式' : '紫色主题'}</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 255, 136, 0.2);
          transition: all 0.3s ease;
          height: 80px;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(30px);
          border-bottom-color: rgba(0, 255, 136, 0.4);
          box-shadow: 0 4px 30px rgba(0, 255, 136, 0.1);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-lg);
          height: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          position: relative;
          cursor: pointer;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-blue);
          font-size: 1.2rem;
          font-weight: bold;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
          transition: all 0.3s ease;
        }

        .logo-icon:hover {
          transform: rotate(360deg) scale(1.1);
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.8);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--primary-green);
          text-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
          font-family: var(--font-primary);
        }

        .logo-glow {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: radial-gradient(circle, rgba(0, 255, 136, 0.2), transparent);
          border-radius: 50px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-logo:hover .logo-glow {
          opacity: 1;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .nav-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-xs);
          padding: var(--space-sm) var(--space-md);
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid transparent;
          overflow: hidden;
          cursor: pointer;
          min-width: 80px;
          min-height: 48px;
          justify-content: center;
        }

        .nav-item:hover {
          color: var(--primary-green);
          border-color: rgba(0, 255, 136, 0.3);
          background: rgba(0, 255, 136, 0.05);
          transform: translateY(-2px);
        }

        .nav-item.active {
          color: var(--primary-green);
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
          box-shadow: 
            0 0 20px rgba(0, 255, 136, 0.3),
            inset 0 0 20px rgba(0, 255, 136, 0.1);
        }

        .nav-item.active .nav-glow {
          opacity: 1;
        }

        .nav-icon {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }

        .nav-item:hover .nav-icon {
          transform: scale(1.2);
        }

        .nav-label {
          font-size: 0.8rem;
          white-space: nowrap;
        }

        .nav-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(0, 255, 136, 0.1),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .nav-item:hover .nav-glow {
          opacity: 1;
          animation: glow-sweep 1s ease-in-out;
        }

        @keyframes glow-sweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .theme-toggle {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-green);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .theme-toggle:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
        }

        .theme-toggle.animating {
          animation: theme-pulse 0.5s ease;
        }

        @keyframes theme-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .theme-icon {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .theme-toggle:hover .theme-icon {
          transform: rotate(180deg);
        }

        .theme-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: conic-gradient(
            from 0deg,
            var(--primary-green),
            var(--neon-cyan),
            var(--neon-purple),
            var(--primary-green)
          );
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          animation: rotate 3s linear infinite;
        }

        .theme-toggle:hover .theme-glow {
          opacity: 0.6;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .mobile-menu-toggle {
          display: none;
          width: 44px;
          height: 44px;
          background: transparent;
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: var(--radius-md);
          color: var(--primary-green);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
        }

        .menu-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .nav-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--primary-green),
            transparent
          );
          opacity: 0.5;
        }

        /* 移动端菜单样式 */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2000;
          visibility: hidden;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-menu.open {
          visibility: visible;
          opacity: 1;
        }

        .mobile-menu-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
        }

        .mobile-menu-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 320px;
          height: 100vh;
          background: rgba(26, 26, 46, 0.95);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(0, 255, 136, 0.3);
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: flex;
          flex-direction: column;
        }

        .mobile-menu.open .mobile-menu-content {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-lg);
          border-bottom: 1px solid rgba(0, 255, 136, 0.2);
        }

        .mobile-logo {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--primary-green);
          font-size: 1.2rem;
          font-weight: bold;
        }

        .mobile-menu-close {
          width: 40px;
          height: 40px;
          background: transparent;
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 50%;
          color: var(--primary-green);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-close:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
        }

        .mobile-menu-items {
          flex: 1;
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .mobile-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          transition: all 0.3s ease;
          transform: translateX(50px);
          opacity: 0;
          animation: slideInMobile 0.5s ease forwards;
          animation-delay: var(--delay);
          overflow: hidden;
          cursor: pointer;
        }

        .mobile-nav-item:hover,
        .mobile-nav-item.active {
          color: var(--primary-green);
          background: rgba(0, 255, 136, 0.1);
          border-color: rgba(0, 255, 136, 0.3);
          transform: translateX(0);
        }

        @keyframes slideInMobile {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .mobile-nav-icon {
          font-size: 1.2rem;
          width: 24px;
          text-align: center;
        }

        .mobile-nav-label {
          font-size: 1rem;
          font-weight: 600;
        }

        .mobile-nav-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 136, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .mobile-nav-item:hover .mobile-nav-glow {
          left: 100%;
        }

        .mobile-menu-footer {
          padding: var(--space-lg);
          border-top: 1px solid rgba(0, 255, 136, 0.2);
        }

        .mobile-theme-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          background: rgba(0, 255, 136, 0.05);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: var(--radius-md);
          color: var(--primary-green);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          font-weight: 600;
        }

        .mobile-theme-toggle:hover {
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--primary-green);
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 var(--space-md);
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo-text {
            font-size: 1.3rem;
          }

          .logo-icon {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .theme-toggle {
            width: 40px;
            height: 40px;
          }

          .mobile-menu-content {
            width: 280px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            height: 70px;
          }

          .nav-container {
            padding: 0 var(--space-sm);
          }

          .logo-text {
            font-size: 1.2rem;
          }

          .logo-icon {
            width: 32px;
            height: 32px;
            font-size: 0.9rem;
          }

          .theme-toggle,
          .mobile-menu-toggle {
            width: 36px;
            height: 36px;
          }

          .mobile-menu-content {
            width: 100vw;
          }
        }

        /* 禁用平滑滚动行为，防止自动定位 */
        html {
          scroll-behavior: auto;
        }
      `}</style>
    </>
  );
};

export default Navbar;