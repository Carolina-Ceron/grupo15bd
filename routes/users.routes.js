import UsersControllers from "../controllers/users.controllers.js";
import Routes from "./Routes.js";

export default class UsersRoutes extends Routes {

    constructor(){
        super()
        this.controller = new UsersControllers()
        this.getRoutes()
    }

    getRoutes(){
        this.router
                .get('/', this.controller.getAllUsers)
                .get('/:id',this.controller.getUserById)
                .post('/', this.controller.createUser)
                .put('/:id', this.controller.modifyUser)
                .delete('/:id', this.controller.deleteUser)
    }
}