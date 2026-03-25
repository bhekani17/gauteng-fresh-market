import React, { useState } from 'react';
import { Save, Bell, Globe, Lock, CreditCard } from 'lucide-react';
import AdminNav from '../../components/AdminNav';

const Settings = ({ setIsAdmin }) => {
  const [settings, setSettings] = useState({
    // General Settings
    siteName: 'Gauteng Fresh Market',
    siteEmail: 'info@gautengfreshmarket.co.za',
    sitePhone: '+27 12 345 6789',
    siteAddress: '123 Farm Road, Pretoria, Gauteng',
    
    // Notifications
    emailNotifications: true,
    orderNotifications: true,
    lowStockAlerts: true,
    
    // Payment Settings
    acceptCash: true,
    acceptCard: true,
    acceptEFT: true,
    
    // Delivery Settings
    deliveryFee: 0,
    freeDeliveryThreshold: 500,
    deliveryRadius: 50
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: In production, save to backend via API
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav setIsAdmin={setIsAdmin} />
      
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-heading font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your store settings and preferences</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            Settings saved successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-heading font-bold text-gray-900">General Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="siteEmail"
                  value={settings.siteEmail}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  name="sitePhone"
                  value={settings.sitePhone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Address
                </label>
                <textarea
                  name="siteAddress"
                  value={settings.siteAddress}
                  onChange={handleChange}
                  className="input-field"
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Bell className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-heading font-bold text-gray-900">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-500 rounded focus:ring-green-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive email updates about orders and activities</p>
                </div>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="orderNotifications"
                  checked={settings.orderNotifications}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-500 rounded focus:ring-green-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">Order Notifications</p>
                  <p className="text-sm text-gray-600">Get notified when new orders are placed</p>
                </div>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="lowStockAlerts"
                  checked={settings.lowStockAlerts}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-500 rounded focus:ring-green-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">Low Stock Alerts</p>
                  <p className="text-sm text-gray-600">Receive alerts when products are running low</p>
                </div>
              </label>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2 mb-6">
              <CreditCard className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-heading font-bold text-gray-900">Payment Methods</h2>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="acceptCash"
                  checked={settings.acceptCash}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-500 rounded focus:ring-green-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">Cash on Delivery</p>
                  <p className="text-sm text-gray-600">Accept cash payments upon delivery</p>
                </div>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="acceptCard"
                  checked={settings.acceptCard}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-500 rounded focus:ring-green-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">Card Payments</p>
                  <p className="text-sm text-gray-600">Accept credit and debit card payments</p>
                </div>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="acceptEFT"
                  checked={settings.acceptEFT}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-500 rounded focus:ring-green-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">EFT/Bank Transfer</p>
                  <p className="text-sm text-gray-600">Accept electronic funds transfers</p>
                </div>
              </label>
            </div>
          </div>

          {/* Delivery Settings */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Lock className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-heading font-bold text-gray-900">Delivery Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Fee (R)
                </label>
                <input
                  type="number"
                  name="deliveryFee"
                  value={settings.deliveryFee}
                  onChange={handleChange}
                  className="input-field"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Free Delivery Threshold (R)
                </label>
                <input
                  type="number"
                  name="freeDeliveryThreshold"
                  value={settings.freeDeliveryThreshold}
                  onChange={handleChange}
                  className="input-field"
                />
                <p className="text-sm text-gray-600 mt-1">Orders above this amount get free delivery</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Radius (km)
                </label>
                <input
                  type="number"
                  name="deliveryRadius"
                  value={settings.deliveryRadius}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn-primary flex items-center space-x-2 px-8"
            >
              <Save className="w-5 h-5" />
              <span>Save Settings</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
