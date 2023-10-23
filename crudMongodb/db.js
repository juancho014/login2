const mongoose = require('mongoose')
const url='mongodb+srv://juancho-21:juanjuan2853@cluster0.2jjjz.mongodb.net/alumnos?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})

const db = mongoose.connection
db.on('error',console.error.bind(console,'error a conectar mongodb'))
db.once('open',function callback(){
    console.log('conectado a la base de datos');
})


module.exports = db