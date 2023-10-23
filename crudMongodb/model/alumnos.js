const mongoose = require('mongoose');

const alumnos = mongoose.model('alumnos', {
   
    name : {
        type: String,
        required: true        
        },
    edad: {
        type: String,
        required: true
    }

});

module.exports = alumnos;