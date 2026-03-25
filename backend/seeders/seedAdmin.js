const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/Admin');

dotenv.config();

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@gautengfresh.com' });
    
    if (existingAdmin) {
      console.log('ℹ️  Admin user already exists');
      await mongoose.disconnect();
      process.exit(0);
    }

    // Create default admin
    const admin = new Admin({
      fullName: 'Admin User',
      email: 'admin@gautengfresh.com',
      phone: '+27 12 345 6789',
      password: 'admin123', // Will be hashed automatically
      role: 'superadmin'
    });

    await admin.save();
    console.log('✅ Default admin created successfully');
    console.log('📧 Email: admin@gautengfresh.com');
    console.log('🔑 Password: admin123');
    console.log('⚠️  IMPORTANT: Change this password after first login!');

    // Disconnect
    await mongoose.disconnect();
    console.log('👋 Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
    process.exit(1);
  }
};

// Run the seeder
seedAdmin();
