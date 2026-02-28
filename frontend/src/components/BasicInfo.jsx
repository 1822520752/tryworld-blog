import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faLocationDot, 
  faCode 
} from '@fortawesome/free-solid-svg-icons';

const BasicInfo = () => {
  const infoItems = [
    {
      icon: faGraduationCap,
      text: '高中三年级',
      color: '#00ff88'
    },
    {
      icon: faLocationDot,
      text: '中国',
      color: '#00ffff'
    },
    {
      icon: faCode,
      text: '全栈开发 · AI研究',
      color: '#ff00ff'
    }
  ];

  return (
    <div className="basic-info">
      {infoItems.map((item, index) => (
        <div key={index} className="info-item uniform">
          <div className="info-icon" style={{ '--icon-color': item.color }}>
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <span className="info-text">{item.text}</span>
        </div>
      ))}

      <style jsx>{`
        .basic-info {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin: 1.5rem 0;
        }

        .info-item.uniform {
          flex: 1 1 200px;
          min-width: 180px;
          max-width: 220px;
          min-height: 100px;
          padding: 1.2rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .info-item.uniform::before {
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

        .info-item.uniform:hover::before {
          left: 100%;
        }

        .info-item.uniform:hover {
          transform: translateY(-3px);
          background: rgba(0, 255, 136, 0.1);
          border-color: var(--icon-color, #00ff88);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(0, 255, 136, 0.3);
        }

        .info-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--icon-color, #00ff88);
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .info-item.uniform:hover .info-icon {
          transform: scale(1.1);
          text-shadow: 0 0 10px var(--icon-color, #00ff88);
        }

        .info-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.3;
          text-align: center;
          transition: color 0.3s ease;
        }

        .info-item.uniform:hover .info-text {
          color: #ffffff;
        }

        /* 平板端优化 */
        @media (max-width: 992px) {
          .basic-info {
            gap: 1rem;
          }
          
          .info-item.uniform {
            flex: 1 1 150px;
            min-width: 150px;
            max-width: 180px;
            min-height: 90px;
            padding: 1rem 0.8rem;
          }

          .info-icon {
            width: 28px;
            height: 28px;
            font-size: 1.3rem;
          }

          .info-text {
            font-size: 0.9rem;
          }
        }

        /* 移动端优化 */
        @media (max-width: 768px) {
          .basic-info {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin: 1rem 0;
          }
          
          .info-item.uniform {
            flex: none;
            width: 100%;
            max-width: 280px;
            min-height: 80px;
            padding: 1rem;
            flex-direction: row;
            text-align: left;
            gap: 1rem;
          }

          .info-icon {
            width: 24px;
            height: 24px;
            font-size: 1.2rem;
            flex-shrink: 0;
          }

          .info-text {
            font-size: 0.9rem;
            text-align: left;
            flex: 1;
          }
        }

        /* 超小屏幕优化 */
        @media (max-width: 480px) {
          .info-item.uniform {
            max-width: 100%;
            padding: 0.8rem;
            min-height: 70px;
          }

          .info-icon {
            width: 20px;
            height: 20px;
            font-size: 1rem;
          }

          .info-text {
            font-size: 0.85rem;
          }
        }

        /* 高对比度支持 */
        @media (prefers-contrast: high) {
          .info-item.uniform {
            border-width: 2px;
            background: rgba(255, 255, 255, 0.1);
          }
        }

        /* 减少动画支持 */
        @media (prefers-reduced-motion: reduce) {
          .info-item.uniform,
          .info-icon,
          .info-text {
            transition: none;
          }
          
          .info-item.uniform::before {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BasicInfo;