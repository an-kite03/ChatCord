const express = require('express');
const { chats } = require('./data/data');
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const {notFound, errorHandler} = require('./middleware/errorMiddleware')

dotenv.config()
connectDB()
const app = express();

app.use(express.json()); // to accept json data

app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);


app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT

app.listen(5000, console.log(`Server started on PORT ${PORT}`)) 