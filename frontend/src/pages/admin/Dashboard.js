import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, Users, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import AdminNav from '../../components/AdminNav';

const Dashboard = ({ setIsAdmin }) => {
  // Mock data - in real app, fetch from backend
  const stats = {
    totalOrders: 156,
    pendingOrders: 12,
    totalRevenue: 45680,
    totalProducts: 48,
    totalCustomers: 342,
    lowStockItems: 5
  };

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', total: 450, status: 'pending', date: '2024-10-16' },
    { id: 'ORD-002', customer: 'Jane Smith', total: 320, status: 'completed', date: '2024-10-16' },
    { id: 'ORD-003', customer: 'Mike Johnson', total: 680, status: 'processing', date: '2024-10-15' },
    { id: 'ORD-004', customer: 'Sarah Williams', total: 290, status: 'completed', date: '2024-10-15' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav setIsAdmin={setIsAdmin} />
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-heading font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Orders */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalOrders}</p>
                <p className="text-sm text-green-500 mt-2">
                  <TrendingUp className="w-4 h-4 inline" /> +12% from last month
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Pending Orders */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending Orders</p>
                <p className="text-3xl font-bold text-gray-900">{stats.pendingOrders}</p>
                <Link to="/admin/orders" className="text-sm text-orange-500 mt-2 inline-block hover:underline">
                  View all →
                </Link>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <AlertCircle className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">R{stats.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-green-500 mt-2">
                  <TrendingUp className="w-4 h-4 inline" /> +8% from last month
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          {/* Total Products */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Products</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalProducts}</p>
                <p className="text-sm text-red-500 mt-2">
                  {stats.lowStockItems} low stock items
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-heading font-bold text-gray-900">Recent Orders</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">R{order.total}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'completed' ? 'bg-green-100 text-green-700' :
                        order.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/admin/orders" className="block text-center mt-6 text-green-500 hover:text-green-600 font-semibold">
                View All Orders →
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-heading font-bold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/admin/products" className="p-6 bg-green-50 rounded-lg border-2 border-green-200 hover:bg-green-100 transition-colors text-center">
                  <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Manage Products</p>
                </Link>
                <Link to="/admin/orders" className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200 hover:bg-blue-100 transition-colors text-center">
                  <ShoppingCart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">View Orders</p>
                </Link>
                <Link to="/admin/customers" className="p-6 bg-purple-50 rounded-lg border-2 border-purple-200 hover:bg-purple-100 transition-colors text-center">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Customers</p>
                </Link>
                <Link to="/admin/settings" className="p-6 bg-orange-50 rounded-lg border-2 border-orange-200 hover:bg-orange-100 transition-colors text-center">
                  <AlertCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Settings</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
