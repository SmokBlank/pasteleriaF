import { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Calcular total
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Cerrar carrito con ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevenir scroll cuando el carrito está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simular proceso de pago
    setTimeout(() => {
      setIsCheckingOut(false);
      onClearCart();
      onClose();
      alert('¡Pedido realizado con éxito! Te contactaremos pronto.');
    }, 2000);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={handleOverlayClick}>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Tu Carrito de Compras</h2>
          <button className="close-btn" onClick={onClose} aria-label="Cerrar carrito">
            ×
          </button>
        </div>
        
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h3>Tu carrito está vacío</h3>
              <p>Agrega algunos pasteles deliciosos a tu carrito</p>
              <button className="continue-shopping" onClick={onClose}>
                Seguir Comprando
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-price">Bs. {item.price}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Reducir cantidad"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <p className="item-total">Bs. {(item.price * item.quantity).toFixed(2)}</p>
                      <button 
                        className="remove-btn"
                        onClick={() => onRemoveItem(item.id)}
                        aria-label="Eliminar producto"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>Bs. {total.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Envío:</span>
                  <span>Bs. 15.00</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>Bs. {(total + 15).toFixed(2)}</span>
                </div>
              </div>

              <div className="cart-actions">
                <button 
                  className="checkout-btn"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <>
                      <div className="spinner"></div>
                      Procesando...
                    </>
                  ) : (
                    'Proceder al Pago'
                  )}
                </button>
                <button 
                  className="clear-cart-btn"
                  onClick={onClearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;