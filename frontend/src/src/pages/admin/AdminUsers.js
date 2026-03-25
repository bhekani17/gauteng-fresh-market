import React, { useState, useEffect } from 'react';
import { Search, UserPlus, Shield, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';

const AdminUsers = ({ setIsAdmin }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    // Load admin users from localStorage
    const users = JSON.parse(localStorage.getItem('adminUsers') || '[]');
    setAdminUsers(users);
  }, []);

  const handleDelete = (email) => {
    if (window.confirm('Are you sure you want to remove this admin user?')) {
      const updatedUsers = adminUsers.filter(user => user.email !== email);
      setAdminUsers(updatedUsers);
      localStorage.setItem('adminUsers', JSON.stringify(updatedUsers));
    }
  };

  const filteredUsers = adminUsers.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav setIsAdmin={setIsAdmin} />
      
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-gray-900">Admin Users</h1>
              <p className="text-gray-600 mt-1">Manage administrator accounts</p>
            </div>
            <Link to="/admin/signup" className="btn-primary flex items-center space-x-2">
              <UserPlus className="w-5 h-5" />
              <span>Add Admin</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Admins</p>
                <p className="text-2xl font-bold text-gray-900">{adminUsers.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Users Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {filteredUsers.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((user, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <Shield className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="font-semibold text-gray-900">{user.fullName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{user.email}</td>
                      <td className="px-6 py-4 text-gray-600">{user.phone}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(user.email)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Shield className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-900 mb-2">No admin users found</p>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? `No admins match "${searchTerm}"`
                  : 'Get started by adding your first admin user'}
              </p>
              <Link to="/admin/signup" className="btn-primary inline-flex items-center space-x-2">
                <UserPlus className="w-5 h-5" />
                <span>Add First Admin</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
