import mysql from 'mysql2'

export default class Mysql {

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',  //entendiendo que la base se ejecuta en la misma PC
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