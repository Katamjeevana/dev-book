const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get('MONGO_URI');

// Connection to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true, // ✅ correct
});

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;