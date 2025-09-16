import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../styles/GlobalStyles';

const AboutWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  /* Основной анимированный фон */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(102, 126, 234, 0.15) 0%,
      rgba(255, 107, 107, 0.1) 30%,
      rgba(78, 205, 196, 0.1) 60%,
      transparent 80%
    );
    animation: rotate 40s linear infinite;
    pointer-events: none;
  }
  
  /* Дополнительные плавающие элементы */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    right: 10%;
    width: 300px;
    height: 300px;
    background: linear-gradient(
      45deg,
      rgba(255, 107, 107, 0.1) 0%,
      rgba(78, 205, 196, 0.1) 50%,
      rgba(69, 183, 209, 0.1) 100%
    );
    border-radius: 50%;
    animation: float 8s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1); }
  }
  
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) translateX(0px) scale(1);
      opacity: 0.3;
    }
    33% { 
      transform: translateY(-30px) translateX(20px) scale(1.1);
      opacity: 0.5;
    }
    66% { 
      transform: translateY(20px) translateX(-15px) scale(0.9);
      opacity: 0.4;
    }
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  
  /* Добавляем декоративные элементы вокруг логотипа */
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(69, 183, 209, 0.2));
    border-radius: 50%;
    animation: orbit 15s linear infinite;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    right: -120px;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, rgba(78, 205, 196, 0.3), rgba(150, 206, 180, 0.2));
    border-radius: 30%;
    animation: orbit 20s linear infinite reverse;
    z-index: -1;
  }
  
  @keyframes orbit {
    0% { 
      transform: rotate(0deg) translateX(150px) rotate(0deg);
      opacity: 0.3;
    }
    50% {
      opacity: 0.7;
    }
    100% { 
      transform: rotate(360deg) translateX(150px) rotate(-360deg);
      opacity: 0.3;
    }
  }
`;

const MainLogo = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(
    135deg,
    #ff6b6b 0%,
    #4ecdc4 25%,
    #45b7d1 50%,
    #96ceb4 75%,
    #ffeaa7 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 8s ease infinite;
  letter-spacing: -2px;
  text-shadow: 0 0 50px rgba(102, 126, 234, 0.3);
  position: relative;
  
  &::after {
    content: 'ELARIOSSO';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.2) 0%,
      rgba(118, 75, 162, 0.2) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: blur(10px);
    z-index: -1;
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: 768px) {
    font-size: 5rem;
    letter-spacing: -1px;
  }
  
  @media (max-width: 480px) {
    font-size: 3.5rem;
    letter-spacing: -0.5px;
  }
  
  @media (max-width: 375px) {
    font-size: 3rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  color: #667eea;
  font-size: 2rem;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) scale(1.1);
    color: #ff6b6b;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    bottom: 20px;
  }
`;

/* Добавляем анимированные частицы */
const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Particle = styled.div<{ delay: number; duration: number; size: number; x: number; y: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(45deg, rgba(255, 107, 107, 0.3), rgba(78, 205, 196, 0.3));
  border-radius: 50%;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  animation: particleFloat ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  @keyframes particleFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) scale(1);
      opacity: 0.3;
    }
    25% {
      transform: translateY(-20px) translateX(10px) scale(1.2);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-40px) translateX(-5px) scale(0.8);
      opacity: 0.8;
    }
    75% {
      transform: translateY(-20px) translateX(-10px) scale(1.1);
      opacity: 0.5;
    }
  }
`;

/* Добавляем контентные плавающие элементы */
const ContentFloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled.div<{ delay: number; size: number; x: number; y: number; shape: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(78, 205, 196, 0.08) 50%,
    rgba(255, 107, 107, 0.06) 100%
  );
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  animation: gentleFloat 15s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  border-radius: ${props => {
    switch (props.shape) {
      case 'circle': return '50%';
      case 'square': return '10%';
      case 'diamond': return '0';
      default: return '30% 70% 70% 30% / 30% 30% 70% 70%';
    }
  }};
  ${props => props.shape === 'diamond' && `
    transform: rotate(45deg);
  `}
  
  @keyframes gentleFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) scale(1) ${props => props.shape === 'diamond' ? 'rotate(45deg)' : ''};
      opacity: 0.2;
    }
    33% {
      transform: translateY(-15px) translateX(8px) scale(1.1) ${props => props.shape === 'diamond' ? 'rotate(135deg)' : ''};
      opacity: 0.4;
    }
    66% {
      transform: translateY(10px) translateX(-5px) scale(0.9) ${props => props.shape === 'diamond' ? 'rotate(225deg)' : ''};
      opacity: 0.3;
    }
  }
`;

const ContentSection = styled.section`
  padding: 120px 0;
  position: relative;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
  overflow: hidden;
  
  /* Анимированный волновой фон */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(102, 126, 234, 0.05) 0%,
      rgba(255, 107, 107, 0.03) 25%,
      rgba(78, 205, 196, 0.05) 50%,
      rgba(150, 206, 180, 0.03) 75%,
      rgba(255, 234, 167, 0.05) 100%
    );
    background-size: 400% 400%;
    animation: backgroundShift 25s ease infinite;
    pointer-events: none;
    z-index: 1;
  }
  
  /* Плавающие геометрические фигуры */
  &::after {
    content: '';
    position: absolute;
    top: 15%;
    left: 5%;
    width: 200px;
    height: 200px;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.1) 0%,
      rgba(255, 107, 107, 0.08) 100%
    );
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morphFloat 20s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }
  
  @keyframes backgroundShift {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 50% 100%; }
    75% { background-position: 100% 0%; }
  }
  
  @keyframes morphFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      opacity: 0.3;
    }
    25% {
      transform: translateY(-30px) translateX(20px) rotate(90deg);
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
      opacity: 0.5;
    }
    50% {
      transform: translateY(-60px) translateX(-10px) rotate(180deg);
      border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
      opacity: 0.4;
    }
    75% {
      transform: translateY(-30px) translateX(-30px) rotate(270deg);
      border-radius: 40% 60% 60% 40% / 60% 40% 40% 60%;
      opacity: 0.6;
    }
  }
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 2;
  
  /* Декоративные элементы по углам */
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    background: linear-gradient(
      45deg,
      rgba(78, 205, 196, 0.15) 0%,
      rgba(69, 183, 209, 0.1) 100%
    );
    border-radius: 50%;
    animation: pulseGlow 12s ease-in-out infinite;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 120px;
    height: 120px;
    background: linear-gradient(
      135deg,
      rgba(255, 107, 107, 0.12) 0%,
      rgba(255, 234, 167, 0.08) 100%
    );
    border-radius: 60% 40% 40% 60% / 40% 60% 60% 40%;
    animation: rotateShape 18s linear infinite;
    pointer-events: none;
  }
  
  @keyframes pulseGlow {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
      filter: blur(5px);
    }
    50% {
      transform: scale(1.3);
      opacity: 0.6;
      filter: blur(2px);
    }
  }
  
  @keyframes rotateShape {
    0% {
      transform: rotate(0deg) scale(1);
      border-radius: 60% 40% 40% 60% / 40% 60% 60% 40%;
    }
    25% {
      transform: rotate(90deg) scale(1.1);
      border-radius: 40% 60% 60% 40% / 60% 40% 40% 60%;
    }
    50% {
      transform: rotate(180deg) scale(0.9);
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    }
    75% {
      transform: rotate(270deg) scale(1.05);
      border-radius: 70% 30% 30% 70% / 30% 70% 70% 30%;
    }
    100% {
      transform: rotate(360deg) scale(1);
      border-radius: 60% 40% 40% 60% / 40% 60% 60% 40%;
    }
  }
`;

const CompanyName = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  color: #2d3748;
  margin: 0 0 60px 0;
  letter-spacing: -1px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 50px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
    letter-spacing: -0.5px;
  }
`;

const MissionText = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: #4a5568;
  margin: 0 0 40px 0;
  font-weight: 400;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 35px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.5;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.4rem;
  line-height: 1.7;
  color: #718096;
  margin: 0;
  font-weight: 300;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.4s;
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

/* Мини-плашка для перехода на страницу продуктов */
const ProductsCallToAction = styled.div`
  margin-top: 80px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.6s;
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    margin-top: 60px;
  }
  
  @media (max-width: 480px) {
    margin-top: 50px;
  }
`;

const ProductsCard = styled(Link)`
  display: block;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 50px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 250, 252, 0.8) 100%
  );
  border: 2px solid transparent;
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-shadow: 
    0 10px 40px rgba(102, 126, 234, 0.1),
    0 5px 20px rgba(255, 107, 107, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(102, 126, 234, 0.1) 50%,
      transparent 100%
    );
    transition: left 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      #667eea 0%,
      #ff6b6b 25%,
      #4ecdc4 50%,
      #45b7d1 75%,
      #96ceb4 100%
    );
    background-size: 300% 300%;
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: gradientShift 3s ease infinite;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 
      0 20px 60px rgba(102, 126, 234, 0.15),
      0 10px 30px rgba(255, 107, 107, 0.1);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-5px) scale(1.01);
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 35px 40px;
  }
  
  @media (max-width: 480px) {
    max-width: 320px;
    padding: 30px 25px;
  }
`;

const ProductsCardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 15px 0;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
  
  ${ProductsCard}:hover & {
    color: #667eea;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const ProductsCardDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #718096;
  margin: 0 0 25px 0;
  font-weight: 400;
  transition: color 0.3s ease;
  
  ${ProductsCard}:hover & {
    color: #4a5568;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 18px;
    line-height: 1.4;
  }
`;

const ProductsCardButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #667eea;
  padding: 12px 25px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50px;
  transition: all 0.3s ease;
  
  &::after {
    content: '→';
    font-size: 1.2rem;
    transform: translateX(0);
    transition: transform 0.3s ease;
  }
  
  ${ProductsCard}:hover & {
    background: rgba(102, 126, 234, 0.15);
    color: #5a67d8;
    
    &::after {
      transform: translateX(5px);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px 18px;
  }
`;

const About: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  // Генерируем частицы для hero секции
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 6,
    size: 4 + Math.random() * 8,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  // Генерируем плавающие элементы для контентной секции
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    size: 30 + Math.random() * 60,
    x: Math.random() * 100,
    y: Math.random() * 100,
    shape: ['circle', 'square', 'diamond', 'organic'][Math.floor(Math.random() * 4)]
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const setElementRef = (index: number) => (el: HTMLElement | null) => {
    elementsRef.current[index] = el;
  };

  const handleScrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <AboutWrapper>
      <HeroSection>
        <ParticlesContainer>
          {particles.map((particle) => (
            <Particle
              key={particle.id}
              delay={particle.delay}
              duration={particle.duration}
              size={particle.size}
              x={particle.x}
              y={particle.y}
            />
          ))}
        </ParticlesContainer>
        
        <LogoContainer>
          <MainLogo>ELARIOSSO</MainLogo>
        </LogoContainer>
        
        <ScrollIndicator onClick={handleScrollToContent}>
          ↓
        </ScrollIndicator>
      </HeroSection>

      <ContentSection ref={contentRef}>
        <ContentFloatingElements>
          {floatingElements.map((element) => (
            <FloatingElement
              key={element.id}
              delay={element.delay}
              size={element.size}
              x={element.x}
              y={element.y}
              shape={element.shape}
            />
          ))}
        </ContentFloatingElements>
        
        <Container>
          <ContentContainer>
            <CompanyName ref={setElementRef(0)}>
              ELARIOSSO
            </CompanyName>
            
            <MissionText ref={setElementRef(1)}>
              To deeply satisfy audio enthusiasts' needs by offering the most immersive, premium,
            </MissionText>
            
            <MissionText ref={setElementRef(2)}>
              and innovative headphone products across all categories,
            </MissionText>
            
            <DescriptionText ref={setElementRef(3)}>
              designed with cutting-edge technology, superior sound quality, and exceptional comfort 
              to deliver an unparalleled audio experience that transforms how you connect with music, 
              calls, and digital content in your daily life.
            </DescriptionText>
            
            <ProductsCallToAction ref={setElementRef(4)}>
              <ProductsCard to="/products">
                <ProductsCardTitle>Explore Our Collection</ProductsCardTitle>
                <ProductsCardDescription>
                  Discover premium headphones designed for audiophiles and tech enthusiasts
                </ProductsCardDescription>
                <ProductsCardButton>
                  View Products
                </ProductsCardButton>
              </ProductsCard>
            </ProductsCallToAction>
          </ContentContainer>
        </Container>
      </ContentSection>
    </AboutWrapper>
  );
};

export default About;