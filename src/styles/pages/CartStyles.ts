import styled from 'styled-components';

export const CartWrapper = styled.div`
  margin-top: 120px;
  min-height: calc(100vh - 120px);
  padding: 60px 0;
  background: #ffffff;
  color: #1a1a1a;
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 40px;
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const CartItems = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr auto auto auto;
  gap: 20px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
    gap: 15px;
    text-align: left;
    
    /* На мобильных устройствах размещаем элементы по строкам */
    > *:nth-child(3), /* Quantity controls */
    > *:nth-child(4), /* Price */
    > *:nth-child(5)  /* Remove button */ {
      grid-column: 1 / -1;
      justify-self: center;
      margin-top: 10px;
    }
  }
`;

export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  overflow: hidden;
  position: relative;
  
  /* Fallback background for when image fails to load */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`;

export const ItemInfo = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 5px;
    color: #1f2937;
  }
  
  p {
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f9fafb;
  border-radius: 25px;
  padding: 5px;
  border: 1px solid #e5e7eb;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #374151;
  
  &:hover {
    background: #667eea;
    color: white;
    border-color: #667eea;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Quantity = styled.span`
  font-weight: 600;
  min-width: 30px;
  text-align: center;
  color: #1f2937;
`;

export const ItemPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
`;

export const RemoveButton = styled.button`
  color: #ff6b6b;
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff6b6b;
    color: white;
  }
`;

export const CartSummary = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
  position: sticky;
  top: 140px;
  width: 100%;
  min-width: 300px;
`;

export const CheckoutButton = styled.div`
  width: 100%;
  margin-top: 20px;
  
  button, a {
    width: 100% !important;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
    color: white !important;
    border: none !important;
    border-radius: 16px !important;
    font-size: 1.2rem !important;
    font-weight: 800 !important;
    letter-spacing: 1px !important;
    text-transform: uppercase !important;
    padding: 18px 32px !important;
    min-height: 60px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 
      0 8px 24px rgba(16, 185, 129, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1) !important;
    position: relative !important;
    overflow: hidden !important;
    text-decoration: none !important;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }
    
    &:hover {
      background: linear-gradient(135deg, #059669 0%, #047857 100%) !important;
      transform: translateY(-3px) scale(1.02) !important;
      box-shadow: 
        0 12px 32px rgba(16, 185, 129, 0.6),
        0 0 0 1px rgba(255, 255, 255, 0.2) !important;
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(1.01) !important;
      box-shadow: 
        0 6px 20px rgba(16, 185, 129, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.1) !important;
    }

    @media (max-width: 768px) {
      font-size: 1.1rem !important;
      padding: 16px 24px !important;
      min-height: 56px !important;
      border-radius: 14px !important;
    }

    @media (max-width: 480px) {
      font-size: 1rem !important;
      padding: 14px 20px !important;
      min-height: 52px !important;
      border-radius: 12px !important;
      letter-spacing: 0.5px !important;
    }
  }
`;

export const ContinueShoppingButton = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 28px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    color: #475569;
    border: 2px solid #cbd5e1;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    white-space: nowrap;
    text-transform: none;
    letter-spacing: 0;
    width: auto;
    
    &::before {
      content: '←';
      font-size: 1.1rem;
      transition: transform 0.3s ease;
    }
    
    &:hover {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: #667eea;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
      
      &::before {
        transform: translateX(-3px);
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(1.01);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    }

    @media (max-width: 768px) {
      padding: 12px 24px;
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
  }
`;

export const SummaryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1f2937;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #374151;
  font-size: 1rem;
  
  &.total {
    border-top: 2px solid #e5e7eb;
    padding-top: 15px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #1f2937;
  }
`;

export const MembershipOffer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  margin: 20px 0;
  text-align: left;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #ffffff;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  p {
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 15px;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #e5e7eb;
  
  .icon {
    font-size: 4rem;
    color: #d1d5db;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 1.5rem;
    color: #374151;
    margin-bottom: 15px;
  }
  
  p {
    color: #6b7280;
    margin-bottom: 30px;
  }
`;

export const VipBenefits = styled.div`
  margin: 20px 0;
  
  h4 {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 15px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const VipBenefit = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 0.95rem;
  color: #ffffff;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: "✓";
    color: #34d399;
    font-weight: bold;
    margin-right: 12px;
    font-size: 1.1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const MembershipModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  cursor: pointer;
`;

export const ModalContent = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 24px;
  padding: 32px;
  max-width: 550px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  z-index: 2;
  border: 1px solid #e2e8f0;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  animation: slideUp 0.3s ease-out;
  
  /* Скрываем скроллбар для Webkit браузеров */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 3px;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    margin: 10px;
    max-height: 90vh;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
    margin: 8px;
    border-radius: 16px;
  }
`;

export const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 28px;
  position: relative;
  
  h2 {
    font-size: 1.75rem;
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
    letter-spacing: -0.025em;
  }
  
  p {
    color: #64748b;
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
    
    h2 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    
    h2 {
      font-size: 1.375rem;
    }
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
  z-index: 10;
  
  &:hover {
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(239, 68, 68, 0.6);
  }
  
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    top: -6px;
    right: -6px;
    width: 32px;
    height: 32px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    top: -4px;
    right: -4px;
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
`;

export const PlanOption = styled.div<{ selected?: boolean }>`
  border: 3px solid ${props => props.selected ? '#667eea' : '#e2e8f0'};
  border-radius: 16px;
  padding: 20px;
  margin: 12px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  background: ${props => props.selected 
    ? 'linear-gradient(135deg, #f0f4ff 0%, #e0f2fe 100%)' 
    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'};
  transform: ${props => props.selected ? 'scale(1.02)' : 'scale(1)'};
  box-shadow: ${props => props.selected 
    ? '0 12px 32px rgba(102, 126, 234, 0.25), 0 0 0 1px rgba(102, 126, 234, 0.1)' 
    : '0 4px 16px rgba(0, 0, 0, 0.08)'};
  
  &:hover {
    border-color: #667eea;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 16px 40px rgba(102, 126, 234, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.selected 
      ? 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' 
      : 'transparent'};
    border-radius: 16px 16px 0 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 16px;
    margin: 10px 0;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-2px) scale(1.01);
    }
  }

  @media (max-width: 480px) {
    padding: 14px;
    margin: 8px 0;
    border-radius: 10px;
    
    &:hover {
      transform: translateY(-1px);
    }
  }
`;

export const PlanName = styled.div`
  font-weight: 700;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const PlanPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #667eea;
  display: flex;
  align-items: baseline;
  gap: 4px;

  span {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
    
    span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    
    span {
      font-size: 0.75rem;
    }
  }
`;

export const RecommendedBadge = styled.span`
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #ffffff;
  font-size: 0.6rem;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
    }
    50% {
      box-shadow: 0 4px 16px rgba(251, 191, 36, 0.6);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.55rem;
    padding: 3px 6px;
  }

  @media (max-width: 480px) {
    font-size: 0.5rem;
    padding: 2px 5px;
    border-radius: 8px;
  }
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    display: flex;
    align-items: center;
    margin: 8px 0;
    color: #64748b;
    font-size: 0.9rem;
    
    &::before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      margin-right: 10px;
      font-size: 1.1rem;
    }
  }
`;

export const DiscountApplied = styled.div`
  background: #f0fdf4;
  border: 2px solid #10b981;
  border-radius: 12px;
  padding: 15px;
  margin: 15px 0;
  color: #065f46;
`;

export const MembershipCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;

  input[type="checkbox"] {
    width: 22px;
    height: 22px;
    accent-color: #fbbf24;
    cursor: pointer;
  }

  label {
    cursor: pointer;
    font-size: 1.1rem;
    color: #ffffff;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    
    strong {
      font-size: 1.2rem;
      text-decoration: underline;
      text-decoration-color: #fbbf24;
    }
  }
`;

export const TrialInfo = styled.div`
  font-size: 0.9rem;
  color: #ffffff;
  line-height: 1.5;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.15);
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid #fbbf24;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
