
import SubsidiariesDaoMysql from "../dataBase/daos/subsidiaries.dao.mysql.js"


export default class SubsidiariesControllers{

    constructor(){
        this.db = new SubsidiariesDaoMysql()
    }

    getAllSubsidiaries = async (req, res) => {
        const subsidiaries = await this.db.getAllSubsidiaries()
        res.json(subsidiaries)
    }

}