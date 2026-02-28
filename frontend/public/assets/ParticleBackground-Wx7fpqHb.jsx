import React, { useEffect, useRef, useState } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // 粒子类
  class Particle {
    constructor(x, y, targetX, targetY, isText = false) {
      this.x = x;
      this.y = y;
      this.targetX = targetX;
      this.targetY = targetY;
      this.originalX = targetX;
      this.originalY = targetY;
      this.vx = 0;
      this.vy = 0;
      this.size = Math.random() * 2 + 1;
      this.opacity = Math.random() * 0.8 + 0.2;
      this.isText = isText;
      this.hue = Math.random() * 60 + 120; // 青绿色范围
      this.life = 1;
      this.maxLife = 1;
      this.speed = 0.02;
      this.force = 0;
      this.angle = Math.random() * Math.PI * 2;
      this.drift = Math.random() * 0.01 - 0.005;
    }

    update() {
      // 鼠标影响
      const dx = mouseRef.current.x - this.x;
      const dy = mouseRef.current.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        this.force = force * 0.3;
        const angle = Math.atan2(dy, dx);
        this.vx -= Math.cos(angle) * this.force;
        this.vy -= Math.sin(angle) * this.force;
      }

      // 返回原位置
      this.vx += (this.originalX - this.x) * this.speed;
      this.vy += (this.originalY - this.y) * this.speed;

      // 应用阻尼
      this.vx *= 0.98;
      this.vy *= 0.98;

      // 更新位置
      this.x += this.vx;
      this.y += this.vy;

      // 漂移效果
      this.angle += this.drift;
      this.y += Math.sin(this.angle) * 0.2;

      // 更新生命周期
      this.life = Math.min(this.life + 0.01, this.maxLife);
    }

    draw(ctx) {
      const alpha = this.opacity * this.life;
      
      if (this.isText) {
        // 文字粒子发光效果
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // 外层光晕
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 0.1)`;
        ctx.fill();
        
        // 中层光晕
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, 0.3)`;
        ctx.fill();
        
        // 核心粒子
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, 1)`;
        ctx.fill();
        
        ctx.restore();
      } else {
        // 普通粒子
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 50%, 1)`;
        ctx.fill();
        
        // 粒子闪烁效果
        if (Math.random() < 0.01) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${this.hue}, 100%, 80%, 0.5)`;
          ctx.fill();
        }
        
        ctx.restore();
      }
    }
  }

  // 创建文字粒子
  const createTextParticles = (text, x, y, size = 48) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scale = window.devicePixelRatio || 1;
    
    canvas.width = 400 * scale;
    canvas.height = 100 * scale;
    ctx.scale(scale, scale);
    
    ctx.font = `bold ${size}px 'Arial', sans-serif`;
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 200, 50);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const particles = [];
    
    for (let i = 0; i < imageData.width; i += 4) {
      for (let j = 0; j < imageData.height; j += 4) {
        const index = (j * imageData.width + i) * 4;
        const alpha = imageData.data[index + 3];
        
        if (alpha > 128) {
          const particleX = x + (i / scale - 200);
          const particleY = y + (j / scale - 50);
          
          particles.push(new Particle(
            particleX + (Math.random() - 0.5) * 200,
            particleY + (Math.random() - 0.5) * 200,
            particleX,
            particleY,
            true
          ));
        }
      }
    }
    
    return particles;
  };

  // 创建随机背景粒子
  const createBackgroundParticles = (width, height, count = 150) => {
    const particles = [];
    
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push(new Particle(x, y, x, y, false));
    }
    
    return particles;
  };

  // 初始化粒子系统
  const initParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const { width, height } = canvas;
    particlesRef.current = [];
    
    // 创建"AI"文字粒子
    const aiParticles = createTextParticles('AI', width * 0.3, height * 0.4, 72);
    
    // 创建"CODE"文字粒子
    const codeParticles = createTextParticles('CODE', width * 0.7, height * 0.6, 48);
    
    // 创建背景粒子
    const backgroundParticles = createBackgroundParticles(width, height);
    
    particlesRef.current = [...backgroundParticles, ...aiParticles, ...codeParticles];
  };

  // 处理鼠标移动
  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  // 处理窗口大小变化
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    
    initParticles();
  };

  // 创建连线效果
  const drawConnections = (ctx) => {
    const particles = particlesRef.current;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120 && particles[i].isText && particles[j].isText) {
          const opacity = (120 - distance) / 120 * 0.3;
          
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = '#00ff88';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[j].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  };

  // 动画循环
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    
    // 清空画布
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, width / (window.devicePixelRatio || 1), height / (window.devicePixelRatio || 1));
    
    // 更新和绘制粒子
    particlesRef.current.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });
    
    // 绘制连线
    drawConnections(ctx);
    
    // 鼠标位置光晕效果
    if (mouseRef.current.x && mouseRef.current.y) {
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 100
      );
      gradient.addColorStop(0, 'rgba(0, 255, 136, 0.1)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width / (window.devicePixelRatio || 1), height / (window.devicePixelRatio || 1));
    }
    
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // 设置canvas尺寸
    handleResize();
    
    // 延迟显示，创建入场动画效果
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      initParticles();
      animate();
    }, 500);
    
    // 事件监听
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(showTimer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="particle-background">
      <canvas
        ref={canvasRef}
        className={`particle-canvas ${isVisible ? 'visible' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)'
        }}
      />
      
      <style jsx>{`
        .particle-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .particle-canvas {
          opacity: 0;
          transition: opacity 2s ease-in-out;
        }

        .particle-canvas.visible {
          opacity: 1;
        }

        /* 性能优化 */
        @media (max-width: 768px) {
          .particle-canvas {
            filter: blur(1px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .particle-canvas {
            display: none;
          }
        }

        /* 低端设备优化 */
        @media (max-width: 480px) {
          .particle-canvas {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;