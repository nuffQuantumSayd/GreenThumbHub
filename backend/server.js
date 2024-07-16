import express from 'express'
import cors from 'cors'
import plants from './api/plants.route.js'

const app = express()

//express and cors middleware
app.use(cors())
app.use(express.json())

app.use('/api/v1/plants', plants)

//error handling
app.use('*', (req, res) => {
    res.status(404).json({error: "not found"})
})

export default app