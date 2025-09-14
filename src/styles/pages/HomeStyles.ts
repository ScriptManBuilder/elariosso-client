import styled, { keyframes, css } from 'styled-components';

// Анимации
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const slideInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(50px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const shimmer = keyframes`
  0% { 
    box-shadow: 0 0 5px rgba(255,255,255,0.5);
    border-color: rgba(255,255,255,0.3);
  }
  50% { 
    box-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6);
    border-color: rgba(255,255,255,0.8);
  }
  100% { 
    box-shadow: 0 0 5px rgba(255,255,255,0.5);
    border-color: rgba(255,255,255,0.3);
  }
`;

const borderFlow = keyframes`
  0% { 
    border-image-source: linear-gradient(0deg, transparent, #fff, transparent, transparent);
  }
  25% { 
    border-image-source: linear-gradient(90deg, transparent, transparent, #fff, transparent);
  }
  50% { 
    border-image-source: linear-gradient(180deg, transparent, transparent, transparent, #fff);
  }
  75% { 
    border-image-source: linear-gradient(270deg, transparent, #fff, transparent, transparent);
  }
  100% { 
    border-image-source: linear-gradient(360deg, transparent, #fff, transparent, transparent);
  }
`;

const rotateGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const morphBlob = keyframes`
  0%, 100% { 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; 
    transform: translate(0, 0) scale(1);
  }
  25% { 
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; 
    transform: translate(30px, -30px) scale(1.1);
  }
  50% { 
    border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; 
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% { 
    border-radius: 60% 40% 60% 30% / 40% 50% 60% 30%; 
    transform: translate(-30px, -20px) scale(1.05);
  }
`;

export const HeroSection = styled.section`
  margin-top: 120px;
  min-height: 85vh;
  background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
  background-size: 400% 400%;
  animation: ${rotateGradient} 15s ease infinite;
  color: white;
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  /* Fallback pattern если видео не загрузится */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 2px, transparent 2px),
      radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.02) 50%, transparent 50%);
    background-size: 60px 60px, 40px 40px, 80px 80px;
    z-index: 0;
    opacity: 0.3;
    animation: ${float} 25s ease-in-out infinite;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.3) 0%,
      rgba(118, 75, 162, 0.2) 25%,
      rgba(240, 147, 251, 0.15) 50%,
      rgba(245, 87, 108, 0.2) 75%,
      rgba(102, 126, 234, 0.3) 100%
    );
    z-index: 2;
    mix-blend-mode: overlay;
  }
  
  @media (max-width: 768px) {
    margin-top: 100px;
    min-height: 70vh;
    padding: 60px 0;
    
    &::after {
      width: 150px;
      height: 150px;
      right: 5%;
      top: 20%;
    }
  }
  
  @media (max-width: 480px) {
    margin-top: 80px;
    min-height: 60vh;
    padding: 40px 0;
    
    &::before {
      background-size: 30px 30px;
    }
    
    &::after {
      width: 100px;
      height: 100px;
      right: 3%;
      top: 25%;
    }
  }
`;

export const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.9;
  filter: brightness(0.6) contrast(1.2) saturate(1.3) hue-rotate(10deg);
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(0.7) contrast(1.3) saturate(1.4) hue-rotate(15deg);
  }
  
  @media (max-width: 768px) {
    opacity: 0.7;
    filter: brightness(0.5) contrast(1.1) saturate(1.2) hue-rotate(5deg);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 4;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  animation: ${slideInUp} 1s ease-out;
  
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    max-width: 95%;
    padding: 0 10px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: -2px;
  background: linear-gradient(45deg, #fff, #f0f0f0, #fff);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${rotateGradient} 8s ease-in-out infinite;
  position: relative;
  text-shadow: 0 0 30px rgba(255,255,255,0.5);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #fff, transparent);
    border-radius: 2px;
    animation: ${shimmer} 3s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: -1px;
    margin-bottom: 20px;
    
    &::after {
      width: 120px;
      height: 2px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    letter-spacing: -0.5px;
    margin-bottom: 15px;
    
    &::after {
      width: 100px;
      height: 2px;
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 40px;
  opacity: 0.95;
  font-weight: 300;
  line-height: 1.4;
  animation: ${slideInUp} 1s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 25px;
    line-height: 1.3;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${slideInUp} 1s ease-out 0.6s both;
  
  button, a {
    position: relative;
    overflow: hidden;
    border-radius: 50px;
    padding: 18px 40px;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.6s ease;
    }
    
    &:hover::before {
      left: 100%;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
  }
  
  @media (max-width: 768px) {
    gap: 20px;
    
    button, a {
      padding: 15px 30px;
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    gap: 15px;
    flex-direction: column;
    align-items: center;
    
    button, a {
      padding: 12px 25px;
      font-size: 0.9rem;
      width: 100%;
      max-width: 250px;
    }
  }
`;

export const FeaturesSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 70%, #f5576c 100%);
  background-size: 400% 400%;
  animation: ${rotateGradient} 20s ease infinite;
  position: relative;
  overflow: hidden;
  
  /* Animated particles effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 2px, transparent 2px),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.6) 1px, transparent 1px),
      radial-gradient(circle at 50% 10%, rgba(255,255,255,0.4) 1.5px, transparent 1.5px),
      radial-gradient(circle at 10% 90%, rgba(255,255,255,0.5) 1px, transparent 1px),
      radial-gradient(circle at 90% 30%, rgba(255,255,255,0.7) 2px, transparent 2px);
    background-size: 200px 200px, 150px 150px, 100px 100px, 300px 300px, 250px 250px;
    background-position: 0 0, 40px 60px, 80px 120px, 160px 200px, 240px 280px;
    animation: ${float} 25s linear infinite;
    opacity: 0.6;
  }
  
  /* Gradient overlay for depth */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at top left, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(0,0,0,0.1) 0%, transparent 50%),
      linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.02) 50%, transparent 70%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 100px 0;
  }
  
  @media (max-width: 480px) {
    padding: 80px 0;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  text-shadow: 0 6px 25px rgba(0,0,0,0.4);
  position: relative;
  font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-feature-settings: 'kern' 1, 'liga' 1, 'ss01' 1;
  letter-spacing: -1.5px;
  line-height: 1.1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 5px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(255,255,255,0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 15px;
    letter-spacing: -1px;
    
    &::after {
      width: 80px;
      height: 3px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 12px;
    
    &::after {
      width: 60px;
      height: 2px;
    }
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255,255,255,0.9);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 95%;
    line-height: 1.5;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 95%;
  }
`;

export const FeatureCard = styled.div`
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(40px) saturate(150%);
  border: 1.5px solid rgba(255,255,255,0.3);
  border-radius: 32px;
  padding: 50px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 
    0 30px 60px rgba(0,0,0,0.12),
    0 8px 25px rgba(102,126,234,0.08),
    inset 0 1px 0 rgba(255,255,255,0.4),
    inset 0 -1px 0 rgba(255,255,255,0.1);
  min-height: 420px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  /* Premium glass morphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c);
    background-size: 300% 300%;
    transform: scaleX(0);
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 32px 32px 0 0;
    animation: ${rotateGradient} 8s linear infinite;
  }
  
  /* Rotating gradient overlay */
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(102,126,234,0.3) 90deg,
      rgba(118,75,162,0.3) 180deg,
      rgba(240,147,251,0.3) 270deg,
      transparent 360deg
    );
    border-radius: 30px;
    opacity: 0;
    transition: all 0.6s ease;
    animation: ${rotateGradient} 6s linear infinite;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-25px) scale(1.04) rotateX(2deg);
    box-shadow: 
      0 50px 100px rgba(102,126,234,0.25),
      0 20px 40px rgba(118,75,162,0.15),
      0 10px 20px rgba(240,147,251,0.1),
      inset 0 1px 0 rgba(255,255,255,0.7),
      inset 0 -1px 0 rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.25);
    backdrop-filter: blur(50px) saturate(180%);
    border-color: rgba(255,255,255,0.5);
    
    &::before {
      transform: scaleX(1);
      box-shadow: 0 4px 20px rgba(102,126,234,0.4);
      animation: ${shimmer} 2s ease-in-out infinite;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    min-height: 320px;
    border-radius: 20px;
    
    &:hover {
      transform: translateY(-8px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    min-height: 280px;
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-5px) scale(1.005);
    }
  }
`;

export const FeatureIcon = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 
    0 20px 40px rgba(102,126,234,0.4),
    0 8px 20px rgba(0,0,0,0.15),
    inset 0 1px 0 rgba(255,255,255,0.2);
  z-index: 10;
  
  /* Rotating border gradient */
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: conic-gradient(
      from 0deg,
      #667eea 0deg,
      #764ba2 90deg,
      #f093fb 180deg,
      #f5576c 270deg,
      #667eea 360deg
    );
    border-radius: 27px;
    z-index: -1;
    animation: ${rotateGradient} 4s linear infinite;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  /* Pulsing glow effect */
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: radial-gradient(
      circle,
      rgba(102,126,234,0.3) 0%,
      rgba(118,75,162,0.2) 30%,
      transparent 70%
    );
    border-radius: 34px;
    z-index: -2;
    opacity: 0;
    transition: all 0.5s ease;
    animation: ${pulse} 3s ease-in-out infinite;
  }
  
  ${FeatureCard}:hover & {
    transform: translateY(-10px) scale(1.1) rotateY(5deg);
    box-shadow: 
      0 30px 60px rgba(102,126,234,0.5),
      0 12px 30px rgba(0,0,0,0.2),
      inset 0 1px 0 rgba(255,255,255,0.3);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
      transform: scale(1.2);
    }
  }
    right: -8px;
    bottom: -8px;
    background: linear-gradient(135deg, rgba(102,126,234,0.3), rgba(118,75,162,0.3), rgba(240,147,251,0.3));
    border-radius: 28px;
    z-index: -2;
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.15) rotateY(15deg);
    box-shadow: 
      0 25px 50px rgba(102,126,234,0.6),
      0 10px 25px rgba(0,0,0,0.2);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2.4rem;
    margin: 0 auto 20px;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
    margin: 0 auto 15px;
    border-radius: 14px;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff;
  font-weight: 700;
  position: relative;
  z-index: 1;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.8px;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-feature-settings: 'kern' 1, 'liga' 1, 'ss01' 1, 'cv01' 1;
  
  /* Premium underline effect */
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
    border-radius: 3px;
    opacity: 0.9;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 16px;
    letter-spacing: -0.6px;
    
    &::after {
      width: 40px;
      height: 2.5px;
      bottom: -8px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 14px;
    letter-spacing: -0.4px;
    
    &::after {
      width: 35px;
      height: 2px;
      bottom: -6px;
    }
  }
`;

export const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.7;
  font-size: 1.05rem;
  position: relative;
  z-index: 1;
  font-weight: 400;
  text-align: center;
  max-width: 320px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.2px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-feature-settings: 'kern' 1, 'liga' 1;
  
  /* Premium text styling */
  &::selection {
    background: rgba(102, 126, 234, 0.3);
    color: #ffffff;
  }
  
  @media (max-width: 768px) {
    font-size: 0.98rem;
    max-width: 300px;
    line-height: 1.6;
    letter-spacing: 0.1px;
    font-weight: 450;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    max-width: 280px;
    line-height: 1.55;
    letter-spacing: 0px;
    font-weight: 500;
  }
`;

export const ProductsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 35px;
  margin-top: 70px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 30px;
    padding: 0 5px;
  }
`;

export const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  cursor: pointer;
  height: 620px;
  display: flex;
  flex-direction: column;
  
  /* Gradient border effect */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: conic-gradient(
      from 0deg,
      rgba(102,126,234,0.5) 0deg,
      rgba(118,75,162,0.3) 90deg,
      rgba(240,147,251,0.3) 180deg,
      rgba(245,87,108,0.3) 270deg,
      rgba(102,126,234,0.5) 360deg
    );
    border-radius: 26px;
    opacity: 0;
    transition: all 0.6s ease;
    animation: ${rotateGradient} 8s linear infinite;
    z-index: -1;
  }
  
  /* Inner glow effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.6s ease;
    border-radius: 24px;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 
      0 35px 70px rgba(0, 0, 0, 0.3),
      0 15px 40px rgba(102, 126, 234, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.18);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    height: 550px;
    border-radius: 15px;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  @media (max-width: 480px) {
    height: 500px;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  
  ${ProductCard}:hover & {
    transform: scale(1.08);
    filter: brightness(1.1) contrast(1.1) saturate(1.2);
  }
  
  @media (max-width: 768px) {
    height: 220px;
  }
  
  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const ProductInfo = styled.div`
  padding: 30px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1; /* Заполняет оставшееся пространство */
  
  ${ProductCard}:hover & {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0 0 12px 0;
  color: white;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: color 0.3s ease;
  line-height: 1.3;
  
  ${ProductCard}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 0 0 10px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 0 0 8px 0;
  }
`;

export const ProductPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 
    0 0 15px rgba(255, 255, 255, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
  letter-spacing: -0.3px;
  transition: all 0.3s ease;
  
  ${ProductCard}:hover & {
    color: #f093fb;
    text-shadow: 
      0 0 20px rgba(240, 147, 251, 0.6),
      0 0 30px rgba(255, 255, 255, 0.3),
      0 2px 12px rgba(0, 0, 0, 0.4);
    transform: scale(1.03);
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 16px 0;
  line-height: 1.6;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  ${ProductCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0 0 12px 0;
    -webkit-line-clamp: 2;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin: 0 0 10px 0;
    line-height: 1.5;
  }
`;

export const ProductButton = styled.button`
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.8), 
    rgba(118, 75, 162, 0.8)
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  margin-top: auto;
  
  &:hover {
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 1), 
      rgba(118, 75, 162, 1)
    );
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.85rem;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    border-radius: 15px;
  }
`;

// Дополнительные стили для scroll-эффектов
export const ScrollReveal = styled.div<{ delay?: number }>`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.delay || 0}ms;
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ParallaxElement = styled.div<{ speed?: number }>`
  transform: translateY(0);
  transition: transform 0.1s linear;
`;
