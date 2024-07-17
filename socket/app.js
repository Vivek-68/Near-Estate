import {Server} from "socket.io";

const io = new Server({
    cors:{
        origin:"http://localhost:5173",
        methods: ["GET", "POST","PUT"]
    },
});

let onlineUsers = [];
const addUser  = (userId,socketId) =>{
const userExists = onlineUsers.find(user => user.userId === userId);
if(!userExists){
    onlineUsers.push({userId,socketId});
}
}

const removeUser = (socketId) =>{
    onlineUsers = onlineUsers.filter(user => user.socketId !== socketId);
}

const getUser = (userId) =>{
return onlineUsers.find(user => user.userId === userId)
}
console.log(onlineUsers)

io.on("connection",(socket)=>{
    socket.on("newUser",(userId)=>{
        addUser(userId,socket.id)
        console.log(onlineUsers)
    })
    socket.on("sendMessage",({receiverId,data})=>{
        
        const user = getUser(receiverId);
        
        io.to(user.socketId).emit("getMessage",data)
        
    })
    
    socket.on("disconnect",(userId)=>{
        removeUser(userId)
    })
})



io.listen("4000")