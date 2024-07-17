import PlantsDAO from "../dao/PlantsDAO.js";

export default class PlantsController {
    static async apiGetPlants(req, res, next) {
        
        let response = await PlantsDAO.getPlants()

        res.json(response)
    }
}