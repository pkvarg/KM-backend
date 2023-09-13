import asyncHandler from 'express-async-handler'
import Visitors from '../models/visitorsModel.js'

const id = '641729fdfa5467afe11ddc0d'

// PUT api/visitors/pic/increase

const increaseVisitors = asyncHandler(async (req, res) => {
  console.log(req.url)
  let url = req.url
  const count = await Visitors.findById(id)
  if (url === '/dvl/increase') {
    const visitorsDeclinedDvlInDb = count.visitorsDeclinedDvl
    count.visitorsDeclinedDvl = visitorsDeclinedDvlInDb + 1
  } else if (url === '/dvl/agree/increase') {
    const visitorsAgreedDvlInDb = count.visitorsAgreedDvl
    count.visitorsAgreedDvl = visitorsAgreedDvlInDb + 1
  } else {
    console.log('unknown url')
  }

  const savedVisitors = await count.save()

  res.json(savedVisitors)
})

// GET api/visitors/pic/counter (both agreed and declined)

const getVisitors = asyncHandler(async (req, res) => {
  console.log(req.url)
  let url = req.url

  const count = await Visitors.findById(id)

  if (url === '/pic/counter') {
    const visitorsDeclined = count.visitorsDeclined
    const visitorsAgreed = count.visitorsAgreed
    res.json({
      agreed: visitorsAgreed,
      declined: visitorsDeclined,
    })
  } else if (url === '/dvl/counter') {
    const visitorsDeclined = count.visitorsDeclinedDvl
    const visitorsAgreed = count.visitorsAgreedDvl
    res.json({
      agreed: visitorsAgreed,
      declined: visitorsDeclined,
    })
  } else if (url === '/io/counter') {
    const visitorsDeclined = count.visitorsDeclinedIo
    const visitorsAgreed = count.visitorsAgreedIo
    res.json({
      agreed: visitorsAgreed,
      declined: visitorsDeclined,
    })
  } else {
    console.log('Unknown url')
  }
})

export { getVisitors, increaseVisitors }
