
const express = require('express')
const path = require('path')
const cors = require('cors')

const db = require('./src/database/db')
const routes = require('./src/routes/routes')

const app = express()

db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5502',
]

//habilita CORS
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        // mobile app - não tem origem
        if (!origin) allowed = true

        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.use('/api', routes)

//ROTAS
app.get('/', (req, res) => {
    res.render('/views/index.html')
})
  
// servidor

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
