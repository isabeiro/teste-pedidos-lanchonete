const mongoose = require('mongoose')
//mongoose.set('strictQuery', true);

function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/teste-vaga-emprego')
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('Conected to database!')
    })
    
    db.on('error', () => console.log('Error'))
}

module.exports =  {
    connect
}