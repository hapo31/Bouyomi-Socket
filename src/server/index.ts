const http = require("http");
const fs = require("fs");
const io: SocketIO.Server = require("socket.io");
import { ServerResponse, ServerRequest } from "http";

const server = http.createServer();
server.on("request", (req: ServerRequest, res: ServerResponse) => {
    try {
        res.writeHead(200, { "Content-Type": "text/html" });

        const stream = fs.createReadStream("index.html");
        stream.pipe(res);
    } catch (e) {
        res.write(`${req.url} is Not found.`)
    }
});

io.sockets.on("connection", socket => {
    socket.emit("greeting", {
            mesage: "hello"
        },
        data => {
            console.log(data);
        });
});

io.listen(server);
server.listen(8080);