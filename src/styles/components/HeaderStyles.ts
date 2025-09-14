import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const shimmer = keyframes`
  0% { 
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
  }
  50% { 
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.6), 0 0 30px rgba(118, 75, 162, 0.4);
  }
  100% { 
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`;

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const snakeBorder = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);
  }
  25% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  75% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;

const borderSnake = keyframes`
  0% {
    background: linear-gradient(90deg, #667eea 0%, #667eea 10%, transparent 15%, transparent 100%);
    background-position: -100% 0;
    background-size: 200% 4px;
  }
  25% {
    background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    background-position: 0% 0;
    background-size: 100% 4px;
  }
  26% {
    background: linear-gradient(0deg, #764ba2 0%, #764ba2 10%, transparent 15%, transparent 100%);
    background-position: 100% -100%;
    background-size: 4px 200%;
  }
  50% {
    background: linear-gradient(0deg, #764ba2 0%, #f093fb 50%, #667eea 100%);
    background-position: 100% 0%;
    background-size: 4px 100%;
  }
  51% {
    background: linear-gradient(-90deg, #f093fb 0%, #f093fb 10%, transparent 15%, transparent 100%);
    background-position: 200% 100%;
    background-size: 200% 4px;
  }
  75% {
    background: linear-gradient(-90deg, #f093fb 0%, #667eea 50%, #764ba2 100%);
    background-position: 0% 100%;
    background-size: 100% 4px;
  }
  76% {
    background: linear-gradient(180deg, #667eea 0%, #667eea 10%, transparent 15%, transparent 100%);
    background-position: 0% 200%;
    background-size: 4px 200%;
  }
  99% {
    background: linear-gradient(180deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    background-position: 0% 0%;
    background-size: 4px 100%;
  }
  100% {
    background: linear-gradient(90deg, #764ba2 0%, #764ba2 10%, transparent 15%, transparent 100%);
    background-position: -100% 0;
    background-size: 200% 4px;
  }
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.15);
  }
  
  @media (max-width: 480px) {
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 15px rgba(102, 126, 234, 0.2);
  }
`;

export const TopBar = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 8s ease infinite;
  color: white;
  padding: 8px 0;
  font-size: 14px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: ${shimmer} 3s infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 8px 0;
    /* Увеличиваем высоту для лучшей видимости */
    min-height: 35px;
    display: flex;
    align-items: center;
  }
  
  @media (max-width: 360px) {
    padding: 6px 0;
    font-size: 10px;
    min-height: 32px;
  }
`;

export const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 15px;
    flex-direction: column;
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
    gap: 6px;
    /* Увеличиваем высоту контента */
    min-height: inherit;
    justify-content: center;
  }
`;

export const WarningText = styled.div`
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    font-size: 0.95em;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9em;
    text-align: center;
    /* Показываем сокращенную версию */
    font-size: 11px;
    font-weight: 700;
  }
  
  @media (max-width: 360px) {
    font-size: 10px;
    font-weight: 700;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 0.9em;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
    font-size: 10px;
    /* Показываем только телефон на маленьких экранах */
    > div:first-child {
      display: none;
    }
  }
  
  @media (max-width: 360px) {
    font-size: 9px;
    gap: 8px;
    /* Показываем только телефон */
    > div:first-child {
      display: none;
    }
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.9);
  
  &:hover {
    transform: translateY(-1px);
    color: white;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }
  
  @media (max-width: 480px) {
    gap: 3px;
    
    /* Увеличиваем размер иконок для лучшей видимости */
    svg {
      width: 12px !important;
      height: 12px !important;
    }
  }
  
  @media (max-width: 360px) {
    gap: 2px;
    
    svg {
      width: 10px !important;
      height: 10px !important;
    }
  }
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 15px;
    height: 55px;
  }
  
  @media (max-width: 480px) {
    padding: 0 8px;
    height: 45px;
    gap: 4px;
  }
  
  @media (max-width: 375px) {
    padding: 0 6px;
    height: 42px;
    gap: 3px;
  }
  
  @media (max-width: 360px) {
    padding: 0 5px;
    height: 40px;
    gap: 2px;
  }
  
  @media (max-width: 320px) {
    padding: 0 4px;
    height: 35px;
    gap: 1px;
  }
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  animation: ${float} 6s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.1;
    font-weight: 800;
    /* Сокращаем логотип на мобильных */
    &::before {
      content: "EL";
      display: block;
    }
    
    /* Скрываем оригинальный текст */
    font-size: 0;
    
    &::before {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 375px) {
    &::before {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 360px) {
    &::before {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 320px) {
    &::before {
      font-size: 0.8rem;
    }
  }
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 30px;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 55px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 12px 15px;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    gap: 8px;
    border-bottom: 1px solid rgba(102, 126, 234, 0.1);
    max-height: calc(100vh - 55px);
    overflow-y: auto;
  }
  
  @media (max-width: 480px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 10px 8px;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    gap: 6px;
    border-bottom: 1px solid rgba(102, 126, 234, 0.1);
    max-height: calc(100vh - 45px);
    overflow-y: auto;
    z-index: 999;
  }
  
  @media (max-width: 375px) {
    top: 42px;
    padding: 8px 6px;
    gap: 5px;
    max-height: calc(100vh - 42px);
  }
  
  @media (max-width: 360px) {
    top: 40px;
    padding: 6px 5px;
    gap: 4px;
    max-height: calc(100vh - 40px);
  }
  
  @media (max-width: 320px) {
    top: 35px;
    padding: 5px 4px;
    gap: 3px;
    max-height: calc(100vh - 35px);
  }
`;

export const NavLink = styled(Link)`
  color: #333;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
    background-size: 300% 300%;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    animation: ${borderSnake} 4s ease-in-out infinite;
    animation-play-state: paused;
  }
  
  &:hover {
    color: #667eea;
    transform: translateY(-2px);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
      animation-play-state: running;
    }
  }
  
  &.active {
    color: #667eea;
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 0.7;
      animation-play-state: running;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 8px 15px;
    font-size: 0.9rem;
    font-weight: 500;
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.85rem;
    font-weight: 500;
  }
  
  @media (max-width: 375px) {
    padding: 5px 10px;
    font-size: 0.8rem;
    font-weight: 400;
  }
  
  @media (max-width: 360px) {
    padding: 4px 8px;
    font-size: 0.75rem;
    font-weight: 400;
  }
  
  @media (max-width: 320px) {
    padding: 3px 6px;
    font-size: 0.7rem;
    font-weight: 400;
  }
`;

export const ProductsNavItem = styled.div`
  position: relative;
  display: inline-block;
  
  /* Увеличиваем невидимую область для стабильного наведения */
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    z-index: -1;
    pointer-events: none;
  }
  
  /* Создаем мостик к выпадающему меню */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: -250px;
    right: -250px;
    height: 15px;
    z-index: 998;
    pointer-events: auto;
    background: transparent;
  }
  
  @media (max-width: 768px) {
    position: static;
    display: block;
    width: 100%;
    text-align: center;
    
    /* Обеспечиваем центрирование NavLink внутри */
    & a {
      display: block;
      width: 100%;
      text-align: center !important;
      margin: 0 auto;
    }
    
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    padding: 2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
    background-size: 300% 300%;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    animation: ${borderSnake} 4s ease-in-out infinite;
    animation-play-state: paused;
  }
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: scale(1.1);
    
    &::after {
      opacity: 1;
      animation-play-state: running;
    }
  }
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1.2rem;
    padding: 4px;
  }
  
  @media (max-width: 480px) {
    display: block;
    font-size: 1rem;
    padding: 3px;
  }
  
  @media (max-width: 375px) {
    font-size: 0.9rem;
    padding: 2px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
    padding: 2px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8rem;
    padding: 1px;
  }
`;

export const CartIcon = styled(Link)`
  color: #333;
  font-size: 1.5rem;
  position: relative;
  padding: 8px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
    background-size: 300% 300%;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    animation: ${borderSnake} 4s ease-in-out infinite;
    animation-play-state: paused;
  }
  
  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
    
    &::after {
      opacity: 1;
      animation-play-state: running;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
    padding: 2px;
  }
  
  @media (max-width: 375px) {
    font-size: 0.85rem;
    padding: 1px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.8rem;
    padding: 1px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.75rem;
    padding: 1px;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -1px;
  right: -3px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  animation: ${float} 2s ease-in-out infinite;
  box-shadow: 0 2px 8px rgba(238, 90, 82, 0.4);
  border: 2px solid white;
  z-index: 1000;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
    top: -3px;
    right: -3px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    font-size: 0.65rem;
    top: -2px;
    right: -2px;
  }
  
  @media (max-width: 375px) {
    width: 16px;
    height: 16px;
    font-size: 0.6rem;
  }
  
  @media (max-width: 360px) {
    width: 15px;
    height: 15px;
    font-size: 0.55rem;
  }
  
  @media (max-width: 320px) {
    width: 14px;
    height: 14px;
    font-size: 0.5rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    gap: 4px;
  }
  
  @media (max-width: 375px) {
    gap: 3px;
  }
  
  @media (max-width: 360px) {
    gap: 2px;
  }
  
  @media (max-width: 320px) {
    gap: 1px;
  }
`;

export const UserButton = styled.button`
  color: #333;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
    background-size: 300% 300%;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    animation: ${borderSnake} 4s ease-in-out infinite;
    animation-play-state: paused;
  }
  
  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
    
    &::after {
      opacity: 1;
      animation-play-state: running;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 2px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
    padding: 1px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8rem;
    padding: 1px;
  }
`;

export {};