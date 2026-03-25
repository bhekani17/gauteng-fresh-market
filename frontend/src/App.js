import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import About from './pages/About';
import Impact from './pages/Impact';
// Admin imports
import AdminLogin from './pages/admin/Login';
import AdminSignup from './pages/admin/Signup';
import AdminDashboard from './pages/admin/Dashboard';
import AdminOrders from './pages/admin/Orders';
import AdminProducts from './pages/admin/Products';
import AdminCustomers from './pages/admin/Customers';
import AdminSettings from './pages/admin/Settings';
import AdminUsers from './pages/admin/AdminUsers';

// Keyboard shortcut component that must be inside Router
function KeyboardShortcut() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if Ctrl+Shift+A is pressed
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        navigate('/admin/login');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return null;
}

function AppContent() {
  const [cart, setCart] = useState([]);
  const { isAuthenticated } = useAuth();

  // Add item to cart
  const addToCart = (product) => {
    const productId = product._id || product.id;
    const existingItem = cart.find(item => (item._id || item.id) === productId);
    
    if (existingItem) {
      setCart(cart.map(item =>
        (item._id || item.id) === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => (item._id || item.id) !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        (item._id || item.id) === productId ? { ...item, quantity } : item
      ));
    }
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
  };

  return (
    <Router>
      <KeyboardShortcut />
      <Routes>
        {/* Admin Routes (No Navbar/Footer) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/orders" 
          element={
            <ProtectedRoute>
              <AdminOrders />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/products" 
          element={
            <ProtectedRoute>
              <AdminProducts />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/customers" 
          element={
            <ProtectedRoute>
              <AdminCustomers />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/settings" 
          element={
            <ProtectedRoute>
              <AdminSettings />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/users" 
          element={
            <ProtectedRoute>
              <AdminUsers />
            </ProtectedRoute>
          } 
        />

        {/* Public Routes (With Navbar/Footer) */}
        <Route path="/*" element={
          <div className="flex flex-col min-h-screen">
            <Navbar cartCount={cartCount} />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home addToCart={addToCart} />} />
                <Route path="/shop" element={<Shop addToCart={addToCart} />} />
                <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
                <Route 
                  path="/cart" 
                  element={
                    <Cart 
                      cart={cart} 
                      updateQuantity={updateQuantity} 
                      removeFromCart={removeFromCart}
                      cartTotal={cartTotal}
                    />
                  } 
                />
                <Route 
                  path="/checkout" 
                  element={
                    <Checkout 
                      cart={cart} 
                      cartTotal={cartTotal}
                      clearCart={clearCart}
                    />
                  } 
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/impact" element={<Impact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
