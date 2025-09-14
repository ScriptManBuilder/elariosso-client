import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Button } from '../styles/GlobalStyles';
import { useAuth } from '../contexts/AuthContext';
import { usePrice } from '../hooks/usePrice';

const AccountWrapper = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

  @media (max-width: 768px) {
    padding-top: 80px;
  }

  @media (max-width: 480px) {
    padding-top: 70px;
  }
`;

const AccountContent = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  padding: 40px 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 25px 0;
  }

  @media (max-width: 480px) {
    gap: 15px;
    padding: 20px 0;
  }
`;

const Sidebar = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  height: fit-content;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);

  @media (max-width: 968px) {
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 20px;
    order: -1; /* Показать сначала на мобильных */
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 10px;
    margin: 0 -5px; /* Немного расширить на очень маленьких экранах */
  }
`;

const NavItem = styled.div<{ active?: boolean }>`
  padding: 12px 16px;
  margin: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? '#667eea' : 'transparent'};
  color: ${props => props.active ? 'white' : '#4a5568'};
  font-weight: ${props => props.active ? '600' : '500'};
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  min-height: 44px; /* Touch-friendly size */

  &:hover {
    background: ${props => props.active ? '#667eea' : '#f7fafc'};
  }

  @media (max-width: 768px) {
    padding: 14px 18px;
    margin: 6px 0;
    font-size: 0.95rem;
    min-height: 48px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    margin: 4px 0;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`;

const MainContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);

  @media (max-width: 968px) {
    padding: 30px;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 10px;
    margin: 0 -5px; /* Немного расширить на очень маленьких экранах */
  }

  @media (max-width: 375px) {
    padding: 16px;
  }
`;

const SectionTitle = styled.h2`
  color: #2d3748;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 30px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 25px;
    padding-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }

  @media (max-width: 375px) {
    font-size: 1.3rem;
    margin-bottom: 18px;
  }
`;

const MembershipCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 30px;
  color: white;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  @media (max-width: 375px) {
    padding: 16px;
    margin-bottom: 18px;
  }
`;

const MembershipStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 18px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 16px;
  }
`;

const StatusBadge = styled.span<{ status: 'active' | 'trial' | 'expired' | 'none' }>`
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => {
    switch (props.status) {
      case 'active': return '#10b981';
      case 'trial': return '#f59e0b';
      case 'expired': return '#ef4444';
      default: return '#6b7280';
    }
  }};

  @media (max-width: 768px) {
    padding: 5px 14px;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 4px 12px;
    font-size: 0.8rem;
    letter-spacing: 0.3px;
  }
`;

const CreditsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 18px;
    border-radius: 10px;
    margin-top: 18px;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin-top: 16px;
    gap: 8px;
  }

  @media (max-width: 375px) {
    padding: 14px;
  }
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    gap: 14px;
    margin-top: 20px;
  }
`;

const PlanCard = styled.div<{ current?: boolean; recommended?: boolean }>`
  border: 2px solid ${props => props.current ? '#667eea' : props.recommended ? '#10b981' : '#e2e8f0'};
  border-radius: 16px;
  padding: 25px;
  position: relative;
  background: ${props => props.current ? '#f8faff' : 'white'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    padding: 18px;
    border-radius: 10px;

    &:hover {
      transform: none; /* Disable hover effects on mobile */
    }
  }

  @media (max-width: 375px) {
    padding: 16px;
  }
`;

const RecommendedBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 6px 20px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    padding: 4px 16px;
    font-size: 0.7rem;
    top: -10px;
  }
`;

const CurrentBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 480px) {
    padding: 4px 12px;
    font-size: 0.7rem;
    top: -10px;
    right: 16px;
  }
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 15px 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin: 12px 0;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 10px 0;
  }

  @media (max-width: 375px) {
    font-size: 1.8rem;
  }
`;

const PlanName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0 0 8px 0;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 0 0 6px 0;
  }
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;

  li {
    display: flex;
    align-items: center;
    margin: 10px 0;
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.5;

    &::before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      margin-right: 12px;
      font-size: 1.2rem;
      flex-shrink: 0;
    }
  }

  @media (max-width: 768px) {
    margin: 16px 0;

    li {
      margin: 8px 0;
      font-size: 0.9rem;

      &::before {
        margin-right: 10px;
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 480px) {
    margin: 14px 0;

    li {
      margin: 6px 0;
      font-size: 0.85rem;

      &::before {
        margin-right: 8px;
        font-size: 1rem;
      }
    }
  }
`;

const ChangeButton = styled(Button)<{ current?: boolean }>`
  width: 100%;
  margin-top: 15px;
  background: ${props => props.current ? '#6b7280' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  cursor: ${props => props.current ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.current ? 0.6 : 1};
  min-height: 44px;
  font-size: 1rem;

  &:hover {
    transform: ${props => props.current ? 'none' : 'translateY(-2px)'};
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    min-height: 48px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    min-height: 44px;
    font-size: 0.9rem;
    
    &:hover {
      transform: none; /* Disable hover effects on mobile */
    }
  }
`;

const Account: React.FC = () => {
  const { user, updateMembership, logout } = useAuth();
  const { formatPrice } = usePrice();
  const [activeTab, setActiveTab] = useState('membership');
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const membershipPlans = [
    {
      id: 'starter-mini',
      name: 'Starter Mini Membership',
      price: 9.99, // Цена в евро
      features: ['5% discount on all orders', 'Basic customer support', 'Monthly newsletter'],
      discount: 5
    },
    {
      id: 'starter',
      name: 'Starter Membership',
      price: 19.99, // Цена в евро
      features: ['8% discount on all orders', 'Priority support', 'Monthly newsletter', 'Free shipping on orders over €50'],
      discount: 8,
      recommended: true
    },
    {
      id: 'basic',
      name: 'Basic Membership',
      price: 29.99, // Цена в евро
      features: ['12% discount on all orders', 'Free shipping on all orders', 'Priority support', 'Early access to new products'],
      discount: 12
    },
    {
      id: 'prime',
      name: 'Prime Membership',
      price: 39.99, // Цена в евро
      features: ['15% discount on all orders', 'Free shipping worldwide', 'VIP support', 'Early access to new products', 'Exclusive member events'],
      discount: 15
    },
    {
      id: 'gold',
      name: 'Gold Membership',
      price: 49.99, // Цена в евро
      features: ['18% discount on all orders', 'Free shipping worldwide', 'VIP support', 'Early access to new products', 'Exclusive member events', 'Birthday bonus'],
      discount: 18
    },
    {
      id: 'vip',
      name: 'VIP Membership',
      price: 59.99, // Цена в евро
      features: ['20% discount on all orders', 'Free shipping worldwide', 'Premium VIP support', 'First access to new products', 'Exclusive member events', 'Birthday bonus', 'Personal shopping assistant'],
      discount: 20
    }
  ];

  const getMembershipStatus = () => {
    if (!user?.isVipMember) return 'none';
    if (user.trialEnd && new Date() < user.trialEnd) return 'trial';
    if (user.membershipExpiry && new Date() < user.membershipExpiry) return 'active';
    return 'expired';
  };

  const handleChangeMembership = async (planName: string, price: number) => {
    setLoadingPlan(planName);
    
    try {
      const confirmed = window.confirm(
        `Are you sure you want to change your membership to ${planName} for ${formatPrice(price)}/month? This change will take effect immediately.`
      );
      
      if (confirmed) {
        // Симуляция загрузки
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        updateMembership(planName, price.toString());
        alert(`🎉 Your membership has been updated to ${planName}! You can now enjoy new member benefits.`);
      }
    } catch (error) {
      alert('Failed to update membership. Please try again.');
    } finally {
      setLoadingPlan(null);
    }
  };

  const renderMembershipSection = () => (
    <div>
      <SectionTitle>MEMBERSHIP</SectionTitle>
      
      <MembershipCard>
        <MembershipStatus>
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>
              STATUS: {user?.isVipMember ? (user.membershipPlan?.toUpperCase() || 'VIP MEMBER') : 'NO MEMBERSHIP'}
            </h3>
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              BALANCE: {user?.credits || 0}.00 CREDITS
            </div>
          </div>
          <StatusBadge status={getMembershipStatus()}>
            {getMembershipStatus() === 'trial' ? 'FREE TRIAL' : 
             getMembershipStatus() === 'active' ? 'ACTIVE' :
             getMembershipStatus() === 'expired' ? 'EXPIRED' : 'NO MEMBERSHIP'}
          </StatusBadge>
        </MembershipStatus>

        <div style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
          <div><strong>MY CREDITS</strong></div>
          <div>Total credits: <strong>{user?.credits || 0}.00</strong></div>
          <div>You have <strong>{user?.credits || 0}.00</strong> credits</div>
        </div>

        {user?.isVipMember && (
          <CreditsInfo>
            <div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Current Plan</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                {user.membershipPlan} - {formatPrice(parseFloat(user.membershipPrice || '0'))}/month
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                {getMembershipStatus() === 'trial' ? 'Trial ends' : 'Renews'}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '600' }}>
                {getMembershipStatus() === 'trial' 
                  ? user.trialEnd?.toLocaleDateString()
                  : user.membershipExpiry?.toLocaleDateString()
                }
              </div>
            </div>
          </CreditsInfo>
        )}

        <div style={{ 
          fontSize: '0.85rem', 
          marginTop: '15px', 
          textDecoration: 'underline', 
          cursor: 'pointer',
          opacity: 0.9
        }}>
          Change membership
        </div>
      </MembershipCard>

      <PlanGrid>
        {membershipPlans.map((plan) => {
          const isCurrent = user?.membershipPlan === plan.name && parseFloat(user?.membershipPrice || '0') === plan.price;
          const isLoading = loadingPlan === plan.name;
          
          return (
            <PlanCard key={plan.id} current={isCurrent} recommended={plan.recommended}>
              {plan.recommended && <RecommendedBadge>MOST POPULAR</RecommendedBadge>}
              {isCurrent && <CurrentBadge>CURRENT</CurrentBadge>}
              
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>{formatPrice(plan.price)} <span style={{ fontSize: '1rem', color: '#6b7280' }}>/ every 14 days</span></PlanPrice>
              
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </PlanFeatures>

              <ChangeButton
                current={isCurrent}
                onClick={() => !isCurrent && !isLoading && handleChangeMembership(plan.name, plan.price)}
                disabled={isCurrent || isLoading}
              >
                {isLoading ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Processing...
                  </div>
                ) : isCurrent ? 'Current Plan' : 'Change subscription'}
              </ChangeButton>
            </PlanCard>
          );
        })}
      </PlanGrid>
    </div>
  );

  if (!user) {
    return (
      <AccountWrapper>
        <Container>
          <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h2>Please log in to access your account</h2>
          </div>
        </Container>
      </AccountWrapper>
    );
  }

  return (
    <AccountWrapper>
      <Container>
        <AccountContent>
          <Sidebar>
            <h3 style={{ color: '#2d3748', marginBottom: '20px' }}>Account Menu</h3>
            <NavItem active={activeTab === 'membership'} onClick={() => setActiveTab('membership')}>
              🏆 Membership
            </NavItem>
            <NavItem active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>
              👤 Profile
            </NavItem>
            <NavItem active={activeTab === 'orders'} onClick={() => setActiveTab('orders')}>
              📦 Orders
            </NavItem>
            <NavItem active={activeTab === 'billing'} onClick={() => setActiveTab('billing')}>
              💳 Billing
            </NavItem>
            <NavItem onClick={logout} style={{ color: '#ef4444', marginTop: '30px' }}>
              🚪 Logout
            </NavItem>
          </Sidebar>

          <MainContent>
            {activeTab === 'membership' && renderMembershipSection()}
            
            {activeTab === 'profile' && (
              <div>
                <SectionTitle>Profile Information</SectionTitle>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>First Name</label>
                    <input 
                      type="text" 
                      value={user.firstName} 
                      readOnly
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        border: '2px solid #e2e8f0', 
                        borderRadius: '8px',
                        background: '#f7fafc'
                      }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Last Name</label>
                    <input 
                      type="text" 
                      value={user.lastName} 
                      readOnly
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        border: '2px solid #e2e8f0', 
                        borderRadius: '8px',
                        background: '#f7fafc'
                      }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Email</label>
                    <input 
                      type="email" 
                      value={user.email} 
                      readOnly
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        border: '2px solid #e2e8f0', 
                        borderRadius: '8px',
                        background: '#f7fafc'
                      }} 
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <SectionTitle>Order History</SectionTitle>
                <p style={{ color: '#6b7280' }}>No orders found. Start shopping to see your order history here.</p>
              </div>
            )}

            {activeTab === 'billing' && (
              <div>
                <SectionTitle>Billing Information</SectionTitle>
                <p style={{ color: '#6b7280' }}>Billing information will be displayed here when you have an active subscription.</p>
              </div>
            )}
          </MainContent>
        </AccountContent>
      </Container>
    </AccountWrapper>
  );
};

export default Account;
