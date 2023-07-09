import express from 'express';
import userRoute from './routes/Manufacturer.js';
import cors from 'cors';
import orderRoute from './routes/Order.js';
import transporterRoute from './routes/Transporter.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', userRoute);
app.use('/manufacturer', userRoute);
app.use('/transporter', transporterRoute);
app.use('/orders', orderRoute);
app.listen(3005, () => {
    console.log('Server running on port 3005');
});
//# sourceMappingURL=index.js.map