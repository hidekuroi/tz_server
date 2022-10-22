const express = require('express')
const router = require('./routes/itemRouter')
const cors = require('cors')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))