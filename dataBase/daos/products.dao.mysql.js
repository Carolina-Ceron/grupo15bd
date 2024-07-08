import Mysql from "../connections/Mysql.js";


export default class ProductsDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'products'
        this.#createTable()
    }
    // creacion de tablas

        #createTable() {
        const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
        id_product INT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        price VARCHAR(50) NOT NULL,
        description VARCHAR(50) NOT NULL)`  
        this.connection.query(query)
    }

    async getAllProducts(){
      const query =  `SELECT * FROM ${this.table}`
      const [result] = await this.connection.promise().query(query)
      console.log(result)
      return result
  }
}