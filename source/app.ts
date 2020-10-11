import express from 'express'
import * as http from 'http'
import socket from 'socket.io'

export class Application {
    public app: express.Application

    constructor(port: number) {
        this.app = express();
        const server = new http.Server((this.appConfigure()));

        this.startListening(server, port);
    }

    private startListening(server: http.Server, port: number): void {
        this.initSockets(server);
        server.listen(port, '0.0.0.0', (): void => {
            console.log('Running at port: ' + port);
        })
    }

    private initSockets(server: http.Server): void {
        const localSockets = socket(server);

        localSockets.on('connection', (socket: any): void =>{
            console.log('New socket connection is open now');

            //TODO: Implement socket communication here
        });
    }

    private appConfigure(): express.Application {
        return this.app;
    }
}

new Application(8000);