import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBrain, faRocket, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 学习历程数据
  const timelineData = [
    {
      id: 1,
      year: "2021",
      title: "编程启蒙之路",
      date: "初二 · 2021年",
      description: "初二第一次接触编程，由于学校没有专业老师指导，通过自主学习掌握编程基础知识。凭借坚持不懈的努力和对技术的热爱，在市级编程竞赛中荣获一等奖，为未来的技术学习奠定了坚实基础。",
      icon: faCode,
      color: "#00ff88",
      achievements: ["市级编程竞赛一等奖", "自学编程基础", "建立技术兴趣"],
      skills: ["基础编程", "逻辑思维", "自主学习"]
    },
    {
      id: 2,
      year: "2023",
      title: "AI技术探索",
      date: "高中 · 2023年",
      description: "高中阶段有幸接触到亚马逊云科技"AI在未来"公益项目，系统学习了机器强化学习理论与Python编程实践。通过项目的专业培训和实战练习，成功掌握了AI领域的基础知识，并有幸参加了该项目的全国联赛总决赛。",
      icon: faBrain,
      color: "#ff00ff",
      achievements: ["参与AI在未来公益项目", "全国联赛总决赛", "掌握强化学习"],
      skills: ["Python", "机器学习", "强化学习", "AWS"]
    },
    {
      id: 3,
      year: "2024",
      title: "AI深度实践",
      date: "持续学习 · 2024年",
      description: "随着世界AI技术的快速发展，我渐渐对AI技术产生了浓厚兴趣，开始自主研究学习相关技术。尝试独立开发AI小项目并成功部署上线，在第二次全国联赛总决赛中有幸结识了几位优秀的导师，为我未来的技术发展提供了很大帮助。",
      icon: faRocket,
      color: "#00ffff",
      achievements: ["独立开发AI项目", "项目部署上线", "结识技术导师"],
      skills: ["项目开发", "部署运维", "技术交流", "导师指导"]
    },
    {
      id: 4,
      year: "未来",
      title: "持续成长",
      date: "展望未来",
      description: "继续在AI技术领域深入探索，在导师的指导下不断提升技术能力，致力于开发更多有价值的AI应用项目，为技术社区贡献自己的力量。",
      icon: faGraduationCap,
      color: "#ffd700",
      achievements: ["技术能力提升", "社区贡献", "持续学习"],
      skills: ["深度学习", "项目管理", "技术分享", "团队协作"]
    }
  ];

  useEffect(() => {
    // 模拟加载过程
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 滚动监听，实现动画效果
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      const windowHeight = window.innerHeight;

      timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight * 0.8) {
          if (!visibleItems.includes(index)) {
            setVisibleItems(prev => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始检查

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems]);

  if (isLoading) {
    return (
      <section id="timeline" className="section timeline-section">
        <div className="container">
          <div className="timeline-loading">
            <div className="loading-spinner"></div>
            <p>加载学习历程...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <div className="section-header text-center mb-lg">
          <h2 className="neon-glow">学习历程</h2>
          <p className="section-subtitle">从编程启蒙到AI探索的成长足迹</p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${visibleItems.includes(index) ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div 
                className="timeline-marker"
                style={{ '--marker-color': item.color }}
              >
                <FontAwesomeIcon icon={item.icon} />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-date">{item.date}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                </div>
                
                <p className="timeline-description">{item.description}</p>
                
                <div className="timeline-achievements">
                  <h4>主要成就</h4>
                  <ul className="achievements-list">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="timeline-skills">
                  <h4>技能获得</h4>
                  <div className="skills-tags">
                    {item.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="skill-tag"
                        style={{ '--tag-color': item.color }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.9), rgba(26, 26, 46, 0.9));
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .timeline-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="rgba(0,255,136,0.1)"/></svg>') repeat;
          background-size: 50px 50px;
          opacity: 0.3;
          z-index: -1;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          margin-top: 1rem;
        }

        .timeline-loading {
          text-align: center;
          padding: 4rem 0;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(0, 255, 136, 0.3);
          border-top: 3px solid #00ff88;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .timeline-wrapper {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, 
            #00ff88 0%,
            #00ffff 25%,
            #ff00ff 50%,
            #ffd700 75%,
            #00ff88 100%
          );
          transform: translateX(-50%);
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
        }

        .timeline-item {
          position: relative;
          margin: 4rem 0;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: var(--delay);
        }

        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 0;
          margin-right: calc(50% + 3rem);
          text-align: right;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: calc(50% + 3rem);
          margin-right: 0;
          text-align: left;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 2rem;
          width: 60px;
          height: 60px;
          background: var(--dark-blue);
          border: 4px solid var(--marker-color);
          border-radius: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.3s ease;
          box-shadow: 
            0 0 20px var(--marker-color),
            inset 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .timeline-marker:hover {
          transform: translateX(-50%) scale(1.2);
          box-shadow: 
            0 0 30px var(--marker-color),
            inset 0 0 15px rgba(0, 0, 0, 0.3);
        }

        .timeline-marker svg {
          font-size: 1.5rem;
          color: var(--marker-color);
          filter: drop-shadow(0 0 5px var(--marker-color));
        }

        .timeline-content {
          background: rgba(26, 26, 46, 0.9);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(0, 255, 136, 0.3);
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(26, 26, 46, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transform: rotate(45deg);
          top: 2rem;
          z-index: -1;
        }

        .timeline-item:nth-child(odd) .timeline-content::before {
          left: -10px;
        }

        .timeline-item:nth-child(even) .timeline-content::before {
          right: -10px;
        }

        .timeline-header {
          margin-bottom: 1.5rem;
        }

        .timeline-date {
          color: #00ff88;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
        }

        .timeline-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .timeline-description {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .timeline-achievements,
        .timeline-skills {
          margin-bottom: 1.5rem;
        }

        .timeline-achievements h4,
        .timeline-skills h4 {
          color: #00ffff;
          font-size: 1rem;
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .timeline-achievements h4::before {
          content: '🏆';
          font-size: 1.2rem;
        }

        .timeline-skills h4::before {
          content: '🛠️';
          font-size: 1.2rem;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievements-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .achievements-list li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #00ff88;
          font-size: 0.8rem;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.1);
          color: var(--tag-color);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid var(--tag-color);
          transition: all 0.3s ease;
          text-shadow: 0 0 5px var(--tag-color);
        }

        .skill-tag:hover {
          background: var(--tag-color);
          color: var(--dark-blue);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .timeline-line {
            left: 30px;
          }

          .timeline-marker {
            left: 30px;
            width: 50px;
            height: 50px;
          }

          .timeline-marker svg {
            font-size: 1.2rem;
          }

          .timeline-item:nth-child(even) .timeline-content,
          .timeline-item:nth-child(odd) .timeline-content {
            margin-left: 80px;
            margin-right: 0;
            text-align: left;
          }

          .timeline-content {
            padding: 1.5rem;
          }

          .timeline-content::before {
            left: -10px;
          }

          .timeline-item:nth-child(even) .timeline-content::before {
            left: -10px;
          }

          .timeline-title {
            font-size: 1.5rem;
          }

          .timeline-description {
            font-size: 0.9rem;
          }

          .skills-tags {
            justify-content: flex-start;
          }

          .skill-tag {
            font-size: 0.7rem;
            padding: 0.2rem 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .section-header {
            margin-bottom: 2rem;
          }

          .timeline-wrapper {
            padding: 1rem 0;
          }

          .timeline-item {
            margin: 2rem 0;
          }

          .timeline-marker {
            width: 40px;
            height: 40px;
          }

          .timeline-marker svg {
            font-size: 1rem;
          }

          .timeline-content {
            margin-left: 60px;
            padding: 1rem;
          }

          .timeline-title {
            font-size: 1.3rem;
          }

          .achievements-list li,
          .timeline-description {
            font-size: 0.85rem;
          }
        }

        /* 动画增强 */
        @keyframes timelinePulse {
          0%, 100% {
            box-shadow: 0 0 20px var(--marker-color);
          }
          50% {
            box-shadow: 0 0 40px var(--marker-color);
          }
        }

        .timeline-item.visible .timeline-marker {
          animation: timelinePulse 3s ease-in-out infinite;
        }

        /* 高对比度支持 */
        @media (prefers-contrast: high) {
          .timeline-content {
            border-width: 2px;
            border-color: #ffffff;
          }

          .skill-tag {
            border-width: 2px;
          }
        }

        /* 减少动画支持 */
        @media (prefers-reduced-motion: reduce) {
          .timeline-item,
          .timeline-marker,
          .timeline-content,
          .skill-tag {
            transition: none;
          }

          .timeline-marker {
            animation: none;
          }

          .loading-spinner {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;