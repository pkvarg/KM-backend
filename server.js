import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import colors from 'colors'
import botsRouter from './routes/botsRouter.js'
import visitorsRouter from './routes/visitorsRouter.js'
import dvlOrdersRouter from './routes/dvlOrdersRouter.js'
import path from 'path'

dotenv.config()
//connectDB()

const app = express()

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://kvalitnamontaz.sk', 'https://librosophia.sk'],
  }),
)

app.use(express.json())
app.use('/uploads', express.static(path.resolve('uploads')))

app.use('/api/bots', botsRouter)
app.use('/api/visitors', visitorsRouter)
app.use('/api/admin', dvlOrdersRouter)
app.get('/', (req, res) => {
  res.send('Hello from KM - Backend!')
})

const PORT = process.env.PORT

const startServer = async () => {
  connectDB()
  try {
    app.listen(PORT, () => console.log(`km-server running on port ${PORT}`.yellow.bold))
  } catch (error) {
    console.log(error)
  }
}

startServer()
