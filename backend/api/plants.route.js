import express from 'express'
import PlantsController from './plants.controller.js'

const router = express.Router()

// router.route('/').get((req,res) => res.send('hello world'))
//get all plants
router.route('/').get(PlantsController.apiGetPlants)

//get plant by id
router.route('/:id').get(PlantsController.apiGetPlantById)

//create plant
router.route('/').post(PlantsController.apiCreatePlant)

//delete plant by id
router.route('/:id').delete(PlantsController.apiDeletePlant)

//update plant by id
router.route('/:id').put(PlantsController.apiUpdatePlant)
export default router