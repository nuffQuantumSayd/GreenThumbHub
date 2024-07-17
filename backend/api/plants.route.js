import express from 'express'
import PlantsController from './plants.controller.js'

const router = express.Router()

// router.route('/').get((req,res) => res.send('hello world'))
router.route('/').get(PlantsController.apiGetPlants)

export default router