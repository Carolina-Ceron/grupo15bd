import express, { urlencoded } from 'express'
import UsersRoutes from '../routes/users.routes.js'
import productsRoutes from '../routes/products.routes.js'


export default class Server{

    static app = express()

    static middlewares(){
        Server.app.use(express.json())
        Server.app.use(urlencoded({extended: true}))
    }

    static runServer(port){
        Server.app.listen(port,() =>{
            console.log(`listening to http://localhost:${port}`)
        }) 
    }

    static routes(){
        const users = new UsersRoutes()
        const products = new productsRoutes()
        Server.app.use('/users', users.router)
        Server.app.use('/products', products.router)
        
    }

    static run(port){
        console.clear()
        Server.middlewares()
        Server.routes()
        Server.runServer(port)
        
    }

}