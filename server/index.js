const express = require('express');
const app = express();
var PORT = 8080;










app.listen(process.env.PORT, function(){
    console.log(`app is listening on ${PORT}`)
})