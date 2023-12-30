const express = require('express')
const cors = require('cors');
const router  = require('./routes/index.js');
const { sequelize, compounds }=require('../database/models/')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',router);

app.listen({port:5000}, async()=>{
    console.log('Server running on http://localhost:5000');
    await sequelize.authenticate();
    console.log('Database connected');  
})
