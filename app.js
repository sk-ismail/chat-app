const express= require('express')
const app= express();
const cors= require('cors');
const server=require('http').createServer(app)
const io=require('socket.io')(server)
port=5000;

app.use(express.static('views'))
app.use(cors())


server.listen(port, ()=>{
    console.log("listening...")
})



io.on('connection', (socket)=>{
    //console.log(socket.id)

    socket.on('message', (data)=>{

        socket.broadcast.emit('message', data)
    });
});