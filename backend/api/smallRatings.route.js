import express from 'express'
import SmallRatingsController from './smallRatings.controller.js'

const router = express.Router()

router.route('/').get(SmallRatingsController.apiGetSmallRatings)

export default router