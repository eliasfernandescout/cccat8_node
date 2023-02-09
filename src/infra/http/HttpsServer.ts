export default interface HttpsServer {
    on(method: string, url: string, callbackFunction: Function): void;
    listen(port: number): void;
}