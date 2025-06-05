const mongoose = require('mongoose');
const conncetDB =async () =>{
  try{
    await mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.error('MongoDB connection error:', err));

  }catch(err){
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
}
module.exports = conncetDB;