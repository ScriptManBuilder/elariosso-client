import styled from 'styled-components';

export const ProductWrapper = styled.div`
  padding-top: 120px;
  min-height: calc(100vh - 120px);
  padding-bottom: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: #333;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 30px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 10px;
    gap: 20px;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  z-index: 1;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
    border-radius: 12px;
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 5px 0;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #667eea;
    border-radius: 2px;
  }
`;

export const ThumbnailImage = styled.img<{ isSelected: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.isSelected ? '#667eea' : 'transparent'};
  opacity: ${props => props.isSelected ? 1 : 0.7};
  
  &:hover {
    opacity: 1;
    border-color: #667eea;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }
`;

export const InfoSection = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

export const ProductDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 1rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 15px;
  }
`;

export const FeatureItem = styled.li`
  color: #555;
  padding: 10px 16px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  font-size: 0.9rem;
  position: relative;
  
  &::before {
    content: '✓';
    color: #667eea;
    font-weight: bold;
    margin-right: 8px;
  }
  
  @media (max-width: 768px) {
    padding: 8px 14px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
    border-radius: 6px;
  }
`;

export const CategoryBadge = styled.span`
  background: #667eea;
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    padding: 5px 12px;
    font-size: 0.75rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 0.7rem;
    margin-bottom: 10px;
    border-radius: 15px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
  }
`;

export const SpecificationsSection = styled.div`
  margin: 24px 0;
  
  @media (max-width: 768px) {
    margin: 20px 0;
  }
  
  @media (max-width: 480px) {
    margin: 16px 0;
  }
`;

export const SpecificationsTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

export const SpecificationsList = styled.div`
  display: grid;
  gap: 12px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const SpecificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    padding: 10px 14px;
  }
  
  @media (max-width: 480px) {
    padding: 8px 12px;
    border-radius: 6px;
    flex-direction: column;
    gap: 4px;
  }
`;

export const SpecLabel = styled.span`
  font-weight: 600;
  color: #495057;
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const SpecValue = styled.span`
  color: #667eea;
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    font-weight: 400;
  }
`;

export const DetailedDescription = styled.div`
  margin: 20px 0;
  
  h4 {
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 12px;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 10px;
    }
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
      margin-bottom: 8px;
    }
  }
  
  p {
    color: #666;
    line-height: 1.6;
    font-size: 0.95rem;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    @media (max-width: 480px) {
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding: 16px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
    padding: 12px;
    border-radius: 10px;
  }
`;

export const PageTitle = styled.h1`
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  text-shadow: none;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;