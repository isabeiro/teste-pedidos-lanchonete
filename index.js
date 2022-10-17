const express = require('express')
const path = require('path')


const app = express()

//app.set('view engine', 'ejs')


// arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//ROTAS
app.get('/', (req, res) => {
    res.render('index')
})

  
// servidor
/*
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
*/