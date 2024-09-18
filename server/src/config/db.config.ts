import mongoose from 'mongoose'

export const connectDb = async () =>{
   try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING as string);
    console.log('Connected to database:', connect.connection.name)
    
   } catch (error) {
    console.log(error);
    process.exit(1)
   }
}