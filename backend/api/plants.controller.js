import PlantsDAO from "../dao/PlantsDAO.js";


export default class PlantsController {
	static async apiGetPlants(req, res, next) {
		try {
			let response = await PlantsDAO.getPlants();

			res.json(response);
		} catch (e) {
			console.log(e);
			res.status(200).send(e.message);
		}
	}

	static async apiGetPlantById(req, res, nex) {
		try {

            let {id} = req.params
            let plantById = await PlantsDAO.getPlantById(id)
  
            res.json(plantById)
		} catch (e) {
            console.log(e)
            res.status(404).send(e.message)
        }
	}
}
