const mysql = require('mysql');

const connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pasword: '',
    database:'login_node',
})


connection.connect((error)=>{
    if(error){
        console.log('el error de la coneccion es : '+ error);
        return;
    }
    console.log('conectado a la base de datos');
})



module.exports=connection;
