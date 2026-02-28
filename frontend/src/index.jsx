import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

// 应急错误边界组件
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React错误边界捕获:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: '#0a0a0a',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h1 style={{ color: '#00ff88', marginBottom: '20px' }}>⚠️ 页面加载失败</h1>
          <p style={{ marginBottom: '20px', opacity: 0.8 }}>抱歉，页面遇到了一些问题</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 24px',
              background: '#00ff88',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            🔄 重新加载页面
          </button>
          <details style={{ marginTop: '30px', maxWidth: '600px' }}>
            <summary style={{ cursor: 'pointer', color: '#00ffff' }}>查看技术详情</summary>
            <pre style={{ 
              textAlign: 'left', 
              background: 'rgba(255,255,255,0.1)', 
              padding: '10px', 
              borderRadius: '4px',
              fontSize: '12px',
              overflow: 'auto',
              marginTop: '10px'
            }}>
              {this.state.error && this.state.error.toString()}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// 确保DOM已加载
function initializeApp() {
  try {
    // 获取根元素并验证
    const container = document.getElementById('root');
    
    if (!container) {
      throw new Error('找不到根元素 #root，请检查HTML文件');
    }

    console.log('✅ 根元素已找到，开始初始化React应用...');
    
    // 创建React根并渲染
    const root = createRoot(container);
    
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );

    console.log('✅ React应用已成功挂载');
    
    // 开发模式提示
    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 试界 TryWorld的个人博客已启动 - 开发模式');
      console.log('🔧 如有问题请检查浏览器控制台');
    }

  } catch (error) {
    console.error('❌ React应用初始化失败:', error);
    
    // 应急HTML渲染
    const container = document.getElementById('root') || document.body;
    container.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: #0a0a0a;
        color: #ffffff;
        font-family: Inter, sans-serif;
        text-align: center;
        padding: 20px;
      ">
        <h1 style="color: #ff6b6b; margin-bottom: 20px;">⚠️ 应用启动失败</h1>
        <p style="margin-bottom: 20px; opacity: 0.8;">React应用无法正常启动</p>
        <p style="margin-bottom: 30px; font-size: 14px; color: #00ffff;">
          错误信息: ${error.message}
        </p>
        <button 
          onclick="window.location.reload()"
          style="
            padding: 12px 24px;
            background: #00ff88;
            color: #0a0a0a;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
          "
        >
          🔄 重新加载
        </button>
        <div style="margin-top: 30px; font-size: 12px; opacity: 0.6;">
          <p>🔧 故障排除建议:</p>
          <p>1. 检查浏览器控制台错误信息</p>
          <p>2. 确认所有依赖包已正确安装</p>
          <p>3. 尝试清除浏览器缓存后刷新</p>
        </div>
      </div>
    `;
  }
}

// 全局错误处理
window.addEventListener('error', (event) => {
  console.error('🚨 全局JavaScript错误:', event.error);
  console.error('📍 错误位置:', event.filename, '行号:', event.lineno);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 未处理的Promise拒绝:', event.reason);
  event.preventDefault(); // 防止错误传播到控制台
});

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}