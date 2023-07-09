import express from 'express';
import { Server } from 'socket.io';
import http from 'http'
import cors from 'cors'


import userRoute from './routes/Manufacturer.js';
import orderRoute from './routes/Order.js';
import transporterRoute from './routes/Transporter.js'
import chatRoute from './routes/Chat.js'

const app= express();

app.use(cors())
app.use(express.json())
app.use('/', userRoute);
app.use('/manufacturer',userRoute)
app.use('/transporter',transporterRoute)
app.use('/orders', orderRoute)
app.use('/chats', chatRoute)

const server= http.createServer(app);

const io= new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    }
})

io.on("connection", (socket)=> {
    console.log("Connection successful", socket.id)

    socket.on("join_room", (data)=> {
        socket.join(data);
    })

    socket.on("send_message", (data)=> {
        console.log(data) 
        // socket.broadcast.emit("received_message",data);
        socket.to(data.room).emit("received_message",data);
    })
})

server.listen(3005, ()=> {
    console.log('Server running on port 3005');
});