
import Routes from "./Routes.js";
import SalesControllers from "../controllers/sales.controllers.js";

export default class salesRoutes extends Routes{

    constructor(){
        super()
        this.controller = new SalesControllers()
        this.getRoutes()
    }

    getRoutes(){
        this.router
        .get('/', this.controller.getAllSales)
    }
}