import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MinusIcon, PlusIcon, TrashIcon, ShoppingBagIcon } from '../components/Icons';
import { Button, Container, Title } from '../styles/GlobalStyles';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { usePrice } from '../hooks/usePrice';
import {
  CartWrapper,
  CartContent,
  CartItems,
  CartItem,
  ItemImage,
  ItemInfo,
  QuantityControls,
  QuantityButton,
  Quantity,
  ItemPrice,
  RemoveButton,
  CartSummary,
  SummaryTitle,
  SummaryRow,
  MembershipOffer,
  EmptyCart,
  CheckoutButton,
  ContinueShoppingButton,
  VipBenefits,
  VipBenefit,
  MembershipModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalClose,
  PlanOption,
  PlanPrice,
  PlanFeatures,
  DiscountApplied,
  MembershipCheckbox,
  TrialInfo,
  PlanName,
  RecommendedBadge
} from '../styles/pages/CartStyles';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeItem } = useCart();
  const { user, isAuthenticated, startTrial, getMembershipDiscount } = useAuth();
  const { formatPrice } = usePrice();
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('19.99');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribeChecked, setIsSubscribeChecked] = useState(false);

  const closeModal = () => {
    setShowMembershipModal(false);
    setIsSubscribeChecked(false); // Снимаем флажок при закрытии модала
  };

  const membershipPlans = [
    {
      price: '9.99',
      name: 'Starter Mini Membership',
      features: ['5% discount on all orders', 'Basic customer support', 'Monthly newsletter'],
      discount: 5
    },
    {
      price: '19.99',
      name: 'Starter Membership', 
      features: ['8% discount on all orders', 'Priority support', 'Monthly newsletter', 'Free shipping on orders over $50'],
      discount: 8,
      recommended: true
    },
    {
      price: '29.99',
      name: 'Basic Membership',
      features: ['12% discount on all orders', 'Free shipping on all orders', 'Priority support', 'Early access to new products'],
      discount: 12
    },
    {
      price: '39.99',
      name: 'Prime Membership',
      features: ['15% discount on all orders', 'Free shipping worldwide', 'VIP support', 'Early access to new products', 'Exclusive member events'],
      discount: 15
    },
    {
      price: '49.99',
      name: 'Gold Membership',
      features: ['18% discount on all orders', 'Free shipping worldwide', 'VIP support', 'Early access to new products', 'Exclusive member events', 'Birthday bonus'],
      discount: 18
    },
    {
      price: '59.99',
      name: 'VIP Membership',
      features: ['20% discount on all orders', 'Free shipping worldwide', 'Premium VIP support', 'First access to new products', 'Exclusive member events', 'Birthday bonus', 'Personal shopping assistant'],
      discount: 20
    }
  ];

  const subtotal = state.total;
  const membershipDiscount = isAuthenticated && user?.isVipMember ? getMembershipDiscount() : 0;
  const discountAmount = subtotal * membershipDiscount;
  const discountedSubtotal = subtotal - discountAmount;
  const shipping = discountedSubtotal > 50 ? 0 : 12.00;
  const total = discountedSubtotal + shipping;

  const handleStartTrial = async (planPrice: string, planName: string) => {
    if (!isAuthenticated) {
      alert('Please log in to start your membership trial');
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Симуляция API вызова
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      startTrial(planName, planPrice);
      closeModal();
      
      alert(`🎉 Congratulations! Your 3-day free trial for ${planName} (£${planPrice}/month) has started! You can now enjoy member discounts on this order.`);
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <CartWrapper>
        <Container>
          <EmptyCart>
            <ShoppingBagIcon className="icon" />
            <h2>Your cart is empty</h2>
            <p>Add some products to get started</p>
            <Button as={Link} to="/products" variant="primary">
              Shop Now
            </Button>
          </EmptyCart>
        </Container>
      </CartWrapper>
    );
  }

  return (
    <CartWrapper>
      <Container>
        <Title style={{ color: '#1f2937', marginBottom: '40px', fontSize: '2.5rem', fontWeight: '700' }}>Shopping Cart</Title>
        
        <CartContent>
          <CartItems>
            {state.items.map(item => (
              <CartItem key={item.id}>
                <ItemImage>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = item.name.substring(0, 10);
                    }}
                  />
                </ItemImage>
                
                <ItemInfo>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </ItemInfo>
                
                <QuantityControls>
                  <QuantityButton 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <MinusIcon size={14} />
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <PlusIcon size={14} />
                  </QuantityButton>
                </QuantityControls>
                
                <ItemPrice>
                  {formatPrice(item.price * item.quantity)}
                </ItemPrice>
                
                <RemoveButton onClick={() => removeItem(item.id)}>
                  <TrashIcon />
                </RemoveButton>
              </CartItem>
            ))}
          </CartItems>
          
          <CartSummary>
            <SummaryTitle>Cart Summary</SummaryTitle>
            
            <SummaryRow>
              <span>Subtotal:</span>
              <span>{formatPrice(subtotal)}</span>
            </SummaryRow>

            {isAuthenticated && user?.isVipMember && (
              <DiscountApplied>
                <SummaryRow style={{ color: '#10b981' }}>
                  <span>Member discount:</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </SummaryRow>
                <div style={{ fontSize: '0.8rem', color: '#6b7280', fontStyle: 'italic' }}>
                  🎉 {user.membershipPlan} discount applied!
                </div>
              </DiscountApplied>
            )}

            {(!isAuthenticated || !user?.isVipMember) && (
              <MembershipOffer>
                <div style={{ marginBottom: '15px' }}>
                  <MembershipCheckbox>
                    <input 
                      type="checkbox" 
                      id="subscribe"
                      checked={isSubscribeChecked}
                      onChange={(e) => {
                        setIsSubscribeChecked(e.target.checked);
                        if (e.target.checked) {
                          setShowMembershipModal(true);
                        }
                      }}
                    />
                    <label htmlFor="subscribe">
                      <strong>Subscribe & Save with VIP Membership</strong>
                    </label>
                  </MembershipCheckbox>
                  <TrialInfo>
                    🎯 Start your 3-day FREE trial! After the trial, continue with Starter Membership for just {formatPrice(19.99)}/month. Get 8% discount on all orders and priority support. Cancel anytime during the trial period with no charges.
                  </TrialInfo>
                </div>
                
                <VipBenefits>
                  <h4>VIP Member Benefits:</h4>
                  <VipBenefit>✨ Up to 20% discount on all orders</VipBenefit>
                  <VipBenefit>🚚 Free shipping worldwide</VipBenefit>
                  <VipBenefit>⚡ Priority customer support</VipBenefit>
                  <VipBenefit>🎁 Early access to new products</VipBenefit>
                  <VipBenefit>💳 Earn shopping credits</VipBenefit>
                </VipBenefits>
              </MembershipOffer>
            )}
            
            <SummaryRow>
              <span>Shipping:</span>
              <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
            </SummaryRow>
            
            <SummaryRow style={{ 
              borderTop: '2px solid #e5e7eb', 
              paddingTop: '15px', 
              fontSize: '1.2rem', 
              fontWeight: 'bold' 
            }}>
              <span>Total:</span>
              <span>{formatPrice(total)}</span>
            </SummaryRow>

            <div style={{ marginTop: '15px', fontSize: '0.9rem', color: '#6b7280' }}>
              View VAT Details
            </div>
            
            <CheckoutButton as={Link} to="/checkout">
              🛒 SECURE CHECKOUT
            </CheckoutButton>

            <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.85rem', color: '#9ca3af' }}>
              Accept 4 payment methods
            </div>
          </CartSummary>
        </CartContent>

        <ContinueShoppingButton>
          <Link to="/products">Continue Shopping</Link>
        </ContinueShoppingButton>

        {showMembershipModal && (
          <MembershipModal>
            <ModalOverlay onClick={closeModal} />
            <ModalContent>
              <ModalHeader>
                <h2>CHANGE YOUR MEMBERSHIP</h2>
                <p>Choose the perfect plan for your needs</p>
                <ModalClose onClick={closeModal}>
                  ✕
                </ModalClose>
              </ModalHeader>
              
              <div style={{ padding: '0 4px' }}>
                {membershipPlans.map((plan) => (
                  <PlanOption 
                    key={plan.price}
                    selected={selectedPlan === plan.price}
                    onClick={() => setSelectedPlan(plan.price)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <PlanName>
                        {plan.name}
                        {plan.recommended && <RecommendedBadge>MOST POPULAR</RecommendedBadge>}
                      </PlanName>
                      <PlanPrice>{formatPrice(parseFloat(plan.price))} <span>every 14 days</span></PlanPrice>
                    </div>
                  </PlanOption>
                ))}
                
                <div style={{ 
                  margin: '24px 0', 
                  padding: '16px', 
                  background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
                  borderRadius: '12px',
                  border: '1px solid #bae6fd',
                  fontSize: '0.9rem',
                  color: '#0369a1',
                  lineHeight: 1.5
                }}>
                  <div style={{ fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    💡 <span>Trial Benefits</span>
                  </div>
                  <div>
                    • 3 days completely <strong>FREE</strong><br/>
                    • Cancel anytime during trial with no charges<br/>
                    • Instant access to member discounts<br/>
                    • Priority customer support
                  </div>
                </div>
                
                <div style={{ marginTop: '30px', textAlign: 'center' }}>
                  <Button
                    onClick={() => {
                      const selectedPlanData = membershipPlans.find(p => p.price === selectedPlan);
                      if (selectedPlanData) {
                        handleStartTrial(selectedPlan, selectedPlanData.name);
                      }
                    }}
                    disabled={isSubscribing}
                    style={{
                      background: isSubscribing 
                        ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)' 
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '16px 40px',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      cursor: isSubscribing ? 'not-allowed' : 'pointer',
                      opacity: 1,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: isSubscribing 
                        ? 'none' 
                        : '0 8px 24px rgba(102, 126, 234, 0.4)',
                      transform: isSubscribing ? 'scale(0.98)' : 'scale(1)',
                      width: '100%',
                      maxWidth: '320px',
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase' as const
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubscribing) {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = 'scale(1.05) translateY(-2px)';
                        target.style.boxShadow = '0 12px 32px rgba(102, 126, 234, 0.6)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubscribing) {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = 'scale(1)';
                        target.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.4)';
                      }
                    }}
                  >
                    {isSubscribing ? '🔄 Starting Trial...' : '🚀 Start 3-Day Free Trial'}
                  </Button>
                </div>
              </div>
            </ModalContent>
          </MembershipModal>
        )}
      </Container>
    </CartWrapper>
  );
};

export default Cart;
