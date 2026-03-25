const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const Admin = require('./models/Admin');

dotenv.config();

const testConnection = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected Successfully\n');

    // Test Products
    const productCount = await Product.countDocuments();
    console.log(`📦 Products in database: ${productCount}`);
    
    if (productCount > 0) {
      const sampleProduct = await Product.findOne();
      console.log(`   Sample product: ${sampleProduct.name} - R${sampleProduct.price}`);
    }

    // Test Admins
    const adminCount = await Admin.countDocuments();
    console.log(`\n👤 Admins in database: ${adminCount}`);
    
    if (adminCount > 0) {
      const sampleAdmin = await Admin.findOne();
      console.log(`   Sample admin: ${sampleAdmin.fullName} (${sampleAdmin.email})`);
    }

    console.log('\n✅ Database is working correctly!');
    console.log('🌐 Your website will fetch data from MongoDB\n');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1);
  }
};

testConnection();
