import React, { useState, useEffect } from 'react';
import { MailIcon, PhoneIcon, ClockIcon } from '../components/Icons';
import {
  SupportWrapper,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  SupportContent,
  ContactSection,
  SectionTitle,
  ContactMethodsGrid,
  ContactCard,
  ContactIcon,
  ContactContent,
  ContactTitle,
  ContactInfo,
  ContactLink,
  VIPSection,
  VIPCard,
  VIPTitle,
  VIPDescription,
  FAQSection,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  Container
} from '../styles/pages/SupportStyles';

const Support: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the UK. Express shipping is available for next-day delivery. International shipping times vary by location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all products. Items must be in original condition with packaging. Please contact our support team to initiate a return."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also check your order status by logging into your account on our website."
    },
    {
      question: "Do you offer warranty on your products?",
      answer: "Yes, all our products come with manufacturer warranty. Premium products include extended warranty options. VIP members receive additional warranty benefits."
    },
    {
      question: "How can I cancel my VIP membership?",
      answer: "You can cancel your VIP membership anytime through your account settings or by contacting our support team. Cancellation takes effect at the end of your current billing cycle."
    }
  ];

  return (
    <SupportWrapper>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Customer Support</HeroTitle>
            <HeroSubtitle>
              We're here to help you 24/7. Get expert assistance from our dedicated support team.
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <Container>
        <SupportContent>
          <ContactSection>
            <SectionTitle>Get in Touch</SectionTitle>
            <ContactMethodsGrid>
              <ContactCard>
                <ContactIcon>
                  <MailIcon size={isMobile ? 24 : 32} />
                </ContactIcon>
                <ContactContent>
                  <ContactTitle>Email Support</ContactTitle>
                  <ContactInfo>Average response time: 2-4 hours</ContactInfo>
                  <ContactLink href="mailto:s0a2irbn@anonaddy.com">
                    support@elariosso-tech.com
                  </ContactLink>
                </ContactContent>
              </ContactCard>
              
              <ContactCard>
                <ContactIcon>
                  <PhoneIcon size={isMobile ? 24 : 32} />
                </ContactIcon>
                <ContactContent>
                  <ContactTitle>Phone Support</ContactTitle>
                  <ContactInfo>Monday - Friday, 9 AM - 6 PM GMT</ContactInfo>
                  <ContactLink href="tel:+447446127033">
                    +44 7446 127033
                  </ContactLink>
                </ContactContent>
              </ContactCard>
              
              <ContactCard>
                <ContactIcon>
                  <ClockIcon size={isMobile ? 24 : 32} />
                </ContactIcon>
                <ContactContent>
                  <ContactTitle>Business Hours</ContactTitle>
                  <ContactInfo>Monday - Friday: 9:00 AM - 6:00 PM GMT</ContactInfo>
                  <ContactInfo style={{ marginTop: '5px' }}>Weekend: Emergency support only</ContactInfo>
                </ContactContent>
              </ContactCard>
            </ContactMethodsGrid>
            
            <VIPSection>
              <VIPCard>
                <VIPTitle>VIP Support</VIPTitle>
                <VIPDescription>
                  VIP members get priority support with 1-hour response time, dedicated phone line, 
                  and access to premium support features.
                </VIPDescription>
              </VIPCard>
            </VIPSection>
          </ContactSection>
          
          
          <FAQSection>
            <SectionTitle style={{ textAlign: 'center' }}>
              Frequently Asked Questions
            </SectionTitle>
            
            {faqData.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion
                  type="button"
                  className={activeFAQ === index ? 'active' : ''}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </FAQQuestion>
                <FAQAnswer className={activeFAQ === index ? 'active' : ''}>
                  <p>{faq.answer}</p>
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQSection>
        </SupportContent>
      </Container>
    </SupportWrapper>
  );
};

export default Support;
