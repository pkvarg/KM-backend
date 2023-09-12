import express from 'express'
import {
  getVisitors,
  increaseVisitors,
} from '../controllers/visitorsController.js'

const router = express.Router()

router.put('/dvl/increase', increaseVisitors)

router.get('/dvl/counter', getVisitors)

router.put('/dvl/agree/increase', increaseVisitors)

export default router
