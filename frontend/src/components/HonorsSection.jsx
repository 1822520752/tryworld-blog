import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, 
  faAward, 
  faMedal, 
  faStar,
  faCloud,
  faRocket,
  faUsers,
  faCode,
  faLightbulb,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

const HonorsSection = () => {
  const [visibleHonors, setVisibleHonors] = useState(new Set());
  const [hoveredHonor, setHoveredHonor] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(null);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  const honorsData = [
    {
      id: 1,
      title: "AI在未来公益项目",
      subtitle: "亚马逊云科技公益项目参与者",
      description: "作为学校学生代表参与亚马逊云科技\"AI在未来\"公益项目，将人工智能技术应用于教育场景",
      icon: faCloud,
      date: "2024年3月",
      category: "公益项目",
      achievements: [
        "获得项目参与认证证书",
        "提升AI技术在教育领域的理解",
        "掌握AWS云服务实际应用",
        "增强团队协作和项目管理能力"
      ],
      highlights: [
        "作为学校学生代表参加2024.8活动",
        "作为学校学生代表参加2025.8活动",
        "项目成果获得导师高度认可",
        "建立了技术社交网络"
      ],
      color: "#ff6b35",
      gradient: "linear-gradient(135deg, #ff6b35, #f7931e)"
    },
    {
      id: 2,
      title: "优秀青年开发者",
      subtitle: "自主学习成就认定",
      description: "通过自学独立完成并部署多个小型项目网站，展现出优秀的自主学习和实践能力",
      icon: faCode,
      date: "2024年6月",
      category: "技术成就",
      achievements: [
        "独立完成6个全栈项目",
        "掌握前后端开发技术栈",
        "持续学习和技术实践",
        "建立个人项目作品集"
      ],
      highlights: [
        "零基础到全栈的完整学习路径",
        "项目代码质量获得社区认可",
        "建立个人技术品牌"
      ],
      color: "#00ff88",
      gradient: "linear-gradient(135deg, #00ff88, #00ffff)"
    },
    {
      id: 3,
      title: "创新学习标兵",
      subtitle: "高中阶段学习成就",
      description: "在高中阶段展现出卓越的学习能力和创新思维，在信息技术领域取得突出成绩",
      icon: faGraduationCap,
      date: "2024年7月",
      category: "学术荣誉",
      achievements: [
        "信息技术课程成绩优异",
        "多次获得学科竞赛奖项",
        "担任编程社团技术顾问",
        "指导同学完成编程项目"
      ],
      highlights: [
        "年级信息技术成绩第一",
        "获得老师和同学一致认可",
        "为学校编程教育做出贡献"
      ],
      color: "#ff00ff",
      gradient: "linear-gradient(135deg, #ff00ff, #8a2be2)"
    },
    {
      id: 4,
      title: "技术创新实践者",
      subtitle: "持续学习与实践",
      description: "保持对新技术的敏锐嗅觉，通过实践项目不断提升技能，在技术道路上稳步前进",
      icon: faLightbulb,
      date: "2024年持续",
      category: "技能成长",
      achievements: [
        "掌握多种前后端技术栈",
        "完成个人技术博客建设",
        "持续学习AI相关技术",
        "建立个人技术知识体系"
      ],
      highlights: [
        "从零基础到独立开发的成长历程",
        "保持每日编程的良好习惯",
        "注重代码质量和最佳实践"
      ],
      color: "#ffd700",
      gradient: "linear-gradient(135deg, #ffd700, #ffed4a)"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const honorId = parseInt(entry.target.dataset.honorId);
            setVisibleHonors(prev => new Set([...prev, honorId]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    const honorCards = sectionRef.current?.querySelectorAll('.honor-card');
    honorCards?.forEach(card => {
      observerRef.current.observe(card);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleHonorClick = (honorId) => {
    setDetailsVisible(detailsVisible === honorId ? null : honorId);
  };

  return (
    <section id="honors" className="section" ref={sectionRef}>
      <div className="container">
        <div className="honors-header text-center mb-lg">
          <h2 className="neon-glow">荣誉成就</h2>
          <p>成长路上的重要里程碑，每个荣誉都是努力的见证</p>
        </div>

        <div className="honors-grid">
          {honorsData.map((honor, index) => (
            <div
              key={honor.id}
              className={`honor-card ${visibleHonors.has(honor.id) ? 'visible' : ''} ${
                hoveredHonor === honor.id ? 'hovered' : ''
              } ${detailsVisible === honor.id ? 'expanded' : ''}`}
              data-honor-id={honor.id}
              onMouseEnter={() => setHoveredHonor(honor.id)}
              onMouseLeave={() => setHoveredHonor(null)}
              onClick={() => handleHonorClick(honor.id)}
              style={{ 
                '--delay': `${index * 0.2}s`,
                '--honor-color': honor.color,
                '--honor-gradient': honor.gradient
              }}
            >
              <div className="card-glow"></div>
              
              <div className="honor-main">
                <div className="trophy-container">
                  <div className="trophy-icon">
                    <FontAwesomeIcon icon={honor.icon} />
                  </div>
                  <div className="trophy-glow"></div>
                  <div className="trophy-particles">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="particle"></div>
                    ))}
                  </div>
                </div>

                <div className="honor-content">
                  <div className="honor-badge">
                    <span>{honor.category}</span>
                  </div>
                  
                  <h3 className="honor-title">{honor.title}</h3>
                  <h4 className="honor-subtitle">{honor.subtitle}</h4>
                  
                  <div className="honor-date">
                    <FontAwesomeIcon icon={faTrophy} />
                    {honor.date}
                  </div>
                  
                  <p className="honor-description">{honor.description}</p>
                  
                  <div className="expand-hint">
                    <span>点击查看详情</span>
                    <FontAwesomeIcon icon={faRocket} />
                  </div>
                </div>
              </div>

              <div className={`honor-details ${detailsVisible === honor.id ? 'visible' : ''}`}>
                <div className="details-content">
                  <div className="achievements-section">
                    <h4>
                      <FontAwesomeIcon icon={faAward} />
                      主要成就
                    </h4>
                    <ul className="achievements-list">
                      {honor.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="highlights-section">
                    <h4>
                      <FontAwesomeIcon icon={faLightbulb} />
                      亮点展示
                    </h4>
                    <ul className="highlights-list">
                      {honor.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="close-details" onClick={(e) => {
                    e.stopPropagation();
                    setDetailsVisible(null);
                  }}>
                    <span>收起详情</span>
                  </div>
                </div>
              </div>

              <div className="honor-border"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .honors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .honor-card {
          position: relative;
          background: rgba(26, 26, 46, 0.9);
          border-radius: var(--radius-xl);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(50px);
          opacity: 0;
          border: 2px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .honor-card.visible {
          transform: translateY(0);
          opacity: 1;
          transition-delay: var(--delay);
        }

        .honor-card.expanded {
          grid-column: 1 / -1;
          max-width: 100%;
        }

        .card-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: var(--honor-gradient);
          border-radius: var(--radius-xl);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          filter: blur(8px);
        }

        .honor-card:hover .card-glow,
        .honor-card.hovered .card-glow {
          opacity: 0.6;
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }

        .honor-main {
          display: flex;
          gap: var(--space-lg);
          padding: var(--space-xl);
          position: relative;
        }

        .trophy-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          flex-shrink: 0;
        }

        .trophy-icon {
          width: 80px;
          height: 80px;
          background: var(--honor-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: var(--dark-blue);
          box-shadow: 
            0 0 30px var(--honor-color),
            inset 0 0 20px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .honor-card:hover .trophy-icon {
          transform: scale(1.1) rotateY(180deg);
        }

        .trophy-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, var(--honor-color), transparent);
          border-radius: 50%;
          opacity: 0.3;
          animation: trophy-glow 3s ease-in-out infinite;
        }

        @keyframes trophy-glow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.6;
          }
        }

        .trophy-particles {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--honor-color);
          border-radius: 50%;
          opacity: 0;
        }

        .particle:nth-child(1) {
          top: 10%;
          left: 50%;
          animation: particle-float 4s ease-in-out infinite;
        }

        .particle:nth-child(2) {
          top: 20%;
          right: 20%;
          animation: particle-float 4s ease-in-out infinite 0.5s;
        }

        .particle:nth-child(3) {
          bottom: 20%;
          right: 10%;
          animation: particle-float 4s ease-in-out infinite 1s;
        }

        .particle:nth-child(4) {
          bottom: 10%;
          left: 50%;
          animation: particle-float 4s ease-in-out infinite 1.5s;
        }

        .particle:nth-child(5) {
          bottom: 20%;
          left: 20%;
          animation: particle-float 4s ease-in-out infinite 2s;
        }

        .particle:nth-child(6) {
          top: 20%;
          left: 10%;
          animation: particle-float 4s ease-in-out infinite 2.5s;
        }

        @keyframes particle-float {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
        }

        .honor-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .honor-badge {
          align-self: flex-start;
        }

        .honor-badge span {
          background: var(--honor-color);
          color: var(--dark-blue);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 0 15px var(--honor-color);
        }

        .honor-title {
          color: var(--honor-color);
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0;
          text-shadow: 0 0 20px var(--honor-color);
          line-height: 1.2;
        }

        .honor-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0;
          opacity: 0.8;
        }

        .honor-date {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--neon-cyan);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .honor-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: var(--space-sm) 0;
          font-size: 0.95rem;
        }

        .expand-hint {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--primary-green);
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: auto;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .honor-card:hover .expand-hint {
          opacity: 1;
        }

        .honor-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: rgba(0, 0, 0, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .honor-details.visible {
          max-height: 500px;
        }

        .details-content {
          padding: var(--space-xl);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xl);
        }

        .achievements-section,
        .highlights-section {
          position: relative;
        }

        .achievements-section h4,
        .highlights-section h4 {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--primary-green);
          font-size: 1.1rem;
          margin-bottom: var(--space-md);
          border-bottom: 1px solid rgba(0, 255, 136, 0.3);
          padding-bottom: var(--space-xs);
        }

        .achievements-list,
        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievements-list li,
        .highlights-list li {
          position: relative;
          padding-left: var(--space-md);
          margin-bottom: var(--space-sm);
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .achievements-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-weight: bold;
        }

        .highlights-list li::before {
          content: '★';
          position: absolute;
          left: 0;
          color: var(--neon-purple);
          font-weight: bold;
        }

        .close-details {
          grid-column: 1 / -1;
          text-align: center;
          margin-top: var(--space-md);
          padding: var(--space-sm);
          color: var(--neon-cyan);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 255, 255, 0.3);
        }

        .close-details:hover {
          background: rgba(0, 255, 255, 0.1);
          border-color: var(--neon-cyan);
        }

        .honor-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: var(--radius-xl);
          background: conic-gradient(
            from 0deg,
            transparent,
            var(--honor-color),
            transparent,
            var(--honor-color),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -2;
          animation: border-rotate 8s linear infinite;
        }

        .honor-card:hover .honor-border {
          opacity: 0.3;
        }

        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* 响应式设计 */
        @media (max-width: 992px) {
          .honors-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }

          .honor-main {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: var(--space-md);
          }

          .trophy-container {
            width: 100px;
            height: 100px;
          }

          .trophy-icon {
            width: 70px;
            height: 70px;
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .honors-grid {
            grid-template-columns: 1fr;
            gap: var(--space-md);
            padding: 0 var(--space-sm);
          }

          .honor-main {
            padding: var(--space-lg);
          }

          .details-content {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
            padding: var(--space-lg);
          }

          .honor-title {
            font-size: 1.4rem;
          }

          .honor-subtitle {
            font-size: 1rem;
          }

          .trophy-container {
            width: 80px;
            height: 80px;
          }

          .trophy-icon {
            width: 60px;
            height: 60px;
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .honor-main {
            padding: var(--space-md);
          }

          .details-content {
            padding: var(--space-md);
          }

          .honor-title {
            font-size: 1.2rem;
          }

          .honor-description {
            font-size: 0.9rem;
          }

          .achievements-list li,
          .highlights-list li {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HonorsSection;