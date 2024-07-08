import Mysql from "../connections/Mysql.js";


export default class UsersDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'users'
        this.#createTable()
    }
    // creacion de tablas

    #createTable() {
        const query = `CREATE TABLE IF NOT EXISTS ${this.table}
        id_user INT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        mail VARCHAR(50) NOT NULL`  
        this.connection.query(query)
    }


    // querys
    async getAllUsers(){
        const query =  `SELECT * FROM ${this.table}`
        const [result] = await this.connection.promise().query(query)
        console.log(result)
        return result
    }

    async getUserById(id){
        const query = `SELECT * FROM ${this.table} WHERE id_user = ${id}`
        const [result] = await this.connection.promise().query(query)
        console.log(result)
        return result
    }

    async createUser(user){
        const {id_user,name,mail}=user
        const query = `INSERT INTO ${this.table} VALUES (${id_user},'${name}','${mail}')`
        const [result] = await this.connection.promise().query(query)
        return result
    }

    async modifyUser(user,id){
        const {name,mail}=user
        const query = `UPDATE ${this.table} SET name = ?, mail = ? WHERE id_user= ?`
        const [result] = await this.connection.promise().query(query,[name,mail,id])
        return result
    }

    async deleteUser(id_user){
        let query = `DELETE FROM ${this.table} WHERE id_user = ${id_user}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}