import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faTwitter, 
  faLinkedin,
  faTiktok,
  faWeixin
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faMapMarkerAlt, 
  faGraduationCap,
  faCode,
  faRocket,
  faTrophy,
  faHeart,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

// 设置模态框的根元素
if (typeof document !== 'undefined') {
  Modal.setAppElement('#root');
}

const ProfileCard = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [githubStats, setGithubStats] = useState({ stars: '500+', loading: true });
  const [copySuccess, setCopySuccess] = useState(false);
  const [douyinModalOpen, setDouyinModalOpen] = useState(false);
  const profileRef = useRef(null);
  const avatarRef = useRef(null);

  const singleText = '我不确定是否有一天会"成功"，但我知道：机遇是偶然的，但保持好奇与热爱、不断尝试、永远不放弃的执着，是能自己把握的。';

  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/yishan', label: 'GitHub', color: '#333' },
    { 
      icon: faTiktok, 
      url: 'https://v.douyin.com/-l57aoiAx3U/', 
      label: '抖音', 
      color: '#ff0050',
      douyinId: 'v.douyin.com/-l57aoiAx3U'
    },
    { 
      icon: faWeixin, 
      url: 'javascript:void(0);', 
      label: 'CJ-5201215', 
      color: '#07c160',
      isWeChat: true,
      wechatId: 'CJ-5201215'
    },
    { icon: faEnvelope, url: 'mailto:yishan@example.com', label: 'Email', color: '#ea4335' }
  ];

  const achievements = [
    { icon: faRocket, label: '项目数量', value: '6+', color: '#00ff88' },
    { icon: faTrophy, label: '获奖次数', value: '7次', color: '#ffd700' },
    { icon: faCode, label: '代码行数', value: '50K+', color: '#00ffff' },
    { icon: faHeart, label: '技术热情', value: '100%', color: '#ff00ff' }
  ];

  // 微信号复制功能
  const handleWeChatCopy = async (wechatId) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(wechatId);
      } else {
        // 降级方案
        const input = document.createElement('input');
        input.value = wechatId;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('复制失败:', error);
      alert(`微信号: ${wechatId}`);
    }
  };

  // 获取GitHub统计数据
  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch('/api/github/stats');
        const result = await response.json();
        
        if (result.success && result.data) {
          setGithubStats({
            stars: result.data.totalStars || '500+',
            loading: false
          });
        } else {
          throw new Error('API返回数据格式错误');
        }
      } catch (error) {
        console.error('获取GitHub统计失败:', error);
        setGithubStats({
          stars: '500+',
          loading: false
        });
      }
    };

    fetchGitHubStats();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 强制启用所有设备的打字机效果
    if (!isVisible) return;

    let charIndex = 0;
    let typeInterval;

    const typeText = () => {
      if (charIndex <= singleText.length) {
        setTypewriterText(singleText.slice(0, charIndex));
        charIndex++;
        typeInterval = setTimeout(typeText, 80); // 稍微加快移动端速度
      } else {
        // 打字完成后停止
        setIsTyping(false);
        setShowCursor(true); // 保持光标显示
      }
    };

    typeText();

    return () => {
      if (typeInterval) {
        clearTimeout(typeInterval);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleMouseMove = (e) => {
    if (avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setMousePosition({
        x: (e.clientX - centerX) / 20,
        y: (e.clientY - centerY) / 20
      });
    }
  };

  return (
    <section id="profile" className="section" ref={profileRef}>
      <div className="container">
        <div className="profile-wrapper" onMouseMove={handleMouseMove}>
          <div className={`profile-content ${isVisible ? 'visible' : ''}`}>
            
            {/* 左侧头像区域 */}
            <div className="avatar-section">
              <div className="avatar-container" ref={avatarRef}>
                <div className="avatar-glow"></div>
                <div 
                  className="avatar-image"
                  style={{
                    transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
                  }}
                >
                  <img 
                    src="https://haisnap.tos-cn-beijing.volces.com/image/32d2c526-df0a-4200-a5eb-f909ef1eed8d_1757225657737.jpg" 
                    alt="试界 TryWorld - 高中生AI开发者"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.backgroundColor = '#1a1a2e';
                      e.target.style.border = '2px solid var(--primary-green)';
                      console.warn('头像加载失败，使用默认样式');
                    }}
                    onLoad={() => {
                      console.log('头像加载成功');
                    }}
                  />
                  <div className="avatar-border"></div>
                </div>
                
                {/* 环绕粒子效果 */}
                <div className="particle-orbit">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="orbit-particle"
                      style={{ '--delay': `${i * 0.5}s` }}
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </div>
                  ))}
                </div>
              </div>

              {/* 成就统计 */}
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="achievement-item"
                    style={{ '--achievement-color': achievement.color }}
                  >
                    <div className="achievement-icon">
                      <FontAwesomeIcon icon={achievement.icon} />
                    </div>
                    <div className="achievement-info">
                      <span className="achievement-value">{achievement.value}</span>
                      <span className="achievement-label">{achievement.label}</span>
                    </div>
                  </div>
                ))}
                
                {/* 导师介绍模块 */}
                <div className="mentor-section">
                  <h3 className="mentor-title">我的导师</h3>
                  
                  <div className="mentor-list">
                    {/* 郭靖老师 */}
                    <div className="mentor-card">
                      <div className="mentor-avatar">
                        <img 
                          src="https://haisnap.tos-cn-beijing.volces.com/image/6faf098d-3b48-4e13-9763-bd593cf0ebb6_1757308261509.jpg" 
                          alt="郭靖老师" 
                          onError={(e) => e.target.src = 'https://via.placeholder.com/80x80/00ff88/ffffff?text=郭'}
                        />
                        <div className="mentor-glow"></div>
                      </div>
                      <div className="mentor-info">
                        <h4 className="mentor-name">郭靖老师<span className="mentor-nickname">（白鹿第一帅）</span></h4>
                        <p className="mentor-position">大数据与大模型开发工程师</p>
                        <div className="mentor-badges">
                          <span className="badge csdn">CSDN博客专家</span>
                          <span className="badge ali">阿里云社区专家</span>
                          <span className="badge aws">AWS UG Leader</span>
                        </div>
                        <p className="mentor-desc">
                          深耕企业级应用开发与前沿技术研究，拥有5年JavaEE企业级开发运营经验及多项国家工信部高级专项技术证书。
                          中国开发者影响力年度榜单人物，坚信技术的力量，乐于分享与创造。
                        </p>
                        <a 
                          href="https://blog.csdn.net/qq_22695001?spm=1018.2118.3001.5148" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mentor-link csdn-link"
                          title="访问郭靖老师的CSDN博客主页"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="link-icon" />
                          访问CSDN主页
                        </a>
                      </div>
                    </div>

                    {/* 梓渊老师 */}
                    <div className="mentor-card">
                      <div className="mentor-avatar">
                        <img 
                          src="https://haisnap.tos-cn-beijing.volces.com/image/a94fbb5d-f314-40bf-ac21-76e27a324200_1757308474696.jpg" 
                          alt="梓渊老师" 
                          onError={(e) => e.target.src = 'https://via.placeholder.com/80x80/00ffff/ffffff?text=梓'}
                        />
                        <div className="mentor-glow"></div>
                      </div>
                      <div className="mentor-info">
                        <h4 className="mentor-name">梓渊老师</h4>
                        <p className="mentor-position">数智教育专家</p>
                        <div className="mentor-badges">
                          <span className="badge education">儿童数智素养专家</span>
                          <span className="badge ethics">技术伦理研究者</span>
                        </div>
                        <p className="mentor-desc">
                          国内首家儿童数智素养的核心成员，专注于技术伦理与社会创新领域的青年实践者。
                          致力于探索数智技术教育的普惠性与伦理性，培养下一代数字公民。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧信息区域 */}
            <div className="info-section">
              
              {/* 霓虹灯牌标题 */}
              <div className="neon-title-container">
                <h1 className="neon-title">
                  <span className="name-text">试界 TryWorld</span>
                  <span className="separator">|</span>
                  <span className="role-text">高中生AI开发者</span>
                </h1>
              </div>

              {/* 基本信息 */}
              <div className="basic-info">
                <div className="info-item">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>高中三年级</span>
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>中国</span>
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faCode} />
                  <span>全栈开发 · AI研究</span>
                </div>
              </div>

              {/* 打字机效果描述 */}
              <div className="typewriter-container">
                <div className="typewriter-text">
                  {typewriterText || singleText}
                  <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
                </div>
              </div>

              {/* 个人简介 */}
              <div className="bio-section">
                <p>
                  热爱技术的高中生，专注于人工智能和Web开发领域。
                  通过自主学习掌握了前端技术，
                  并将AI技术应用于实际项目中，追求技术与创意的完美结合。
                </p>
              </div>

              {/* 技术标签 */}
              <div className="tech-tags">
                <div className="tag-category">
                  <h4>前端技术</h4>
                  <div className="tags">
                    <span className="tech-tag frontend">React</span>
                    <span className="tech-tag frontend">JavaScript</span>
                    <span className="tech-tag frontend">HTML/CSS</span>
                  </div>
                </div>
                <div className="tag-category">
                  <h4>后端技术</h4>
                  <div className="tags">
                    <span className="tech-tag backend">Python</span>
                    <span className="tech-tag backend">Node.js</span>
                    <span className="tech-tag backend">Express</span>
                  </div>
                </div>
                <div className="tag-category">
                  <h4>AI/学习</h4>
                  <div className="tags">
                    <span className="tech-tag ai">机器学习基础</span>
                    <span className="tech-tag ai">OpenAI API</span>
                    <span className="tech-tag ai">数据分析</span>
                  </div>
                </div>
              </div>

              {/* 社交链接 */}
              <div className="social-links">
                <h4>联系方式</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.isWeChat ? '#' : social.url}
                      className="social-link"
                      target={social.isWeChat ? undefined : "_blank"}
                      rel={social.isWeChat ? undefined : "noopener noreferrer"}
                      onClick={(e) => {
                        if (social.isWeChat) {
                          e.preventDefault();
                          handleWeChatCopy(social.wechatId);
                        }
                        // 其他链接包括抖音直接跳转，不需要阻止默认行为
                      }}
                      style={{ '--social-color': social.color }}
                      title={social.isWeChat ? `点击复制微信号: ${social.wechatId}` : 
                            social.douyinId ? '抖音主页' : social.label}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* 师生合照 */}
              <div className="group-photo-section">
                <h4>师生团队</h4>
                <div className="photo-container">
                  <img 
                    src="https://haisnap.tos-cn-beijing.volces.com/image/b72c34ee-f205-48c9-abc2-324072fc6f35_1757309086015.jpg" 
                    alt="师生合照 - 与导师共同探讨技术前沿"
                    className="group-photo"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.backgroundColor = '#1a1a2e';
                      e.target.style.minHeight = '200px';
                      e.target.style.display = 'flex';
                      e.target.style.alignItems = 'center';
                      e.target.style.justifyContent = 'center';
                      e.target.style.color = 'rgba(255,255,255,0.5)';
                      e.target.style.fontSize = '0.9rem';
                      e.target.alt = '图片加载中...';
                      console.warn('师生合照加载失败，使用占位样式');
                    }}
                    onLoad={() => {
                      console.log('师生合照加载成功');
                    }}
                  />
                  <p className="photo-caption">与导师共同探讨技术前沿</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 复制成功提示 */}
      {copySuccess && (
        <div className="copy-notification">
          微信号已复制到剪贴板
        </div>
      )}

      {/* 抖音二维码模态框 */}
      <Modal
        isOpen={douyinModalOpen}
        onRequestClose={() => setDouyinModalOpen(false)}
        className="douyin-qr-modal"
        overlayClassName="ReactModal__Overlay"
        closeTimeoutMS={200}
      >
        <h3 className="douyin-title">扫码关注我的抖音</h3>
        <img 
          src="https://haisnap.tos-cn-beijing.volces.com/image/fadb39f0-3b14-4162-b1a4-5514b6508801_1757255693651.jpg" 
          alt="抖音二维码" 
          className="douyin-qr-image"
          loading="lazy"
        />
        <p className="douyin-subtitle">一起分享有趣的技术内容</p>
        <button 
          className="modal-close-btn"
          onClick={() => setDouyinModalOpen(false)}
        >
          关闭
        </button>
      </Modal>

      <style jsx>{`
        .profile-wrapper {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-xxl) 0;
        }

        .profile-content {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: var(--space-xxl);
          align-items: start;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .profile-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* 左侧头像区域 */
        .avatar-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-xl);
        }

        .avatar-container {
          position: relative;
          width: 250px;
          height: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.3) 0%,
            rgba(0, 255, 136, 0.1) 50%,
            transparent 100%
          );
          border-radius: 50%;
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .avatar-image {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 0.1s ease;
          z-index: 2;
        }

        .avatar-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .avatar-border {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            var(--primary-green),
            var(--neon-cyan),
            var(--neon-purple),
            var(--primary-green)
          );
          animation: border-rotate 4s linear infinite;
          z-index: -1;
        }

        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .particle-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .orbit-particle {
          position: absolute;
          width: 30px;
          height: 30px;
          background: var(--primary-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-blue);
          font-size: 0.8rem;
          animation: orbit 8s linear infinite;
          animation-delay: var(--delay);
          transform-origin: 150px 150px;
          box-shadow: 0 0 15px var(--primary-green);
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
          width: 100%;
        }

        /* 导师介绍样式 */
        .mentor-section {
          grid-column: span 2;
          margin-top: var(--space-xl);
          padding: var(--space-lg);
          background: rgba(26, 26, 46, 0.6);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 255, 136, 0.2);
          position: relative;
          overflow: hidden;
        }

        .mentor-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent);
          transition: left 0.8s ease;
        }

        .mentor-section:hover::before {
          left: 100%;
        }

        .mentor-title {
          color: var(--primary-green);
          font-size: 1.3rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: var(--space-lg);
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
          position: relative;
        }

        .mentor-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary-green), transparent);
        }

        .mentor-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .mentor-card {
          display: flex;
          gap: var(--space-md);
          align-items: flex-start;
          padding: var(--space-md);
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          position: relative;
        }

        .mentor-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          border-color: rgba(0, 255, 136, 0.3);
        }

        .mentor-avatar {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid var(--primary-green);
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
        }

        .mentor-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .mentor-card:hover .mentor-avatar img {
          transform: scale(1.05);
        }

        .mentor-glow {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            var(--primary-green),
            var(--neon-cyan),
            var(--primary-green)
          );
          animation: mentor-glow 3s linear infinite;
          z-index: -1;
          opacity: 0.6;
        }

        @keyframes mentor-glow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .mentor-info {
          flex: 1;
          min-width: 0;
        }

        .mentor-name {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 var(--space-xs) 0;
          line-height: 1.3;
        }

        .mentor-nickname {
          color: var(--neon-cyan);
          font-size: 0.9rem;
          font-weight: 500;
          margin-left: var(--space-xs);
        }

        .mentor-position {
          color: var(--neon-cyan);
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0 0 var(--space-sm) 0;
          opacity: 0.9;
        }

        .mentor-badges {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-bottom: var(--space-sm);
        }

        .badge {
          padding: 0.25rem 0.6rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid;
        }

        .badge.csdn {
          background: rgba(252, 107, 3, 0.15);
          color: #fc6b03;
          border-color: #fc6b03;
        }

        .badge.ali {
          background: rgba(255, 106, 0, 0.15);
          color: #ff6a00;
          border-color: #ff6a00;
        }

        .badge.aws {
          background: rgba(255, 153, 0, 0.15);
          color: #ff9900;
          border-color: #ff9900;
        }

        .badge.education {
          background: rgba(0, 188, 212, 0.15);
          color: #00bcd4;
          border-color: #00bcd4;
        }

        .badge.ethics {
          background: rgba(156, 39, 176, 0.15);
          color: #9c27b0;
          border-color: #9c27b0;
        }

        .badge:hover {
          transform: scale(1.05);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .mentor-desc {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 var(--space-sm) 0;
          text-align: justify;
        }

        .mentor-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          padding: 0.4rem 0.8rem;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: var(--radius-sm);
          transition: all 0.3s ease;
          margin-top: var(--space-xs);
          border: 1px solid;
        }

        .mentor-link.csdn-link {
          background: rgba(252, 107, 3, 0.1);
          color: #fc6b03;
          border-color: rgba(252, 107, 3, 0.3);
        }

        .mentor-link.csdn-link:hover {
          background: rgba(252, 107, 3, 0.2);
          border-color: #fc6b03;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(252, 107, 3, 0.3);
        }

        .mentor-link.csdn-link:active {
          transform: translateY(0);
        }

        .link-icon {
          font-size: 0.75rem;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          background: rgba(26, 26, 46, 0.8);
          padding: var(--space-md);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .achievement-item:hover {
          border-color: var(--achievement-color);
          box-shadow: 0 0 20px var(--achievement-color);
          transform: translateY(-2px);
        }

        .achievement-icon {
          width: 35px;
          height: 35px;
          background: var(--achievement-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-blue);
          font-size: 1rem;
          font-weight: bold;
          box-shadow: 0 0 10px var(--achievement-color);
        }

        .achievement-info {
          display: flex;
          flex-direction: column;
        }

        .achievement-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--achievement-color);
          line-height: 1;
        }

        .achievement-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.2;
        }

        /* 右侧信息区域 */
        .info-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }

        .neon-title-container {
          text-align: center;
          padding: 1.5rem;
          background: rgba(10, 10, 26, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0, 255, 136, 0.2);
        }

        .neon-title {
          font-family: 'Arial Black', 'Inter', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #00ff88;
          text-shadow: 
            0 0 5px rgba(0, 255, 136, 0.8),
            0 0 10px rgba(0, 255, 136, 0.4);
          letter-spacing: 1px;
          margin: 0;
          line-height: 1.2;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .name-text {
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .separator {
          margin: 0 0.8rem;
          color: #00ffff;
          font-weight: 400;
          text-shadow: 0 0 3px rgba(0, 255, 255, 0.6);
        }

        .role-text {
          font-weight: 600;
          opacity: 0.9;
          letter-spacing: 0.5px;
        }

        .basic-info {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          padding: var(--space-xs) var(--space-sm);
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(0, 255, 136, 0.2);
        }

        .info-item svg {
          color: var(--primary-green);
        }

        .typewriter-container {
          background: rgba(26, 26, 46, 0.9);
          padding: var(--space-lg);
          border-radius: var(--radius-md);
          border: 1px solid rgba(0, 255, 136, 0.3);
          min-height: 60px;
          display: flex;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }

        .typewriter-text {
          font-size: 1.1rem;
          color: var(--primary-green);
          font-family: var(--font-code);
          line-height: 1.6;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .cursor {
          color: var(--primary-green);
          font-weight: bold;
          margin-left: 2px;
          opacity: 0;
          transition: opacity 0.1s;
          animation: none;
        }

        .cursor.visible {
          opacity: 1;
          animation: cursor-blink 1s infinite;
        }

        @keyframes cursor-blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        .bio-section p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
        }

        .tech-tags {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .tag-category h4 {
          color: var(--neon-cyan);
          font-size: 1rem;
          margin-bottom: var(--space-sm);
          border-bottom: 1px solid rgba(0, 255, 255, 0.3);
          padding-bottom: var(--space-xs);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
        }

        .tech-tag {
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .tech-tag.frontend {
          background: rgba(97, 218, 251, 0.2);
          color: #61dafb;
          border: 1px solid #61dafb;
        }

        .tech-tag.backend {
          background: rgba(55, 153, 51, 0.2);
          color: #379933;
          border: 1px solid #379933;
        }

        .tech-tag.ai {
          background: rgba(255, 111, 0, 0.2);
          color: #ff6f00;
          border: 1px solid #ff6f00;
        }

        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .social-links h4 {
          color: var(--primary-green);
          font-size: 1.1rem;
          margin-bottom: var(--space-md);
          border-bottom: 1px solid rgba(0, 255, 136, 0.3);
          padding-bottom: var(--space-xs);
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-sm);
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-sm) var(--space-md);
          background: rgba(26, 26, 46, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          cursor: pointer;
          position: relative;
        }

        .social-link:hover {
          border-color: var(--social-color);
          color: var(--social-color);
          box-shadow: 0 0 15px var(--social-color);
          transform: translateY(-2px);
        }

        .social-link:active {
          transform: scale(0.95);
        }

        .social-link svg {
          font-size: 1.1rem;
        }

        .group-photo-section {
          margin-top: 0;
        }

        .group-photo-section h4 {
          color: var(--primary-green);
          font-size: 1.1rem;
          margin-bottom: var(--space-md);
          border-bottom: 1px solid rgba(0, 255, 136, 0.3);
          padding-bottom: var(--space-xs);
        }

        .photo-container {
          background: rgba(26, 26, 46, 0.8);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: var(--radius-md);
          padding: var(--space-md);
          transition: all 0.3s ease;
        }

        .photo-container:hover {
          border-color: var(--primary-green);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
          transform: translateY(-2px);
        }

        .group-photo {
          width: 100%;
          height: auto;
          border-radius: var(--radius-sm);
          display: block;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .group-photo:hover {
          transform: scale(1.02);
        }

        .photo-caption {
          margin: var(--space-sm) 0 0 0;
          color: var(--neon-cyan);
          font-size: 0.9rem;
          font-style: italic;
          text-align: center;
          opacity: 0.9;
        }

        .copy-notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background: var(--primary-green);
          color: var(--dark-blue);
          padding: var(--space-sm) var(--space-lg);
          border-radius: var(--radius-md);
          font-weight: 600;
          z-index: 1000;
          animation: slideInRight 0.3s ease-out;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* 响应式设计 */
        @media (max-width: 992px) {
          .profile-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
            text-align: center;
          }

          .avatar-container {
            width: 200px;
            height: 200px;
          }

          .avatar-image {
            width: 160px;
            height: 160px;
          }

          .particle-orbit {
            width: 240px;
            height: 240px;
          }

          .orbit-particle {
            transform-origin: 120px 120px;
          }

          @keyframes orbit {
            from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
          }

          .neon-title {
            font-size: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .separator {
            display: none;
          }
        }

        /* 移动端专属优化 - 修复黑屏问题和容器布局 */
        @media (max-width: 768px) {
          html {
            -webkit-text-size-adjust: 100%;
            font-size: 14px; /* 移动端字体优化 */
          }
          
          body {
            background: #0a0a0a !important;
            overflow-x: hidden;
            min-height: 100vh;
            position: relative;
          }
          
          .container {
            max-width: 100vw !important;
            width: 100% !important;
            padding: 0 1rem !important;
            margin: 0 auto !important;
            overflow-x: hidden !important;
            /* 移动端容器强制显示优化 */
            background: transparent !important;
            position: relative !important;
            z-index: 1 !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            box-sizing: border-box !important;
          }
          
          .profile-wrapper {
            padding: var(--space-lg) 0 !important;
            background: #0a0a0a !important;
            min-height: 100vh !important;
            width: 100% !important;
            overflow-x: hidden !important;
            position: relative !important;
          }
          
          /* 修复profile-content移动端黑屏问题 */
          .profile-content {
            display: flex !important;
            flex-direction: column !important;
            gap: var(--space-lg) !important;
            padding: 1rem !important;
            min-height: calc(100vh - 2rem) !important;
            background: #0a0a0a !important;
            opacity: 1 !important;
            transform: none !important;
            visibility: visible !important;
            width: 100% !important;
            overflow-x: hidden !important;
            box-sizing: border-box !important;
          }
          
          /* 强制显示所有子元素 */
          .profile-content > * {
            opacity: 1 !important;
            transform: none !important;
            visibility: visible !important;
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: hidden !important;
            box-sizing: border-box !important;
          }
          
          .profile-content.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .basic-info {
            justify-content: center;
          }

          .neon-title {
            font-size: 1.8rem;
          }

          .name-text,
          .role-text {
            display: block;
            margin: 0.3rem 0;
          }

          .name-text {
            font-weight: 900;
          }

          .role-text {
            font-weight: 600;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .tech-tags {
            text-align: left;
          }

          /* 移动端打字机效果优化 - 确保动画正常显示 */
          .typewriter-container {
            padding: 1.5rem 1rem !important;
            min-height: 120px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            display: flex !important;
            align-items: flex-start !important;
            background: rgba(26, 26, 46, 0.9) !important;
            border: 1px solid rgba(0, 255, 136, 0.3) !important;
            border-radius: 8px !important;
          }

          .typewriter-text {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
            text-align: left !important;
            word-break: break-word !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
            display: inline-block !important;
            visibility: visible !important;
            opacity: 1 !important;
            color: #00ff88 !important;
            font-family: 'Courier New', monospace !important;
            width: 100% !important;
            max-width: 100% !important;
            white-space: pre-wrap !important;
            position: relative !important;
            z-index: 1 !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: none !important;
            filter: none !important;
            text-shadow: 0 0 3px rgba(0, 255, 136, 0.5) !important;
            /* 强制启用动画 */
            animation: none !important;
            transition: none !important;
          }

          .typewriter-text::before {
            content: '' !important;
            display: none !important;
          }

          .typewriter-text::after {
            content: '' !important;
            display: none !important;
          }

          .cursor {
            display: inline !important;
            font-size: 0.95rem !important;
            color: #00ff88 !important;
            opacity: 1 !important;
            margin-left: 2px !important;
            vertical-align: baseline !important;
          }

          .cursor.visible {
            opacity: 1 !important;
            animation: cursor-blink 1s infinite !important;
          }
          
          /* 确保光标闪烁动画在移动端正常工作 */
          @keyframes cursor-blink {
            0%, 50% {
              opacity: 1;
            }
            51%, 100% {
              opacity: 0;
            }
          }

          /* 导师模块响应式 */
          .mentor-section {
            grid-column: span 1;
            padding: var(--space-md);
          }

          .mentor-card {
            flex-direction: column;
            text-align: center;
            gap: var(--space-sm);
          }

          .mentor-avatar {
            width: 60px;
            height: 60px;
            align-self: center;
          }

          .mentor-badges {
            justify-content: center;
          }

          .mentor-desc {
            text-align: center;
            font-size: 0.85rem;
          }
          
          /* 移动端图片优化和加载失败处理 */
          .avatar-image {
            width: 120px !important;
            height: 120px !important;
            max-height: 50vh;
            object-fit: cover !important;
            background: #1a1a2e !important;
            border: 2px solid var(--primary-green) !important;
          }
          
          .avatar-image img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            display: block !important;
          }
          
          .group-photo {
            max-height: 40vh !important;
            width: 100% !important;
            object-fit: contain !important;
            background: #1a1a2e !important;
            border-radius: var(--radius-sm) !important;
          }
          
          /* 移动端容器强制显示优化 */
          .avatar-section,
          .info-section,
          .achievements-grid,
          .mentor-section {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: hidden !important;
            box-sizing: border-box !important;
            margin: 0 !important;
            padding: var(--space-sm) 0 !important;
          }
        }

        @media (max-width: 480px) {
          .avatar-container {
            width: 150px;
            height: 150px;
          }

          .avatar-image {
            width: 120px;
            height: 120px;
          }

          .neon-title {
            font-size: 1.6rem;
          }

          .typewriter-container {
            padding: var(--space-sm) !important;
            min-height: 100px !important;
          }

          .typewriter-text {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
            padding: 0 0.5rem !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            word-break: break-word !important;
            white-space: normal !important;
          }

          .cursor {
            font-size: 0.9rem !important;
          }

          .achievement-item {
            padding: var(--space-sm);
          }

          .achievement-icon {
            width: 30px;
            height: 30px;
            font-size: 0.9rem;
          }

          .achievement-value {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProfileCard;