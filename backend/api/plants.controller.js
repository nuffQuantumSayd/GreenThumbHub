import PlantsDAO from "../dao/PlantsDAO.js";


export default class PlantsController {
	static async apiGetPlants(req, res, next) {
		try {
			let response = await PlantsDAO.getPlants();

			res.json(response);
		} catch (e) {
			console.log(e);
			res.status(500).send(e.message);
		}
	}

	static async apiGetPlantById(req, res, next) {
		try {

            let {id} = req.params
            let plantById = await PlantsDAO.getPlantById(id)
            res.json(plantById)
		} catch (e) {
            console.log(e)
            res.status(500).send(e.message)
        }
	}

	static async apiCreatePlant(req, res, next) {
		try {
			const image = req.body.image
			const name = req.body.name
			const desc = req.body.desc
			const price = req.body.price

			await PlantsDAO.createPlant(image,name,desc,price)

			res.json({status: "success"})
		} catch (e) {
			console.log(e)
			res.status(500).send(e.message)
		}
	}

}
