import mongoose from 'mongoose';

async function connectToDatabase() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, {
    useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true
  });
}

export default connectToDatabase;