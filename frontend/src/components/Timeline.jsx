import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faCode, 
  faRocket, 
  faTrophy, 
  faLightbulb,
  faStar,
  faBookOpen,
  faLaptopCode,
  faRobot,
  faUsers,
  faBrain
} from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef(null);
  const observerRef = useRef(null);

  const timelineData = [
    {
      id: 1,
      date: '2022年',
      title: '编程启蒙时光',
      description: '初二第一次接触编程，由于学校没有专业老师，通过自学踏上编程之路。凭借不懈努力参加比赛并获得市级一等奖。',
      icon: faCode,
      type: 'start',
      achievements: ['自学编程基础', '市级编程竞赛一等奖', '培养独立学习能力']
    },
    {
      id: 2,
      date: '2024年',
      title: '邂逅AI世界',
      description: '高中时期接触到了"AI在未来"公益项目，开启AI技术学习之旅，深入学习机器强化学习理论与Python编程实践。',
      icon: faRobot,
      type: 'learning',
      achievements: ['学习机器强化学习', '掌握Python编程', '参与AI公益项目', '建立AI技术基础']
    },
    {
      id: 3,
      date: '2024年8月',
      title: '全国联赛初体验',
      description: '有幸参加"AI在未来"项目的全国联赛总决赛，与全国优秀的AI学习者同台竞技，开拓了视野。',
      icon: faTrophy,
      type: 'milestone',
      achievements: ['参加全国总决赛', '与全国选手交流', '提升竞技水平', '增强自信心']
    },
    {
      id: 4,
      date: '2025年',
      title: 'AI技术深度探索',
      description: '随着世界AI技术的飞速发展，我对AI产生了浓厚兴趣，开始独立研究学习，尝试开发小项目并成功部署上线。',
      icon: faLaptopCode,
      type: 'growth',
      achievements: ['独立开发AI项目', '项目成功部署', '掌握全栈开发', '技术实践能力提升']
    },
    {
      id: 5,
      date: '2025年8月',
      title: '师者相遇，前路更明',
      description: '在第二次全国联赛总决赛中有幸结识了几位优秀的指导老师，他们为我的未来发展方向提供了宝贵的指导和帮助。',
      icon: faUsers,
      type: 'collaboration',
      achievements: ['结识优秀导师', '获得专业指导', '明确发展方向', '建立师生关系']
    },
    {
      id: 6,
      date: '2025年至今',
      title: '持续成长中',
      description: '在导师们的指导下继续深入AI技术研究，不断学习新知识，开发更多有意义的项目，为未来的技术道路积蓄力量。',
      icon: faBrain,
      type: 'current',
      achievements: ['深度学习AI技术', '开发多个实用项目', '技术能力持续提升', '为未来发展做准备']
    }
  ];

  const getIconColor = (type) => {
    const colors = {
      start: '#00ff88',
      learning: '#00ffff',
      milestone: '#ffd700',
      growth: '#ff6600',
      collaboration: '#ff00ff',
      current: '#00ff88'
    };
    return colors[type] || '#00ff88';
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.dataset.itemId);
            setVisibleItems(prev => new Set([...prev, itemId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach(item => {
      observerRef.current.observe(item);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="timeline" className="section">
      <div className="container">
        <div className="timeline-header text-center mb-lg">
          <h2 className="neon-glow">学习历程</h2>
          <p>从编程小白到AI开发者的成长足迹</p>
        </div>

        <div className="timeline-wrapper" ref={timelineRef}>
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${visibleItems.has(item.id) ? 'visible' : ''} ${
                index % 2 === 0 ? 'left' : 'right'
              }`}
              data-item-id={item.id}
            >
              <div className="timeline-content">
                <div className="timeline-card glass-effect">
                  <div className="card-header">
                    <div className="date-badge">{item.date}</div>
                    <h3>{item.title}</h3>
                  </div>
                  
                  <div className="card-body">
                    <p>{item.description}</p>
                    
                    <div className="achievements">
                      <h4>关键成果：</h4>
                      <ul>
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="card-connector"></div>
                </div>
              </div>

              <div 
                className="timeline-node"
                style={{ '--node-color': getIconColor(item.type) }}
              >
                <div className="node-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="node-pulse"></div>
                <div className="node-ring"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: var(--space-xl) 0;
          scroll-snap-type: none !important;
          overflow-anchor: none !important;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(
            to bottom,
            transparent,
            var(--primary-green) 10%,
            var(--primary-green) 90%,
            transparent
          );
          transform: translateX(-50%);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          scroll-snap-type: none !important;
          scroll-snap-align: none !important;
          overflow-anchor: none !important;
        }

        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item.left {
          padding-right: calc(50% + 50px);
        }

        .timeline-item.right {
          padding-left: calc(50% + 50px);
        }

        .timeline-item.left .timeline-content {
          text-align: right;
        }

        .timeline-item.right .timeline-content {
          text-align: left;
        }

        .timeline-card {
          position: relative;
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          background: rgba(26, 26, 46, 0.9);
          border: 1px solid rgba(0, 255, 136, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 136, 0.1),
            transparent
          );
          transition: left 0.6s ease;
        }

        .timeline-card:hover::before {
          left: 100%;
        }

        .timeline-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary-green);
          box-shadow: 
            0 15px 50px rgba(0, 255, 136, 0.2),
            0 0 30px rgba(0, 255, 136, 0.4);
        }

        .card-header {
          margin-bottom: var(--space-md);
        }

        .date-badge {
          display: inline-block;
          background: var(--gradient-primary);
          color: var(--dark-blue);
          padding: var(--space-xs) var(--space-md);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: var(--space-sm);
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
          letter-spacing: 1px;
        }

        .card-header h3 {
          color: var(--primary-green);
          font-size: 1.5rem;
          margin-bottom: 0;
          text-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
          font-weight: 700;
        }

        .card-body p {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: var(--space-md);
          font-size: 1rem;
        }

        .achievements h4 {
          color: var(--neon-cyan);
          font-size: 1.1rem;
          margin-bottom: var(--space-sm);
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .achievements ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievements li {
          position: relative;
          padding-left: var(--space-md);
          margin-bottom: var(--space-xs);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .achievements li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-size: 0.8rem;
        }

        .timeline-node {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          z-index: 10;
        }

        .node-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 45px;
          height: 45px;
          background: var(--node-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dark-blue);
          font-size: 1.3rem;
          font-weight: bold;
          box-shadow: 
            0 0 25px var(--node-color),
            inset 0 0 15px rgba(0, 0, 0, 0.3);
          z-index: 3;
        }

        .node-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 45px;
          height: 45px;
          background: var(--node-color);
          border-radius: 50%;
          opacity: 0.6;
          animation: pulse-node 2.5s ease-in-out infinite;
          z-index: 1;
        }

        .node-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border: 3px solid var(--node-color);
          border-radius: 50%;
          opacity: 0.4;
          animation: ring-expand 3.5s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes pulse-node {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0.2;
          }
        }

        @keyframes ring-expand {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.1;
          }
        }

        .card-connector {
          position: absolute;
          top: 50%;
          width: 35px;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--primary-green),
            transparent
          );
          transform: translateY(-50%);
        }

        .timeline-item.left .card-connector {
          right: -35px;
        }

        .timeline-item.right .card-connector {
          left: -35px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--primary-green)
          );
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .timeline-line {
            left: 35px;
          }

          .timeline-item {
            padding-left: 80px !important;
            padding-right: 0 !important;
            margin-bottom: 3rem;
          }

          .timeline-item .timeline-content {
            text-align: left !important;
          }

          .timeline-node {
            left: 35px;
            transform: translate(-50%, -50%);
          }

          .card-connector {
            display: none;
          }

          .timeline-card {
            padding: var(--space-md);
          }

          .card-header h3 {
            font-size: 1.3rem;
          }

          .achievements li {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .timeline-wrapper {
            padding: var(--space-lg) 0;
          }

          .timeline-item {
            margin-bottom: 2.5rem;
            padding-left: 60px !important;
          }

          .timeline-line {
            left: 25px;
          }

          .timeline-node {
            left: 25px;
            width: 50px;
            height: 50px;
          }

          .node-icon {
            width: 35px;
            height: 35px;
            font-size: 1.1rem;
          }

          .node-pulse {
            width: 35px;
            height: 35px;
          }

          .node-ring {
            width: 50px;
            height: 50px;
          }

          .timeline-card {
            padding: var(--space-sm);
          }

          .date-badge {
            font-size: 0.8rem;
            padding: var(--space-xs) var(--space-sm);
          }

          .card-header h3 {
            font-size: 1.1rem;
          }

          .card-body p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;