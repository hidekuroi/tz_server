const express = require('express')
const router = require('./routes/itemRouter')

const PORT = process.env.PORT || 8080

const app = express()
const corsMiddleware = require('./middleware/corsMiddleware.js')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api', router)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
