import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { currencyService, Currency } from '../services/currency';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CurrencyWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const CurrencyButton = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'rgba(255, 255, 255, 0.1)'};
  border: 2px solid ${props => props.isActive 
    ? 'rgba(255, 255, 255, 0.3)' 
    : 'rgba(255, 255, 255, 0.2)'};
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  backdrop-filter: blur(15px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: ${props => props.isActive 
    ? '0 8px 25px rgba(102, 126, 234, 0.3)' 
    : '0 4px 15px rgba(0, 0, 0, 0.1)'};
  
  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

const CurrencyIcon = styled.span`
  font-size: 1.1rem;
  animation: ${fadeIn} 0.3s ease;
`;

const CurrencyText = styled.span`
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow: hidden;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 140px;
`;

const DropdownItem = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 12px 16px;
  background: ${props => props.isSelected ? 'rgba(102, 126, 234, 0.1)' : 'transparent'};
  border: none;
  color: ${props => props.isSelected ? '#667eea' : '#2d3748'};
  font-size: 0.9rem;
  font-weight: ${props => props.isSelected ? '700' : '600'};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  &:first-child {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  &:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

const CurrencySymbol = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  opacity: 0.8;
`;

interface CurrencyToggleProps {
  onCurrencyChange?: (currency: Currency) => void;
}

const CurrencyToggle: React.FC<CurrencyToggleProps> = ({ onCurrencyChange }) => {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(currencyService.getCurrency());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrentCurrency(newCurrency);
    currencyService.setCurrency(newCurrency);
    setIsDropdownOpen(false);
    
    if (onCurrencyChange) {
      onCurrencyChange(newCurrency);
    }
    
    // Trigger a custom event to update prices throughout the app
    window.dispatchEvent(new CustomEvent('currencyChanged', { 
      detail: { currency: newCurrency } 
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-currency-toggle]')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Listen for currency changes from other components
  useEffect(() => {
    const handleCurrencyUpdate = (event: CustomEvent) => {
      setCurrentCurrency(event.detail.currency);
    };

    window.addEventListener('currencyChanged', handleCurrencyUpdate as EventListener);
    
    return () => {
      window.removeEventListener('currencyChanged', handleCurrencyUpdate as EventListener);
    };
  }, []);

  const currencies = [
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'USD', symbol: '$', name: 'US Dollar' }
  ];

  const currentCurrencyData = currencies.find(c => c.code === currentCurrency);

  return (
    <CurrencyWrapper data-currency-toggle>
      <CurrencyButton 
        isActive={isDropdownOpen} 
        onClick={toggleDropdown}
        type="button"
      >
        <CurrencyIcon>💱</CurrencyIcon>
        <CurrencyText>{currentCurrency}</CurrencyText>
        <CurrencySymbol>{currentCurrencyData?.symbol}</CurrencySymbol>
      </CurrencyButton>
      
      <DropdownMenu isOpen={isDropdownOpen}>
        {currencies.map((currency) => (
          <DropdownItem
            key={currency.code}
            isSelected={currency.code === currentCurrency}
            onClick={() => handleCurrencyChange(currency.code as Currency)}
            type="button"
          >
            <span>{currency.code} ({currency.symbol})</span>
            <CurrencySymbol>{currency.symbol}</CurrencySymbol>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </CurrencyWrapper>
  );
};

export default CurrencyToggle;