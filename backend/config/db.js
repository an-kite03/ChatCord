const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://ankitm03012004:chatcord_prj@cluster0.7uj3pbq.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
        })

        console.log(`MongoDB connected: ${conn.connection.host}`)

    } catch(error){
        console.log(`Error: ${error.message}`)
        process.exit()
    }
}

module.exports = connectDB