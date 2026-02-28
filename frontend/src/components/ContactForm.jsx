import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faMessage, faRocket } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('请填写所有必填字段');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message || '消息发送成功！');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(data.error || '发送失败，请稍后重试');
      }
    } catch (error) {
      console.error('提交表单时出错:', error);
      setSubmitMessage('网络错误，请检查连接后重试');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="contact-header text-center mb-lg">
            <h2 className="neon-glow">联系我</h2>
            <p>有任何想法或合作机会？欢迎与我交流！</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card glass-effect">
                <div className="info-item">
                  <FontAwesomeIcon icon={faRocket} className="info-icon" />
                  <div>
                    <h4>快速响应</h4>
                    <p>通常在24小时内回复</p>
                  </div>
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faUser} className="info-icon" />
                  <div>
                    <h4>开放合作</h4>
                    <p>欢迎技术交流与项目合作</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FontAwesomeIcon icon={faUser} />
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-input ${focusedField === 'name' ? 'focused' : ''}`}
                  placeholder="请输入您的姓名"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  required
                />
                <div className="input-glow"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FontAwesomeIcon icon={faEnvelope} />
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${focusedField === 'email' ? 'focused' : ''}`}
                  placeholder="请输入您的邮箱地址"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  required
                />
                <div className="input-glow"></div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FontAwesomeIcon icon={faMessage} />
                  消息
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-input form-textarea ${focusedField === 'message' ? 'focused' : ''}`}
                  placeholder="请输入您想说的话..."
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  required
                />
                <div className="input-glow"></div>
              </div>

              <div className="form-submit">
                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="btn-content">
                    <FontAwesomeIcon 
                      icon={faPaperPlane} 
                      className={isSubmitting ? 'spinning' : ''} 
                    />
                    {isSubmitting ? '发送中...' : '发送消息'}
                  </span>
                  <div className="btn-glow"></div>
                </button>
              </div>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('成功') ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>


        </div>
      </div>

      <style jsx>{`
        .contact-form-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-xl);
          align-items: start;
        }

        .contact-info {
          position: sticky;
          top: 100px;
        }

        .info-card {
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-icon {
          font-size: 1.5rem;
          color: var(--primary-green);
          min-width: 24px;
        }

        .contact-form {
          background: rgba(26, 26, 46, 0.8);
          border-radius: var(--radius-xl);
          padding: var(--space-xl);
          border: 1px solid rgba(0, 255, 136, 0.2);
          position: relative;
          overflow: hidden;
        }

        .contact-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .contact-form:hover::before {
          left: 100%;
        }

        .form-group {
          position: relative;
          margin-bottom: var(--space-lg);
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--primary-green);
          font-weight: 600;
          margin-bottom: var(--space-sm);
          font-size: 0.9rem;
        }

        .form-input {
          width: 100%;
          padding: var(--space-md);
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(0, 255, 136, 0.2);
          border-radius: var(--radius-md);
          color: #ffffff;
          font-family: var(--font-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
          outline: none;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-input:focus,
        .form-input.focused {
          border-color: var(--primary-green);
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .input-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: var(--radius-md);
          background: radial-gradient(circle, rgba(0, 255, 136, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .form-input:focus + .input-glow,
        .form-input.focused + .input-glow {
          opacity: 1;
        }

        .form-submit {
          text-align: center;
          margin-top: var(--space-xl);
        }

        .submit-btn {
          position: relative;
          background: linear-gradient(135deg, var(--primary-green), var(--neon-cyan));
          color: var(--dark-blue);
          border: none;
          padding: var(--space-md) var(--space-xl);
          border-radius: var(--radius-md);
          font-family: var(--font-primary);
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          min-width: 180px;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 0 40px rgba(0, 255, 136, 0.6);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
          border-radius: 50%;
        }

        .submit-btn:hover .btn-glow {
          width: 200px;
          height: 200px;
        }

        .submit-message {
          margin-top: var(--space-md);
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-md);
          text-align: center;
          font-weight: 600;
          animation: fadeInUp 0.3s ease;
        }

        .submit-message.success {
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid var(--primary-green);
          color: var(--primary-green);
        }

        .submit-message.error {
          background: rgba(255, 0, 255, 0.1);
          border: 1px solid var(--neon-purple);
          color: var(--neon-purple);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }

          .contact-info {
            position: static;
            order: 2;
          }

          .contact-form {
            padding: var(--space-lg);
          }

          .form-input {
            padding: var(--space-sm) var(--space-md);
          }

          .submit-btn {
            width: 100%;
            padding: var(--space-md);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;