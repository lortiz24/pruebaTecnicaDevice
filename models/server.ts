import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';
import platosRoutes from '../routes/platos';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        platos: '/api/platos',
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            console.log(error)
        }

    } 

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

       
    }


    routes() {
        this.app.use( this.apiPaths.platos, platosRoutes )
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}

export default Server;