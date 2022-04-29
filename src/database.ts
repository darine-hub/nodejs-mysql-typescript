import { createPool, Pool } from 'mysql2/promise';

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        connectionLimit :10,
        host:'localhost',
        user:'root',
        password:'root',
        database:'GESTION',
        port:8889
            

    });
    return connection;
}