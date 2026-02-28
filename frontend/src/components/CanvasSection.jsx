import React, { useRef, useEffect } from 'react';
import './CanvasSection.css';

const CanvasSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // 设置画布尺寸
    canvas.width = 1029;
    canvas.height = 781;
    
    // 创建渐变背景
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0f2027');
    gradient.addColorStop(0.5, '#203a43');
    gradient.addColorStop(1, '#2c5364');
    
    // 填充渐变背景
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制试界 TryWorld文字
    ctx.font = 'bold 48px Inter, sans-serif';
    ctx.fillStyle = '#00ff88';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 添加发光效果
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    // 绘制主文字
    ctx.fillText('试界 TryWorld', canvas.width / 2, canvas.height / 2);
    
    // 绘制副标题
    ctx.font = 'normal 20px Inter, sans-serif';
    ctx.fillStyle = '#00ffff';
    ctx.shadowBlur = 10;
    ctx.fillText('AI 创新实验室', canvas.width / 2, canvas.height / 2 + 60);
    
    // 添加粒子效果
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
    
    const animate = () => {
      // 重绘背景
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 重绘文字
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 20;
      ctx.font = 'bold 48px Inter, sans-serif';
      ctx.fillStyle = '#00ff88';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('试界 TryWorld', canvas.width / 2, canvas.height / 2);
      
      ctx.font = 'normal 20px Inter, sans-serif';
      ctx.fillStyle = '#00ffff';
      ctx.shadowBlur = 10;
      ctx.fillText('AI 创新实验室', canvas.width / 2, canvas.height / 2 + 60);
      
      // 更新和绘制粒子
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // 边界检查
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // 绘制粒子
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#00ff88';
        ctx.fillStyle = `rgba(0, 255, 136, ${particle.alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div className="canvas-section">
      <canvas
        ref={canvasRef}
        width="1029"
        height="781"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
        data-selector-hover=""
        data-selector-hover-tag="canvas"
        data-selector-click=""
        data-selector-click-tag="canvas"
      />
    </div>
  );
};

export default CanvasSection;