const {Peer}= require('peerjs');

const socket = io('/')
var mypeer = new Peer()
socket.emit("join-room",ROOM_ID,10)

socket.on('user-connected',(userId) =>{
    console.log("user-connected " + userId);
})