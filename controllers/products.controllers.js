
import ProductsDaoMysql from "../dataBase/daos/products.dao.mysql.js"


export default class ProductsControllers{

    constructor(){
        this.db = new ProductsDaoMysql()
    }

    getAllProducts = async (req, res) => {
        const users = await this.db.getAllProducts()
        res.json(users)
    }

    
}