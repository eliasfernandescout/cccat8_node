import express from "express";
import HttpsServer from "./HttpsServer";

export default class ExpressAdapter implements HttpsServer {
    app: any;
    constructor(){
        this.app = express();
        this.app.use(express.json());
    }
     on(method: string, url: string, callbackFunction: Function): void{
        this.app[method](url, async function (request: any, response: any){
            const output = await callbackFunction(request.params, request.body);
            response.json(output);
        })

    };


    listen(port: number): void {
        this.app.listen(port);
    }
}
