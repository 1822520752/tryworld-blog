import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faBrain, 
  faServer, 
  faDatabase, 
  faCloud, 
  faMobile 
} from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsRadar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedData, setAnimatedData] = useState([0, 0, 0, 0, 0, 0]);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const chartRef = useRef(null);
  const sectionRef = useRef(null);

  const skillsData = {
    labels: ['Python', 'JavaScript', 'Machine Learning', 'Web Development', 'Database', 'Cloud Computing'],
    datasets: [{
      label: '技能水平',
      data: [90, 85, 80, 88, 75, 70],
      backgroundColor: 'rgba(0, 255, 136, 0.15)',
      borderColor: '#00ff88',
      borderWidth: 3,
      pointBackgroundColor: '#00ff88',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#ff00ff',
      pointHoverBorderColor: '#00ff88',
      pointHoverBorderWidth: 3,
    }]
  };

  const skillIcons = [
    faCode,      // Python
    faCode,      // JavaScript
    faBrain,     // Machine Learning
    faServer,    // Web Development
    faDatabase,  // Database
    faCloud      // Cloud Computing
  ];

  const skillDescriptions = [
    'Python开发经验丰富，熟练使用各种框架和库',
    'JavaScript全栈开发，React/Node.js项目经验',
    '机器学习算法实现，深度学习模型训练',
    '全栈Web开发，响应式设计和现代化框架',
    '数据库设计优化，SQL/NoSQL数据库使用',
    '云服务部署，AWS/阿里云平台项目经验'
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 255, 136, 0.2)',
          lineWidth: 1
        },
        angleLines: {
          color: 'rgba(0, 255, 136, 0.3)',
          lineWidth: 1
        },
        pointLabels: {
          color: '#ffffff',
          font: {
            size: 14,
            weight: '600'
          },
          padding: 20
        },
        ticks: {
          display: false
        }
      }
    },
    onHover: (event, activeElements) => {
      if (activeElements.length > 0) {
        const index = activeElements[0].index;
        setHoveredPoint(index);
      } else {
        setHoveredPoint(null);
      }
    },
    animation: {
      duration: 800,
      easing: 'easeOutQuart'
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateSkillsData();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateSkillsData = () => {
    const targetData = skillsData.datasets[0].data;
    const steps = 30;
    let currentStep = 0;

    const animate = () => {
      currentStep++;
      const progress = currentStep / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 2);

      const newData = targetData.map(value => 
        Math.round(value * easedProgress)
      );

      setAnimatedData(newData);

      if (currentStep < steps) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const displayData = {
    ...skillsData,
    datasets: [{
      ...skillsData.datasets[0],
      data: isVisible ? animatedData : [0, 0, 0, 0, 0, 0]
    }]
  };

  // 移动端优化检测
  const isMobile = window.innerWidth <= 768;

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <div className="skills-header text-center mb-lg">
          <h2 className="neon-glow">技能雷达</h2>
          <p>技术栈全景展示，持续学习进步中</p>
        </div>

        <div className="skills-content">
          <div className="radar-container">
            <div className="radar-wrapper">
              <div className="radar-chart">
                <Radar 
                  ref={chartRef}
                  data={displayData} 
                  options={chartOptions} 
                />
              </div>
              
              {hoveredPoint !== null && (
                <div className="skill-tooltip">
                  <div className="tooltip-content glass-effect">
                    <div className="tooltip-header">
                      <FontAwesomeIcon 
                        icon={skillIcons[hoveredPoint]} 
                        className="tooltip-icon" 
                      />
                      <h4>{skillsData.labels[hoveredPoint]}</h4>
                    </div>
                    <div className="tooltip-body">
                      <div className="skill-level">
                        <span className="level-text">熟练度：</span>
                        <span className="level-value">{skillsData.datasets[0].data[hoveredPoint]}%</span>
                      </div>
                      <p className="skill-description">
                        {skillDescriptions[hoveredPoint]}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="skills-list">
            <div className="skills-grid">
              {skillsData.labels.map((skill, index) => (
                <div 
                  key={skill}
                  className={`skill-item ${hoveredPoint === index ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={skillIcons[index]} />
                  </div>
                  <div className="skill-info">
                    <h4>{skill}</h4>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${animatedData[index]}%` : '0%'
                        }}
                      ></div>
                      <span className="skill-percentage">
                        {isVisible ? `${animatedData[index]}%` : '0%'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xxl);
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .radar-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .radar-wrapper {
          position: relative;
          width: 450px;
          height: 450px;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.05) 0%,
            transparent 70%
          );
          border-radius: 50%;
          padding: var(--space-lg);
          border: 2px solid rgba(0, 255, 136, 0.2);
        }

        .radar-wrapper::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            var(--primary-green),
            var(--neon-cyan),
            var(--neon-purple),
            var(--primary-green)
          );
          z-index: -1;
          animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .radar-chart {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .skill-tooltip {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          pointer-events: none;
          animation: fadeInScale 0.3s ease;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .tooltip-content {
          background: rgba(26, 26, 46, 0.95);
          border: 1px solid var(--primary-green);
          border-radius: var(--radius-md);
          padding: var(--space-md);
          min-width: 200px;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .tooltip-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-sm);
        }

        .tooltip-icon {
          color: var(--primary-green);
          font-size: 1.2rem;
        }

        .tooltip-header h4 {
          color: #ffffff;
          font-size: 1rem;
          margin: 0;
        }

        .skill-level {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-xs);
        }

        .level-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .level-value {
          color: var(--primary-green);
          font-weight: 700;
          font-size: 1.1rem;
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
        }

        .skill-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          line-height: 1.4;
          margin: 0;
        }

        .skills-list {
          padding: var(--space-lg);
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          background: rgba(26, 26, 46, 0.6);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-item::before {
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
          transition: left 0.5s ease;
        }

        .skill-item:hover::before,
        .skill-item.active::before {
          left: 100%;
        }

        .skill-item:hover,
        .skill-item.active {
          border-color: var(--primary-green);
          transform: translateX(8px);
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .skill-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-green);
          color: var(--dark-blue);
          border-radius: 50%;
          font-size: 1.2rem;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
          flex-shrink: 0;
        }

        .skill-info {
          flex: 1;
        }

        .skill-info h4 {
          color: #ffffff;
          font-size: 1.1rem;
          margin-bottom: var(--space-xs);
          font-weight: 600;
        }

        .skill-bar {
          position: relative;
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--primary-green),
            var(--neon-cyan)
          );
          border-radius: 4px;
          transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        .skill-percentage {
          position: absolute;
          right: 0;
          top: -25px;
          color: var(--primary-green);
          font-size: 0.9rem;
          font-weight: 700;
        }

        /* 移动端优化 - 确保动画在移动端正常显示 */
        @media (max-width: 992px) {
          .skills-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .radar-wrapper {
            width: 350px;
            height: 350px;
          }

          .skills-grid {
            gap: var(--space-md);
          }
        }

        @media (max-width: 768px) {
          .radar-wrapper {
            width: 300px;
            height: 300px;
            padding: var(--space-md);
          }

          .skill-item {
            padding: var(--space-sm) var(--space-md);
            gap: var(--space-sm);
          }

          .skill-icon {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .skill-info h4 {
            font-size: 1rem;
          }

          .tooltip-content {
            min-width: 180px;
            padding: var(--space-sm);
          }
          
          /* 移动端动画优化 - 确保动画启用 */
          .skill-item {
            transition: all 0.2s ease;
            transform: translateZ(0);
            will-change: transform, opacity;
          }
          
          .skill-progress {
            transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .radar-wrapper::before {
            animation-duration: 8s;
          }
        }

        @media (max-width: 480px) {
          .radar-wrapper {
            width: 250px;
            height: 250px;
          }

          .skill-item {
            flex-direction: column;
            text-align: center;
            gap: var(--space-sm);
          }

          .skill-info {
            width: 100%;
          }

          .skill-percentage {
            position: static;
            margin-top: var(--space-xs);
          }
          
          /* 移动端降级方案 - 保持基本动画 */
          @media (prefers-reduced-motion: reduce) {
            .skill-item,
            .skill-progress {
              transition: none;
            }
            
            .radar-wrapper::before {
              animation: none;
            }
          }
        }
        
        /* 硬件加速优化 */
        .skill-item,
        .skill-progress,
        .radar-wrapper {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* 移动端触摸优化 */
        @media (hover: none) and (pointer: coarse) {
          .skill-item:hover {
            transform: translateX(4px);
          }
          
          .skill-item:active {
            transform: translateX(8px);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsRadar;