
const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
]

//habilita CORS
app.use(cors())

app.use(express.json())

app.use('/api', routes)

// servidor
const port = process.env.PORT || 8080
app.listen(port, () => {console.log(`Server is listening on port ${port}`)})
