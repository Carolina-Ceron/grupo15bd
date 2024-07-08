import Mysql from "../connections/Mysql.js";


export default class SalesDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'sales'
        this.#createTable()
    }
    // creacion de tablas

        #createTable() {
        const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
        id_sale INT PRIMARY KEY,
        id_product int NOT NULL)`  
        this.connection.query(query)
    }

    async getAllSales(){
        const query =  `SELECT * FROM ${this.table}`
        const [result] = await this.connection.promise().query(query)
        console.log(result)
        return result
    }
}