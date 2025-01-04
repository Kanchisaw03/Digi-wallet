const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

const  crypto = require("crypto");




const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin : 'http://localhost:5173/',
    methods : ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders : [
       'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials : true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extend:true}));
app.use("/api/auth", authRouter);

app.listen(PORT, ()=> console.log(`server is connected ${PORT}`))
mongoose
mongoose.connect('mongodb://localhost:27017/kanchi')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

  





const  transactionSchema = new mongoose.Schema({
    sender_upi_id:{type: String, required : true},
    receiver_upi_id:{type: String, required : true},
    amount : {type: Number, required : true},
    timeStamp:{type: Date, default : Date.now}
});

const Transaction = mongoose.model('Transaction', transactionSchema);
const generateUPI = () => {
    const randomId = crypto.randomBytes(4).toString('hex');
    return `${randomId}@fastpay`;
};



        const upi_id = generateUPI();
        const balance = 200;

        
   