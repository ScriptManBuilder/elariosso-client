import React, { memo } from 'react';
import styled from 'styled-components';
import { Product } from '../types/Product';
import { useLazyImage } from '../hooks/useVirtualScroll';
import { usePrice } from '../hooks/usePrice';

interface OptimizedProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (id: number) => void;
}

const CardContainer = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 450px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  border-radius: 8px;

  &:hover {
    transform: scale(1.02);
  }
`;

const LoadingPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 12px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const ErrorPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
  border-radius: 12px;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const ProductDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;

const AddToCartButton = styled.button`
  flex: 1;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ViewDetailsButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const OptimizedProductCard: React.FC<OptimizedProductCardProps> = memo(({
  product,
  onAddToCart,
  onViewDetails
}) => {
  const { formatPrice } = usePrice();
  const { ref: imgRef, src: imageSrc, isLoaded, isError } = useLazyImage(
    product.image,
    '/placeholder-image.jpg'
  );

  const handleAddToCart = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  }, [onAddToCart, product]);

  const handleViewDetails = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(product.id);
  }, [onViewDetails, product.id]);

  const handleCardClick = React.useCallback(() => {
    onViewDetails(product.id);
  }, [onViewDetails, product.id]);

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer>
        <div ref={imgRef}>
          {!isLoaded && !isError && <LoadingPlaceholder />}
          {isError && <ErrorPlaceholder>Image unavailable</ErrorPlaceholder>}
          {isLoaded && imageSrc && (
            <ProductImage 
              src={imageSrc} 
              alt={product.name}
              loading="lazy"
            />
          )}
        </div>
      </ImageContainer>
      
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        
        <ButtonGroup>
          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>
          <ViewDetailsButton onClick={handleViewDetails}>
            View Details
          </ViewDetailsButton>
        </ButtonGroup>
      </ProductInfo>
    </CardContainer>
  );
});

OptimizedProductCard.displayName = 'OptimizedProductCard';

export default OptimizedProductCard;