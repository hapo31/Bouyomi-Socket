import * as http from "http";
import * as fs from "fs";
import * as socketio from "socket.io";
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

const io = socketio.listen(server);

io.sockets.on("connection", socket => {
    socket.emit("greeting", {
            mesage: "hello"
        },
        data => {
            console.log(data);
        });
});