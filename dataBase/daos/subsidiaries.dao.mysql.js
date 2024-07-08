import Mysql from "../connections/Mysql.js";


export default class SubsidiariesDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'subsidiaries'
        this.#createTable()
    }
    // creacion de tablas

        #createTable() {
        const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
        id_subsidiary INT PRIMARY KEY,
        address VARCHAR(50) NOT NULL)`  
        this.connection.query(query)
    }

    async getAllSubsidiaries(){
      const query =  `SELECT * FROM ${this.table}`
      const [result] = await this.connection.promise().query(query)
      console.log(result)
      return result
  }
}