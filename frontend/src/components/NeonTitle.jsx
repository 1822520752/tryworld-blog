import React, { useState, useEffect } from 'react';
import './NeonTitle.css';

export default function NeonTitle() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // 随机故障效果
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000 + Math.random() * 10000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="neon-title-container">
      <div className="cyber-grid"></div>
      <div className="hologram-effect"></div>
      
      <h1 className={`neon-title ${glitchActive ? 'glitch-active' : ''}`}>
        <span className="name-text" data-text="一个高中生的博客">
          一个高中生的博客
        </span>
        <span className="cyber-separator">⟨|⟩</span>
        <span className="role-text" data-text="试界 TryWorld">
          试界 TryWorld
        </span>
      </h1>
      
      <div className="matrix-rain"></div>
      
      <style jsx>{`
        .neon-title-container {
          position: relative;
          text-align: center;
          padding: 2rem 1rem;
          isolation: isolate;
          overflow: hidden;
        }

        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: gridMove 20s linear infinite;
          opacity: 0.3;
        }

        .hologram-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            transparent 40%,
            rgba(0, 255, 136, 0.1) 50%,
            transparent 60%
          );
          animation: hologramScan 3s ease-in-out infinite;
        }

        .neon-title {
          font-family: 'Inter', 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 4vw, 2.8rem);
          color: #00ff88;
          text-shadow: 
            0 0 5px #00ff88,
            0 0 10px #00ff88,
            0 0 20px #00ff88;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          position: relative;
          z-index: 2;
          margin: 0;
        }

        .name-text {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          letter-spacing: 2px;
          position: relative;
          white-space: nowrap;
          font-size: clamp(1.2rem, 3.5vw, 2.2rem);
        }

        .name-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 2px;
          color: #ff00ff;
          z-index: -1;
          opacity: 0.7;
          animation: textShift 4s ease-in-out infinite;
        }

        .cyber-separator {
          font-family: 'Fira Code', monospace;
          color: #00ffff;
          font-size: clamp(1.2rem, 3vw, 2rem);
          animation: separatorPulse 2s ease-in-out infinite;
          text-shadow: 0 0 10px #00ffff;
        }

        .role-text {
          font-weight: 600;
          color: #ffffff;
          position: relative;
          font-size: clamp(1rem, 2.5vw, 1.8rem);
          text-shadow: 
            0 0 5px #ffffff,
            0 0 10px #00ff88;
        }

        .role-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 1px;
          color: #00ffff;
          z-index: -1;
          opacity: 0.5;
        }

        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 98px,
            rgba(0, 255, 136, 0.03) 100px
          );
          animation: matrixFlow 8s linear infinite;
        }

        .glitch-active .name-text {
          animation: glitchAnimation 0.3s ease-in-out;
        }

        .glitch-active .role-text {
          animation: glitchAnimation 0.3s ease-in-out 0.1s;
        }

        /* 动画关键帧 */
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(20px, 20px);
          }
        }

        @keyframes hologramScan {
          0%, 100% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(100%);
            opacity: 1;
          }
        }

        @keyframes textShift {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-2px, -1px);
          }
          50% {
            transform: translate(2px, 1px);
          }
          75% {
            transform: translate(-1px, 2px);
          }
        }

        @keyframes separatorPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        @keyframes matrixFlow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 0;
          }
        }

        @keyframes glitchAnimation {
          0%, 100% {
            transform: translate(0);
          }
          10% {
            transform: translate(-2px, -1px);
          }
          20% {
            transform: translate(2px, 1px);
          }
          30% {
            transform: translate(-1px, 2px);
          }
          40% {
            transform: translate(1px, -2px);
          }
          50% {
            transform: translate(-2px, 1px);
          }
          60% {
            transform: translate(2px, -1px);
          }
          70% {
            transform: translate(-1px, -2px);
          }
          80% {
            transform: translate(1px, 2px);
          }
          90% {
            transform: translate(-2px, -1px);
          }
        }

        /* 响应式调整 */
        @media (max-width: 768px) {
          .neon-title-container {
            padding: 1.5rem 0.5rem;
          }

          .neon-title {
            flex-direction: column;
            gap: 0.5rem;
          }

          .cyber-separator {
            transform: rotate(90deg);
            font-size: 1.5rem;
          }

          .name-text {
            font-size: clamp(1rem, 5vw, 1.8rem);
            letter-spacing: 1px;
          }

          .role-text {
            font-size: clamp(0.9rem, 4vw, 1.4rem);
          }
        }

        @media (max-width: 480px) {
          .neon-title-container {
            padding: 1rem 0.25rem;
          }

          .name-text {
            word-break: keep-all;
            line-height: 1.2;
          }

          .cyber-separator {
            display: none;
          }
        }

        /* 高对比度模式支持 */
        @media (prefers-contrast: high) {
          .neon-title {
            text-shadow: none;
            border: 2px solid #00ff88;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.8);
          }
        }

        /* 减少动画模式支持 */
        @media (prefers-reduced-motion: reduce) {
          .cyber-grid,
          .hologram-effect,
          .matrix-rain,
          .name-text::before,
          .cyber-separator,
          .role-text::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}