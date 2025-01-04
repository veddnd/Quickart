const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const authjwt = require('./helper/jwt.js');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*',cors());
app.use(bodyParser.json());
app.use(authjwt());

// Routes
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const userRoutes = require('./routes/user');
const newarrivalRoutes = require('./routes/newarrivals');
const cart = require('./routes/cart');
app.use('/api/category', categoryRoutes);
app.use('/api/Product', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/cart',cart);
app.use('/api/newarrivals',newarrivalRoutes)


// connection sting
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to MongoDB and database too');
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    
    
}).catch((err)=>{console.log(err)})

