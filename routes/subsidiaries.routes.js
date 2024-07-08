
import Routes from "./Routes.js";
import SubsidiariesControllers from "../controllers/subsidiaries.controllers.js";

export default class subsidiariesRoutes extends Routes{

    constructor(){
        super()
        this.controller = new SubsidiariesControllers()
        this.getRoutes()
    }

    getRoutes(){
        this.router
        .get('/', this.controller.getAllSubsidiaries)
    }
}