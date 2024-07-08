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
        id_product int, foreign key (id_product) references PRODUCTS(id_product),
        id_client int, foreign key (id_client)	references CLIENTS(id_client),
        id_subsidiary int, foreign key (id_subsidiary) references SUBSIDIARIES(id_subsidiary))`  
        this.connection.query(query)
    }

    async getAllSales(){
      const query =  `SELECT * FROM ${this.table}`
      const [result] = await this.connection.promise().query(query)
      console.log(result)
      return result
  }
}