import * as mongoose from 'mongoose'

class DataBase {
    private dburl = 'mongodb://127.0.0.1/cpbr-apirest'
    private dbconnection

    constructor() {

    }

    createConnection() {
        mongoose.connect(this.dburl)
        this.logger(this.dburl)
    }

    logger(uri) {
        this.dbconnection = mongoose.connection
        this.dbconnection.on('connected', () => console.log("Mongoose Está Conectado ") )
        this.dbconnection.on('error', error => console.error.bind(console, "Erro Na Conexão: " + error) );
    }
}

export default DataBase