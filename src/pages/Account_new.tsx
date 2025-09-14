import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Button } from '../styles/GlobalStyles';

const AccountWrapper = styled.div`
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

const AccountContent = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 40px;
  padding: 40px 0;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Sidebar = styled.div`
  background: var(--minimal-gray-900);
  border-radius: 16px;
  padding: 30px;
  height: fit-content;
  border: 1px solid var(--minimal-gray-800);
`;

const NavItem = styled.div<{ active?: boolean }>`
  padding: 12px 16px;
  margin: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.active ? 'var(--minimal-accent)' : 'var(--minimal-gray-300)'};
  background: ${props => props.active ? 'rgba(0, 102, 255, 0.1)' : 'transparent'};
  
  &:hover {
    background: rgba(0, 102, 255, 0.1);
    color: var(--minimal-accent);
  }
`;

const MainContent = styled.div`
  background: var(--minimal-gray-900);
  border-radius: 16px;
  padding: 40px;
  border: 1px solid var(--minimal-gray-800);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--minimal-text);
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--minimal-gray-800);
`;

const MembershipCard = styled.div`
  background: linear-gradient(135deg, var(--minimal-gray-800) 0%, rgba(16, 185, 129, 0.1) 100%);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
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

const Account: React.FC = () => {
  const [activeSection, setActiveSection] = useState('membership');

  // Mock user data
  const user = {
    email: 'test@test.com',
    firstName: 'John',
    lastName: 'Doe',
    membership: {
      status: 'active',
      plan: '19.99',
      planName: 'Premium VIP',
      startDate: '2024-01-15',
      nextBilling: '2024-02-15',
      autoRenew: true
    }
  };

  const renderMembershipSection = () => (
    <>
      <SectionTitle>VIP Membership</SectionTitle>
      
      <MembershipCard>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ color: 'var(--minimal-text)', margin: 0 }}>
            {user.membership.planName} Membership
          </h3>
          <span style={{
            background: '#10b981',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginLeft: '15px'
          }}>
            ACTIVE
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '20px 0' }}>
          <div>
            <h4 style={{ color: 'var(--minimal-gray-400)', fontSize: '0.9rem', marginBottom: '5px' }}>Monthly Price</h4>
            <p style={{ color: 'var(--minimal-text)', fontWeight: 500 }}>£{user.membership.plan}/month</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--minimal-gray-400)', fontSize: '0.9rem', marginBottom: '5px' }}>Next Billing</h4>
            <p style={{ color: 'var(--minimal-text)', fontWeight: 500 }}>{new Date(user.membership.nextBilling).toLocaleDateString()}</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--minimal-gray-400)', fontSize: '0.9rem', marginBottom: '5px' }}>Auto Renewal</h4>
            <p style={{ color: 'var(--minimal-text)', fontWeight: 500 }}>{user.membership.autoRenew ? 'Enabled' : 'Disabled'}</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--minimal-gray-400)', fontSize: '0.9rem', marginBottom: '5px' }}>Member Since</h4>
            <p style={{ color: 'var(--minimal-text)', fontWeight: 500 }}>{new Date(user.membership.startDate).toLocaleDateString()}</p>
          </div>
        </div>

        <h4 style={{ color: 'var(--minimal-text)', marginBottom: '15px' }}>Your VIP Benefits:</h4>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: '20px 0', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '10px' 
        }}>
          {['15% discount on all products', 'Free shipping on all orders', 'Priority customer support', 'Early access to new products'].map((benefit, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', color: 'var(--minimal-gray-300)', fontSize: '0.9rem' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', marginRight: '10px', fontSize: '1.1rem' }}>✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '30px' }}>
          <Button
            variant="secondary"
            style={{ 
              borderColor: '#dc2626', 
              color: '#dc2626',
              backgroundColor: 'transparent',
              marginRight: '15px'
            }}
          >
            Cancel Membership
          </Button>
          <Button variant="primary">
            Change Plan
          </Button>
        </div>
      </MembershipCard>
    </>
  );

  return (
    <AccountWrapper>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700',
            background: 'linear-gradient(135deg, var(--minimal-text) 0%, #60a5fa 50%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '10px'
          }}>
            My Account
          </h1>
          <p style={{ color: 'var(--minimal-gray-400)', fontSize: '1.1rem' }}>
            Manage your profile and VIP membership
          </p>
        </div>

        <AccountContent>
          <Sidebar>
            <h3 style={{ color: 'var(--minimal-text)', marginBottom: '20px' }}>Account</h3>
            <NavItem 
              active={activeSection === 'membership'}
              onClick={() => setActiveSection('membership')}
            >
              VIP Membership
            </NavItem>
            <NavItem 
              active={activeSection === 'profile'}
              onClick={() => setActiveSection('profile')}
            >
              Profile
            </NavItem>
            <NavItem 
              active={activeSection === 'orders'}
              onClick={() => setActiveSection('orders')}
            >
              Orders
            </NavItem>
          </Sidebar>

          <MainContent>
            {activeSection === 'membership' && renderMembershipSection()}
            {activeSection === 'profile' && (
              <>
                <SectionTitle>Profile Information</SectionTitle>
                <p style={{ color: 'var(--minimal-gray-300)' }}>Profile management coming soon...</p>
              </>
            )}
            {activeSection === 'orders' && (
              <>
                <SectionTitle>Order History</SectionTitle>
                <p style={{ color: 'var(--minimal-gray-300)' }}>Order history coming soon...</p>
              </>
            )}
          </MainContent>
        </AccountContent>
      </Container>
    </AccountWrapper>
  );
};

export default Account;
