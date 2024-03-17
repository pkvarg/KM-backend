import asyncHandler from 'express-async-handler'
import Bots from '../models/botsModel.js'

const id = '6415ee5bd692c60b380ef10d'

// PUT api/bots/increase

const increaseBots = asyncHandler(async (req, res) => {
  console.log(req.url)
  let url = req.url
  const count = await Bots.findById(id)
  if (url === '/dvl/increase') {
    const botsInDvlDb = count.botsCountDvl
    count.botsCountDvl = botsInDvlDb + 1
  } else {
    console.log('Unknown url')
  }

  const savedBots = await count.save()
  res.json(savedBots)
})

// GET api/bots/counter

const getBots = asyncHandler(async (req, res) => {
  console.log(req.url)
  let url = req.url
  const count = await Bots.findById(id)
  if (url === '/dvl/counter') {
    const botsDvl = count.botsCountDvl
    res.json(botsDvl)
  } else {
    console.log('Unknown url')
  }
})

export { getBots, increaseBots }
