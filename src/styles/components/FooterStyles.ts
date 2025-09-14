import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #000;
  color: #fff;
  padding: 60px 0 20px;
  
  @media (max-width: 768px) {
    padding: 40px 0 15px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 0 10px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 25px;
  }
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #fff;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 10px;
      
      a {
        color: #ccc;
        transition: color 0.3s ease;
        
        &:hover {
          color: #667eea;
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
      margin-bottom: 15px;
    }
    
    ul li {
      margin-bottom: 8px;
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 480px) {
    text-align: center;
    
    h3 {
      font-size: 1rem;
      margin-bottom: 12px;
    }
    
    ul li {
      margin-bottom: 6px;
      font-size: 0.9rem;
    }
  }
`;

export const SocialSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #fff;
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
      margin-bottom: 15px;
    }
  }
  
  @media (max-width: 480px) {
    text-align: center;
    
    h3 {
      font-size: 1rem;
      margin-bottom: 12px;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  a {
    color: #ccc;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #667eea;
    }
  }
  
  @media (max-width: 768px) {
    gap: 12px;
    
    a {
      font-size: 1.4rem;
    }
  }
  
  @media (max-width: 480px) {
    justify-content: center;
    gap: 10px;
    
    a {
      font-size: 1.3rem;
    }
  }
`;

export const NewsletterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #fff;
  }
  
  p {
    color: #ccc;
    margin-bottom: 20px;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
      margin-bottom: 15px;
    }
    
    p {
      font-size: 0.95rem;
      margin-bottom: 15px;
    }
  }
  
  @media (max-width: 480px) {
    text-align: center;
    
    h3 {
      font-size: 1rem;
      margin-bottom: 12px;
    }
    
    p {
      font-size: 0.9rem;
      margin-bottom: 12px;
    }
  }
`;

export const NewsletterForm = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
  
  input {
    flex: 1;
    padding: 12px;
    border: 1px solid #333;
    background: #111;
    color: #fff;
    border-radius: 4px;
    
    @media (max-width: 768px) {
      padding: 10px;
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      padding: 12px;
      width: 100%;
    }
    
    &::placeholder {
      color: #666;
      
      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
    
    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }
  
  button {
    padding: 12px 24px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
    
    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      padding: 12px 24px;
      width: 100%;
      font-size: 1rem;
    }
    
    &:hover {
      background: #5a67d8;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 30px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding-top: 25px;
  }
  
  @media (max-width: 480px) {
    padding-top: 20px;
  }
`;

export const Copyright = styled.p`
  color: #888;
  font-size: 0.95rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 12px;
  }
  
  a {
    color: #666;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
    
    &:hover {
      color: #667eea;
    }
  }
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #fff;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 15px;
      text-align: center;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 12px;
    }
  }
  
  p {
    color: #ccc;
    margin-bottom: 10px;
    font-size: 0.9rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      text-align: center;
      font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
      margin-bottom: 8px;
    }
  }
  
  a {
    color: #667eea;
    transition: color 0.3s ease;
    
    &:hover {
      color: #5a67d8;
    }
  }
`;