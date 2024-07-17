import express from 'express'
import cors from 'cors'
import plants from './api/plants.route.js'
import ratings from './api/smallRatings.route.js'

const app = express()

//express and cors middleware
app.use(cors())
app.use(express.json())

app.use('/api/v1/plants', plants)
app.use('/api/v1/ratings', ratings)

//error handling
app.use('*', (req, res) => {
    res.status(404).json({error: "not found"})
})

export default app