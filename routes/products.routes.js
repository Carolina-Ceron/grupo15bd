
import Routes from "./Routes.js";
import ProductsControllers from "../controllers/products.controllers.js";

export default class productsRoutes extends Routes{

    constructor(){
        super()
        this.controller = new ProductsControllers()
        this.getRoutes()
    }

    getRoutes(){
        this.router
        .get('/', this.controller.getAllProducts)
    }
}