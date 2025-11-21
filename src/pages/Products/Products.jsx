import { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Cart from '../../components/Cart/Cart';
import './Products.css';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Datos de ejemplo para los pasteles
  const products = [
    {
      id: 1,
      name: 'Pastel de Chocolate',
      description: 'Delicioso pastel de chocolate con cobertura de ganache',
      price: 150,
      image: '/images/chocolate.jpg'
    },
    {
      id: 2,
      name: 'Pastel de Fresa',
      description: 'Suave pastel de vainilla con fresas frescas y crema',
      price: 130,
      image: '/images/fresa.jpeg'
    },
    {
      id: 3,
      name: 'Pastel de Zanahoria',
      description: 'Húmedo pastel de zanahoria con nueces y frosting de queso crema',
      price: 80,
      image: '/images/zanahaoria.jpg'
    },
    {
      id: 4,
      name: 'Red Velvet',
      description: 'Clásico pastel red velvet con frosting de queso crema',
      price: 200,
      image: '/images/red.jpg'
    },
    {
      id: 5,
      name: 'Tres Leches',
      description: 'Tradicional pastel tres leches con toque de canela',
      price: 160,
      image: '/images/leche.jpg'
    },
    {
      id: 6,
      name: 'Cheesecake de Frutos Rojos',
      description: 'Cremoso cheesecake con salsa de frutos rojos',
      price: 50,
      image: '/images/frutos.jpg'
    }
  ];

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Nuestros Pasteles</h1>
        <p>Descubre nuestra selección de pasteles artesanales</p>
        <button 
          className="cart-toggle"
          onClick={() => setIsCartOpen(true)}
        >
          🛒 Carrito ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </button>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default Products;