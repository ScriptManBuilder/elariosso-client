import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../styles/GlobalStyles';
import { products } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import { RocketIcon, LightningIcon, ShieldIcon, GlobeIcon, TargetIcon, DiamondIcon } from '../components/FeatureIcons';
import {
  HeroSection,
  HeroVideo,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  FeaturesSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  ProductsSection,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductButton,
  ScrollReveal,
  ParallaxElement
} from '../styles/pages/HomeStyles';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);
  const { formatPrice } = usePrice();
  const scrollRevealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Intersection Observer для scroll reveal эффектов
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Наблюдаем за всеми элементами с scroll reveal
    scrollRevealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Parallax эффект при скролле
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      parallaxRefs.current.forEach((ref, index) => {
        if (ref) {
          const speed = (index + 1) * 0.1;
          const yPos = -(scrollY * speed);
          ref.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setScrollRevealRef = (index: number) => (el: HTMLDivElement | null) => {
    scrollRevealRefs.current[index] = el;
  };

  const setParallaxRef = (index: number) => (el: HTMLDivElement | null) => {
    parallaxRefs.current[index] = el;
  };

  return (
    <>
      <HeroSection>
        <HeroVideo 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src="/videos/headhopnes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
        <Container>
          <HeroContent>
            <HeroTitle>ELARIOSSO DIGITAL</HeroTitle>
            <HeroSubtitle>
              Transforming Digital Experiences with Premium Technology Solutions
            </HeroSubtitle>
            <HeroButtons>
              <Button as={Link} to="/products" variant="primary">
                Explore Solutions
              </Button>
              <Button as={Link} to="/about" variant="outline">
                Our Story
              </Button>
            </HeroButtons>
          </HeroContent>
        </Container>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <ScrollReveal ref={setScrollRevealRef(0)}>
            <SectionHeader>
              <SectionTitle>Why Choose Elariosso Digital?</SectionTitle>
              <SectionSubtitle>Discover the innovation that makes our technology exceptional</SectionSubtitle>
            </SectionHeader>
          </ScrollReveal>
          
          <FeaturesGrid>
            <ScrollReveal ref={setScrollRevealRef(1)} delay={100}>
              <FeatureCard>
                <RocketIcon />
                <FeatureTitle>Cutting-Edge Technology</FeatureTitle>
                <FeatureDescription>
                  Next-generation solutions powered by advanced algorithms and innovative design.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(2)} delay={200}>
              <FeatureCard>
                <LightningIcon />
                <FeatureTitle>Lightning Fast Performance</FeatureTitle>
                <FeatureDescription>
                  Optimized for speed and efficiency across all platforms and devices.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(3)} delay={300}>
              <FeatureCard>
                <ShieldIcon />
                <FeatureTitle>Enterprise Security</FeatureTitle>
                <FeatureDescription>
                  Bank-level security with state-of-the-art encryption technology.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(4)} delay={400}>
              <FeatureCard>
                <GlobeIcon />
                <FeatureTitle>Global Connectivity</FeatureTitle>
                <FeatureDescription>
                  Seamless integration with worldwide accessibility and support.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(5)} delay={500}>
              <FeatureCard>
                <TargetIcon />
                <FeatureTitle>Precision Analytics</FeatureTitle>
                <FeatureDescription>
                  AI-powered insights for intelligent business decisions.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(6)} delay={600}>
              <FeatureCard>
                <DiamondIcon />
                <FeatureTitle>Premium Quality</FeatureTitle>
                <FeatureDescription>
                  Highest standards of quality and reliability in every solution.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <ProductsSection>
        <Container>
          <ScrollReveal ref={setScrollRevealRef(7)}>
            <SectionHeader>
              <SectionTitle style={{ color: 'white' }}>Featured Solutions</SectionTitle>
              <SectionSubtitle style={{ color: 'rgba(255,255,255,0.9)' }}>Discover our most innovative digital products</SectionSubtitle>
            </SectionHeader>
          </ScrollReveal>
          
          <ProductsGrid>
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} ref={setScrollRevealRef(8 + index)} delay={index * 100}>
                <ProductCard>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductInfo>
                    <ProductContent>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                      <ProductDescription>{product.description}</ProductDescription>
                    </ProductContent>
                    <ProductButton as={Link} to={`/product/${product.id}`}>
                      Explore Details
                    </ProductButton>
                  </ProductInfo>
                </ProductCard>
              </ScrollReveal>
            ))}
          </ProductsGrid>
          
          <ScrollReveal ref={setScrollRevealRef(14)}>
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <Button as={Link} to="/products" variant="outline" style={{ 
                color: 'white', 
                borderColor: 'white',
                fontSize: '1.2rem',
                padding: '20px 50px'
              }}>
                View All Solutions
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </ProductsSection>
    </>
  );
};

export default Home;
