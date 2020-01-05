const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => 
	console.log('Connect to DB'));

//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//middleware
app.use(express.json());

//route middleware
app.use('/api/user', authRoute); 
app.use('/api/posts', postRoute)

app.listen(3000, () => console.log('Serve up and Running'));