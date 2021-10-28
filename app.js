const dgram = require("dgram");
const socket = dgram.createSocket("udp4");

socket.on("message", (message , rinfo)=> {
    console.log(`server got :${message} from ${rinfo.address} : ${rinfo.port}`)
})

socket.bind("8080");