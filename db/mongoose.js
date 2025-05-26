const mongoose = require('mongoose');

const conncetDB =async () =>{
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.error('MongoDB connection error:', err));

  }catch(err){
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
}
module.exports = conncetDB;