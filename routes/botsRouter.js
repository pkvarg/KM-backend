import express from 'express'
import { getBots, increaseBots } from '../controllers/botsController.js'

const router = express.Router()

router.put('/dvl/increase', increaseBots)

router.get('/dvl/counter', getBots)

export default router
