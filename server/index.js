import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoute from './routes/User.route.js'
import messageRoute from './routes/Message.route.js'
import { app,server } from './SocketIO/server.js';



// const app = express()

dotenv.config()
const PORT = process.env.PORT || 5000
const URI = process.env.MONGO_URI

app.use(express.json())

app.use(cors())
app.use(cookieParser())   

try {
    mongoose.connect(URI)
    console.log("DB Connected Successfully")
} catch (error) {
    console.log(error)
}
 
app.use('/api/user', userRoute)
app.use('/api/message', messageRoute)


server.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
}) 