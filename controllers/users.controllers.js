import UsersDatoMemory from "../dataBase/daos/users.dao.memory.js"
import UsersDaoMysql from "../dataBase/daos/users.dao.mysql.js"
import mock from "../dataBase/users.mock.js"

export default class UsersControllers{

    constructor(){
        this.db = new UsersDaoMysql()
    }

    getAllUsers = async (req, res) => {
        const users = await this.db.getAllUsers()
        res.json(users)
    }

    getUserById = async (req,res) => {
        const {id} = req.params
        const user = await this.db.getUserById(id)
        res.json(user)
    }

    createUser  = async (req, res) => {
        console.log(req.body)
        const { id_user, name, mail } = req.body;

        console.log(`Created user: ${id_user}, ${name},${mail}`);
        res.status(201).send({ message: 'User created successfully' });
        await this.db.createUser(req.body)
        res.json()
    }

    modifyUser = async (req, res) => {
        const { id } = req.params;
        const modifyUser = await this.db.modifyUser(req.body,id)
        res.json(modifyUser)
    }
        deleteUser = async (req, res) => {
        const { id } = req.params;
        const deleteUser = await this.db.deleteUser(id)
        res.json(deleteUser)
    }
}