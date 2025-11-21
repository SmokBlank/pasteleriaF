import { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name}
          className={isHovered ? 'image-zoomed' : ''}
        />
        <div className="product-overlay">
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">Bs. {product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;