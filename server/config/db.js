const mongoose = require("mongoose");



mongoose.set("strictQuery", false); // or false, if you prefer

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

   if (!cached.promise) {
     cached.promise = mongoose
       .connect(process.env.MONGODB_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       })
       .then((mongoose) => {
         console.log("✅ MongoDB connected");
         return mongoose;
       })
       .catch((err) => {
         console.error("❌ MongoDB connection error:", err);
         throw err;
       });
   }
  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectDB;
