import express from 'express';
import userRoute from './routes/Manufacturer.js';

const app= express();

app.use(express.json())
app.use('/', userRoute);

app.listen(3005, ()=> {
    console.log('Server running on port 3005');
});