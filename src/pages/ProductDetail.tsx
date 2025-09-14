import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from '../styles/GlobalStyles';
import { useCart } from '../contexts/CartContext';
import { products, Product } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import {
  ProductWrapper,
  ProductContainer,
  ImageSection,
  MainImage,
  ImageGallery,
  ThumbnailImage,
  InfoSection,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  DetailedDescription,
  FeaturesList,
  FeatureItem,
  SpecificationsSection,
  SpecificationsTitle,
  SpecificationsList,
  SpecificationItem,
  SpecLabel,
  SpecValue,
  ActionButtons,
  CategoryBadge,
  PageHeader,
  PageTitle
} from '../styles/pages/ProductDetailStyles';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const { formatPrice } = usePrice();
  const [selectedImage, setSelectedImage] = useState<string>('');

  const product = products.find((p: Product) => p.id === parseInt(id || '0'));

  useEffect(() => {
    if (!product) {
      navigate('/products');
    } else {
      setSelectedImage(product.image);
    }
  }, [product, navigate]);

  if (!product) {
    return (
      <ProductWrapper>
        <Container>
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h2>Product not found</h2>
            <p>Redirecting to products page...</p>
          </div>
        </Container>
      </ProductWrapper>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category
      }
    });
  };

  return (
    <ProductWrapper>
      <Container>
        <PageHeader>
          <PageTitle>Product Details</PageTitle>
        </PageHeader>
        
        <ProductContainer>
          <ImageSection>
            <MainImage src={selectedImage} alt={product.name} />
            <ImageGallery>
              {product.images.map((image, index) => (
                <ThumbnailImage
                  key={index}
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  isSelected={selectedImage === image}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </ImageGallery>
          </ImageSection>
          
          <InfoSection>
            <CategoryBadge>{product.category}</CategoryBadge>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{formatPrice(product.price)}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            
            <DetailedDescription>
              <h4>Product Details</h4>
              <p>{product.detailedDescription}</p>
            </DetailedDescription>
            
            <FeaturesList>
              {product.features.map((feature: string, index: number) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeaturesList>
            
            <SpecificationsSection>
              <SpecificationsTitle>Technical Specifications</SpecificationsTitle>
              <SpecificationsList>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <SpecificationItem key={key}>
                    <SpecLabel>{key}:</SpecLabel>
                    <SpecValue>{value}</SpecValue>
                  </SpecificationItem>
                ))}
              </SpecificationsList>
            </SpecificationsSection>
            
            <ActionButtons>
              <Button
                variant="primary"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                style={{ 
                  flex: 1,
                  opacity: product.inStock ? 1 : 0.6,
                  cursor: product.inStock ? 'pointer' : 'not-allowed'
                }}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => navigate('/products')}
                style={{ flex: 1 }}
              >
                Back to Products
              </Button>
            </ActionButtons>
          </InfoSection>
        </ProductContainer>
      </Container>
    </ProductWrapper>
  );
};

export default ProductDetail;