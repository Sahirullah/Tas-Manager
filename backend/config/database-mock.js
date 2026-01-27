// Mock Database Connection
// Use this when MongoDB is not available

const connectDB = async () => {
  try {
    console.log('Using Mock Database (In-Memory Storage)');
    console.log('⚠️  Note: Data will be lost when server restarts');
    console.log('✅ Mock Database Connected Successfully');
    return true;
  } catch (error) {
    console.error('Mock Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
