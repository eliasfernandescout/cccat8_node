import Connection from "./Database";
import pgp from "pg-promise";

export default class PgPromiseAdapter implements Connection {
    pgp: any;
    constructor(){
        this.pgp = pgp()("postgres://postgres:123456@localhost:5432/app")
    }

    query(statment: string, params: any): Promise<any> {
        throw new Error("Method nod implemented.")
    }

    async close(): Promise<void> {
        this.pgp.$pool.end();
    }
}