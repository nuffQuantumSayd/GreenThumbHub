let plants
import mongodb from "mongodb"

export default class PlantsDAO {
    static async injectDB(conn) {
        if (plants) {
            return
        }
        
        try {
            plants = await conn.db(process.env.PLANTDB_NS).collection('plant_info')
            //console.log(plants)
        } catch (e) {
            console.log(`unable to connect in PlantsDAO:${e}`)
        }
    }

    static async getPlants() {
        
        let cursor
        
        try {
            cursor  = await plants.find()
            let plantList = await cursor.toArray()
            return plantList
        } catch (e) {
            console.log(`unable to issue find command, ${e}`)
        }
    }

    static async getPlantById(id) {
        try {
            const plantById = await plants.findOne({_id: new mongodb.ObjectId(id)})
            return plantById
        } catch (e) {
            console.log(`unable to issue find command ${e}`)
            throw e
        }
    }
}