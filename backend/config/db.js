import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB connected ✅: ${conn.connection.host}`.black.bgGreen)
  } catch (err) {
    console.log(`Error: ${err.message}`.black.bgRed)
    process.exit(1)
  }
}

export default connectDB
