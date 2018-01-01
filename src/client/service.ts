import {BouyomiParameter} from "./Parameters";
import * as http from "http";
import * as socket from "socket.io";


declare const io: any;

export class BouyomiService {
    private socket: SocketIO.Socket;
    constructor() {
    }

    public connect() {
        this.socket = io.connect();

        this.socket.on("greeting", (data, fn) => {
            const ans = confirm(data.message);
            fn(ans);
        })
    }

    public async talk(param?: BouyomiParameter) {

    }
}

