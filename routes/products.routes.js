import Routes from "./Routes.js";

export default class productsRoutes extends Routes{

    constructor(){
        super()
        this.getRoutes()
    }

    getRoutes(){
        this.router.get('/', (request,response) => {
            response.send('GET products')
        })
    }
}