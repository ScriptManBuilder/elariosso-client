import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsWrapper = styled.div`
  margin-top: 120px;
  min-height: calc(100vh - 120px);
  padding: 80px 0;
  background: 
    linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.9) 100%),
    radial-gradient(circle at 20% 80%, rgba(240, 147, 251, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(245, 87, 108, 0.3) 0%, transparent 50%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 2px, transparent 2px),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.01) 1px, transparent 1px);
    background-size: 60px 60px, 40px 40px;
    opacity: 0.3;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
    margin-top: 100px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
    margin-top: 80px;
  }
`;

export const FilterSection = styled.div`
  padding: 30px 0;
  margin-bottom: 50px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 20px 0;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    padding: 15px 0;
    margin-bottom: 20px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 14px 28px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 35px;
  background: ${props => props.active 
    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.25) 100%)' 
    : 'rgba(255, 255, 255, 0.15)'};
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 0.3px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(15px);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.35) 100%)' 
      : 'rgba(255, 255, 255, 0.25)'};
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0) scale(1.02);
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.85rem;
    letter-spacing: 0.2px;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 30px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 20px;
    padding: 0 5px;
  }
`;

export const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 8px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 30px 60px rgba(102, 126, 234, 0.15),
      0 15px 25px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    border-radius: 20px;
    
    &:hover {
      transform: translateY(-8px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-6px) scale(1.005);
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
    filter: brightness(1.1) contrast(1.05) saturate(1.1);
  }
  
  @media (max-width: 768px) {
    height: 220px;
  }
  
  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const ProductBadge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(220, 53, 69, 0.9);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  
  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    padding: 4px 8px;
    font-size: 0.75rem;
  }
`;

export const ProductInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 280px;
  
  @media (max-width: 768px) {
    padding: 16px;
    min-height: 260px;
  }
  
  @media (max-width: 480px) {
    padding: 14px;
    min-height: 240px;
  }
`;

export const ProductName = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a202c;
  line-height: 1.3;
  letter-spacing: -0.3px;
  transition: all 0.3s ease;
  
  ${ProductCard}:hover & {
    color: #667eea;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
    letter-spacing: -0.2px;
  }
`;

export const ProductLink = styled(Link)`
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
`;

export const ProductPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
    letter-spacing: -0.3px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 8px;
    letter-spacing: -0.2px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #4a5568;
  margin: 0 0 15px 0;
  line-height: 1.6;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex: 1;
  transition: color 0.3s ease;
  
  ${ProductCard}:hover & {
    color: #2d3748;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin: 0 0 12px 0;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin: 0 0 10px 0;
    line-height: 1.4;
  }
`;

export const ProductFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0;
  
  @media (max-width: 480px) {
    gap: 4px;
    margin: 6px 0;
  }
`;

export const FeatureTag = styled.span`
  background: #f8f9fa;
  color: #495057;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid #e9ecef;
  
  @media (max-width: 480px) {
    padding: 2px 6px;
    font-size: 0.65rem;
    border-radius: 8px;
  }
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 40px 30px;
  border-radius: 24px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 25px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c, #667eea) border-box;
    background-size: 400% 400%;
    animation: borderGlow 8s ease-in-out infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask: 
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
  
  @keyframes borderGlow {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 100% 100%; }
    75% { background-position: 0% 100%; }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
    padding: 30px 20px;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
    padding: 25px 16px;
    border-radius: 16px;
  }
`;

export const PageTitle = styled.h1`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0 0 15px 0;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 0 0 12px 0;
    letter-spacing: -0.8px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 0 0 10px 0;
    letter-spacing: -0.6px;
  }
`;

export const PageSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.3px;
  line-height: 1.5;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 0.2px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    letter-spacing: 0.1px;
    line-height: 1.4;
  }
`;
