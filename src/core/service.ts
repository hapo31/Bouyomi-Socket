import {BouyomiParameter} from './Parameters';
import * as http from 'http';
import * as socket from 'socket.io';


declare const io: SocketIO.Client;
export class BouyomiService {


    constructor() {
    }

    public async talk(param?: BouyomiParameter) {
        if (!param) {
            param = new BouyomiParameter();
        }
    }
}

