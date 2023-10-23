const express= require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path:'./.env'})

const puerto = process.env.PORT || 3001;

app.listen(puerto,()=>{
    console.log( ' listening on http://localhost: '+puerto);
})