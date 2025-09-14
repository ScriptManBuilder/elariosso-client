import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  html {
    /* Prevent horizontal scrolling */
    overflow-x: hidden;
    width: 100%;
    
    /* Improve text rendering */
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    
    /* Smooth scrolling */
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
    width: 100%;
    overflow-x: hidden;
    
    /* Improve font rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Prevent bounce scrolling on iOS */
    -webkit-overflow-scrolling: touch;
    
    /* Disable text selection on touch devices for UI elements */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    /* Re-enable text selection for content */
    input, textarea, [contenteditable] {
      -webkit-user-select: text;
      -khtml-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
    }
  }

  /* Mobile-specific typography */
  @media (max-width: 768px) {
    body {
      font-size: 16px; /* Prevent zoom on iOS */
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    
    /* Improve touch targets */
    @media (max-width: 768px) {
      min-height: 44px;
      display: inline-flex;
      align-items: center;
    }
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
    
    /* Remove default button styles on mobile */
    -webkit-appearance: none;
    appearance: none;
    
    /* Improve touch targets */
    min-height: 44px;
    
    /* Remove tap highlight */
    -webkit-tap-highlight-color: transparent;
    
    @media (max-width: 768px) {
      min-height: 48px;
    }
  }

  /* Form elements */
  input, textarea, select {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0; /* Remove iOS rounded corners */
    
    /* Prevent zoom on iOS */
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    
    /* Prevent layout shift */
    vertical-align: middle;
  }

  /* Prevent horizontal scroll */
  #root {
    overflow-x: hidden;
    width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }

  @media (max-width: 375px) {
    padding: 0 10px;
  }
`;

export const Section = styled.section`
  padding: 60px 0;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' | 'neon' }>`
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
          }
        `;
      case 'secondary':
        return `
          background: #f8f9fa;
          color: #333;
          border: 1px solid #e9ecef;
          &:hover {
            background: #e9ecef;
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
          &:hover {
            background: #667eea;
            color: white;
          }
        `;
      case 'neon':
        return `
          background: linear-gradient(135deg, #00ff88 0%, #00cc66 100%);
          color: #000;
          border: 2px solid #00ff88;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
          &:hover {
            box-shadow: 0 0 30px rgba(0, 255, 136, 0.6);
            transform: translateY(-2px);
          }
        `;
      default:
        return `
          background: #667eea;
          color: white;
          &:hover {
            background: #5a67d8;
          }
        `;
    }
  }}
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
`;
