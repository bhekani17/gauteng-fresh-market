import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check admin status on mount
  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
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
    return isAdmin ? children : <Navigate to="/admin/login" replace />;
  };

  return (
    <Router>
      <Routes>
        {/* Admin Routes (No Navbar/Footer) */}
        <Route path="/admin/login" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard setIsAdmin={setIsAdmin} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/orders" 
          element={
            <ProtectedRoute>
              <AdminOrders setIsAdmin={setIsAdmin} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/products" 
          element={
            <ProtectedRoute>
              <AdminProducts setIsAdmin={setIsAdmin} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/customers" 
          element={
            <ProtectedRoute>
              <AdminCustomers setIsAdmin={setIsAdmin} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/settings" 
          element={
            <ProtectedRoute>
              <AdminSettings setIsAdmin={setIsAdmin} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/users" 
          element={
            <ProtectedRoute>
              <AdminUsers setIsAdmin={setIsAdmin} />
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

export default App;
