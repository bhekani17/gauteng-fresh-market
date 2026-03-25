import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, CheckCircle, CreditCard, Smartphone, Banknote, Check } from 'lucide-react';

const Checkout = ({ cart, cartTotal, clearCart }) => {
  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    notes: '',
    paymentMethod: 'cash',
    // Card payment fields
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    // EFT fields
    bankName: '',
    accountNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process order (in a real app, this would send to backend)
    // TODO: Integrate with ordersAPI.create() to submit order to backend
    
    // Show success message
    setOrderSuccess(true);
    
    // Clear cart and redirect after 3 seconds
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  const sendToWhatsApp = () => {
    // Create order message
    let message = `*New Order from Gauteng Fresh Market*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Address: ${formData.address}, ${formData.city}\n\n`;
    
    message += `*Order Items:*\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: R${item.price.toLocaleString()} ${item.unit}\n`;
      message += `   Subtotal: R${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    message += `*Total: R${cartTotal.toLocaleString()}*\n\n`;
    message += `*Payment Method:* ${formData.paymentMethod === 'cash' ? 'Cash on Delivery' : formData.paymentMethod === 'card' ? 'Card Payment' : 'EFT/Bank Transfer'}\n\n`;
    
    if (formData.notes) {
      message += `*Additional Notes:*\n${formData.notes}`;
    }

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '27123456789';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="gradient-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
            Checkout
          </h1>
          <p className="text-xl text-gray-100">
            Complete your order and choose your payment method
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Delivery Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+27 12 345 6789"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="123 Main Street"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Pretoria"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Payment Method *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Cash on Delivery */}
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, paymentMethod: 'cash'})}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.paymentMethod === 'cash'
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-300 hover:border-green-300'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Banknote className={`w-8 h-8 ${formData.paymentMethod === 'cash' ? 'text-green-500' : 'text-gray-400'}`} />
                        <span className="font-semibold text-sm">Cash on Delivery</span>
                      </div>
                    </button>

                    {/* Card Payment */}
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, paymentMethod: 'card'})}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.paymentMethod === 'card'
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-300 hover:border-green-300'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <CreditCard className={`w-8 h-8 ${formData.paymentMethod === 'card' ? 'text-green-500' : 'text-gray-400'}`} />
                        <span className="font-semibold text-sm">Card Payment</span>
                      </div>
                    </button>

                    {/* EFT/Bank Transfer */}
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, paymentMethod: 'eft'})}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.paymentMethod === 'eft'
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-300 hover:border-green-300'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Smartphone className={`w-8 h-8 ${formData.paymentMethod === 'eft' ? 'text-green-500' : 'text-gray-400'}`} />
                        <span className="font-semibold text-sm">EFT/Bank Transfer</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Card Payment Fields */}
                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Card Payment Details</h3>
                    
                    {/* Card Number */}
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        required={formData.paymentMethod === 'card'}
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                    </div>

                    {/* Card Name */}
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        required={formData.paymentMethod === 'card'}
                        value={formData.cardName}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Expiry Date */}
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          required={formData.paymentMethod === 'card'}
                          value={formData.expiryDate}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                      </div>

                      {/* CVV */}
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-semibold text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          required={formData.paymentMethod === 'card'}
                          value={formData.cvv}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="123"
                          maxLength="4"
                        />
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 text-sm text-gray-600 mt-4">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Your payment information is secure and encrypted.</p>
                    </div>
                  </div>
                )}

                {/* EFT Payment Fields */}
                {formData.paymentMethod === 'eft' && (
                  <div className="space-y-4 p-6 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Bank Transfer Details</h3>
                    
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Our Banking Details:</p>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p><strong>Bank:</strong> First National Bank</p>
                        <p><strong>Account Name:</strong> Gauteng Fresh Market</p>
                        <p><strong>Account Number:</strong> 62 1234 5678 90</p>
                        <p><strong>Branch Code:</strong> 250 655</p>
                        <p><strong>Reference:</strong> Use your phone number</p>
                      </div>
                    </div>

                    {/* Bank Name */}
                    <div>
                      <label htmlFor="bankName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Bank Name *
                      </label>
                      <input
                        type="text"
                        id="bankName"
                        name="bankName"
                        required={formData.paymentMethod === 'eft'}
                        value={formData.bankName}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g., Standard Bank"
                      />
                    </div>

                    {/* Account Number */}
                    <div>
                      <label htmlFor="accountNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Account Number (Last 4 digits) *
                      </label>
                      <input
                        type="text"
                        id="accountNumber"
                        name="accountNumber"
                        required={formData.paymentMethod === 'eft'}
                        value={formData.accountNumber}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="1234"
                        maxLength="4"
                      />
                    </div>

                    <div className="flex items-start space-x-2 text-sm text-gray-600 mt-4">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Please complete payment within 24 hours. Your order will be processed once payment is confirmed.</p>
                    </div>
                  </div>
                )}

                {/* Cash on Delivery Info */}
                {formData.paymentMethod === 'cash' && (
                  <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-start space-x-3">
                      <Banknote className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Cash on Delivery</h3>
                        <p className="text-sm text-gray-700">
                          Please have the exact amount of <strong>R{cartTotal.toLocaleString()}</strong> ready when our delivery team arrives. 
                          Our driver will confirm your order and collect payment upon delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    value={formData.notes}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Any special instructions for delivery..."
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
                    disabled={orderSuccess}
                  >
                    {orderSuccess ? (
                      <>
                        <Check className="w-6 h-6" />
                        <span>Order Placed Successfully!</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <span>Place Order</span>
                      </>
                    )}
                  </button>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={sendToWhatsApp}
                      className="flex-1 btn-outline text-lg py-4 flex items-center justify-center space-x-2"
                      disabled={orderSuccess}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Also Send via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/shop')}
                      className="flex-1 btn-outline text-lg py-4 flex items-center justify-center space-x-2"
                    >
                      <span>Continue Shopping</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        Qty: {item.quantity} × R{item.price.toLocaleString()}
                      </p>
                      <p className="text-sm font-semibold text-green-500 mt-1">
                        R{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">R{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-semibold text-green-500">FREE</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-xl font-heading font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-3xl font-bold text-green-500">
                    R{cartTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* WhatsApp Info */}
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">WhatsApp Checkout</p>
                    <p>Your order will be sent via WhatsApp for confirmation and payment details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
