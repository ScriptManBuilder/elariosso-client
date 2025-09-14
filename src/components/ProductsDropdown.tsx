import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import {
  DropdownWrapper,
  DropdownContent,
  CategoriesSection,
  CategoryTitle,
  CategoryList,
  CategoryItem,
  FeaturedSection,
  FeaturedTitle,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ViewAllButton
} from '../styles/components/ProductsDropdownStyles';

interface ProductsDropdownProps {
  isVisible: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ 
  isVisible, 
  onClose, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  const { formatPrice } = usePrice();
  
  // Расширенные категории для лучшей навигации
  const categories = [
    { id: 'wireless', name: 'Wireless' },
    { id: 'studio', name: 'Studio' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'sport', name: 'Sport' },
    { id: 'wired', name: 'Wired' },
    // { id: 'speakers', name: 'Speakers' },
    // { id: 'accessories', name: 'Accessories' }
  ];
  
  // Показываем только 3 товара для компактности
  const featuredProducts = products.slice(0, 3);

  const handleLinkClick = () => {
    onClose();
  };

  if (!isVisible) return null;

  return (
    <DropdownWrapper
      data-dropdown="products"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <DropdownContent>
        <CategoriesSection>
          <CategoryTitle>Categories</CategoryTitle>
          <CategoryList>
            {categories.map((category) => (
              <CategoryItem 
                key={category.id}
                as={Link} 
                to={`/products?category=${category.id}`}
                onClick={handleLinkClick}
              >
                {category.name}
              </CategoryItem>
            ))}
            <CategoryItem 
              as={Link} 
              to="/products"
              onClick={handleLinkClick}
            >
              All Products
            </CategoryItem>
          </CategoryList>
        </CategoriesSection>

        <FeaturedSection>
          <FeaturedTitle>Featured Products</FeaturedTitle>
          <ProductGrid>
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                as={Link} 
                to={`/product/${product.id}`}
                onClick={handleLinkClick}
              >
                <ProductImage src={product.image} alt={product.name} />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
          
          <ViewAllButton 
            as={Link} 
            to="/products"
            onClick={handleLinkClick}
          >
            View All Products →
          </ViewAllButton>
        </FeaturedSection>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default ProductsDropdown;
