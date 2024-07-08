
import SalesDaoMysql from "../dataBase/daos/sales.dao.mysql.js"


export default class SalesControllers{

    constructor(){
        this.db = new SalesDaoMysql()
    }

    getAllSales = async (req, res) => {
        const sales = await this.db.getAllSales()
        res.json(sales)
    }

    
}