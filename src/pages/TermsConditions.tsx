import React from 'react';
import styled from 'styled-components';
import { usePrice } from '../hooks/usePrice';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  color: var(--minimal-gray-900);
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: var(--minimal-gray-900);
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--minimal-gray-900);
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const TermsConditions: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Terms & Conditions</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Paragraph>
          By accessing and using the ELARIOSSO DIGITAL LIMITED website and services, you accept and agree to be bound by 
          the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Company Information</SectionTitle>
        <Paragraph>
          This website is operated by ELARIOSSO DIGITAL LIMITED (Company Registration: 16651785). 
          Our contact information:
        </Paragraph>
        <Paragraph>
          Email: <a href="mailto:s0a2irbn@anonaddy.com">support@elariosso-tech.com</a><br/>
          Phone: +44 7446 127033<br/>
          Address: 15 Station Road, New Barnet, Barnet, EN5 1NZ, United Kingdom
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. VIP Membership Terms</SectionTitle>
        <Paragraph>
          Our VIP Membership program offers multiple tiers with exclusive benefits including discounts on all products, 
          early access to new releases, priority customer support, and additional perks based on your membership level.
        </Paragraph>
        
        <Paragraph>
          <strong>Available Membership Plans:</strong>
        </Paragraph>
        
        <Paragraph>
          <strong>Starter Mini Membership:</strong> {formatPrice(9.99)} every 14 days<br/>
          • 5% discount on all orders<br/>
          • Basic customer support<br/>
          • Monthly newsletter
        </Paragraph>
        
        <Paragraph>
          <strong>Starter Membership (Most Popular):</strong> {formatPrice(19.99)} every 14 days<br/>
          • 8% discount on all orders<br/>
          • Priority support<br/>
          • Monthly newsletter<br/>
          • Free shipping on orders over {formatPrice(50)}
        </Paragraph>
        
        <Paragraph>
          <strong>Basic Membership:</strong> {formatPrice(29.99)} every 14 days<br/>
          • 12% discount on all orders<br/>
          • Free shipping on all orders<br/>
          • Priority support<br/>
          • Early access to new products
        </Paragraph>
        
        <Paragraph>
          <strong>Prime Membership:</strong> {formatPrice(39.99)} every 14 days<br/>
          • 15% discount on all orders<br/>
          • Free shipping worldwide<br/>
          • VIP support<br/>
          • Early access to new products<br/>
          • Exclusive member events
        </Paragraph>
        
        <Paragraph>
          <strong>Gold Membership:</strong> {formatPrice(49.99)} every 14 days<br/>
          • 18% discount on all orders<br/>
          • Free shipping worldwide<br/>
          • VIP support<br/>
          • Early access to new products<br/>
          • Exclusive member events<br/>
          • Birthday bonus
        </Paragraph>
        
        <Paragraph>
          <strong>VIP Membership:</strong> {formatPrice(59.99)} every 14 days<br/>
          • 20% discount on all orders<br/>
          • Free shipping worldwide<br/>
          • Premium VIP support<br/>
          • First access to new products<br/>
          • Exclusive member events<br/>
          • Birthday bonus<br/>
          • Personal shopping assistant
        </Paragraph>
        
        <Paragraph>
          <strong>Trial Period:</strong> New members receive a 3-day free trial for any membership plan. You may cancel anytime during 
          the trial period without charge. After the trial, your membership will automatically renew every 14 days 
          at the selected plan rate unless cancelled.
        </Paragraph>
        <Paragraph>
          <strong>Cancellation:</strong> You may cancel your membership at any time through your account settings 
          or by contacting <a href="mailto:s0a2irbn@anonaddy.com">support@elariosso-tech.com</a>. Cancellation takes effect at the end of your current billing cycle.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Product Pricing</SectionTitle>
        <Paragraph>
          Our products are available at various price points: {formatPrice(2.99)}, {formatPrice(6.99)}, {formatPrice(9.99)}, {formatPrice(19.99)}, {formatPrice(29.99)}, and {formatPrice(39.99)}. 
          All prices include applicable taxes. VIP members receive a 15% discount on all purchases.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Payment and Billing</SectionTitle>
        <Paragraph>
          We accept major credit and debit cards. Your payment information is processed securely through our payment processors.
        </Paragraph>
        <Paragraph>
          <strong>Billing Descriptor:</strong> Charges will appear on your credit card statement as "ELARIOSSO". 
          This is how the charge will appear on your cardholder's billing statement.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Shipping and Delivery</SectionTitle>
        <Paragraph>
          We aim to dispatch orders within 1-2 business days. Delivery times may vary 
          based on location and shipping method selected. Free shipping is available on orders over {formatPrice(50)} and for all VIP members.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Returns and Refunds</SectionTitle>
        <Paragraph>
          Returns are accepted within 30 days of delivery. Items must be in original 
          condition and packaging. Please refer to our Return Policy for detailed information.
        </Paragraph>
        <Paragraph>
          <strong>Return Address:</strong><br/>
          ELARIOSSO DIGITAL LIMITED<br/>
          Returns Department<br/>
          15 Station Road, New Barnet, Barnet<br/>
          EN5 1NZ, United Kingdom
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Limitation of Liability</SectionTitle>
        <Paragraph>
          ELARIOSSO DIGITAL LIMITED shall not be liable for any direct, indirect, incidental, 
          or consequential damages arising from the use of our products or services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Governing Law</SectionTitle>
        <Paragraph>
          These terms and conditions are governed by and construed in accordance with 
          the laws of England and Wales.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Contact Information</SectionTitle>
        <Paragraph>
          For questions about these Terms & Conditions, please contact us at:
        </Paragraph>
        <Paragraph>
          <strong>ELARIOSSO DIGITAL LIMITED</strong> (Company Registration: 16651785)<br />
          15 Station Road, New Barnet, Barnet, EN5 1NZ, United Kingdom<br />
          Phone: +44 7446 127033<br />
          Email: <a href="mailto:s0a2irbn@anonaddy.com">support@elariosso-tech.com</a>
        </Paragraph>
      </Section>
    </Container>
  );
};

export default TermsConditions;
