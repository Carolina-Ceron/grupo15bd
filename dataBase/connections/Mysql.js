import mysql from 'mysql2'
import config from './Mysql.config.js'
export default class Mysql {

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost', 
            user: 'root',
            password: '',
            database: 'himitsubd'
        })
        this.tryConnection()
    }
    tryConnection() {
        this.connection.connect(err =>
            err
                ? console.error('Failed DataBase Connection')
                : console.log('Connected to DataBase')
        )
    }
}