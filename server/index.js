const express = require('express');
const app = express();
var PORT = 8080;
var errorHandler = require('./handlers/error')





app.use(function(req, res, next){
    let error  = new Error()
    error.status = 404
    next(error)
})

app.use(errorHandler())


app.listen(process.env.PORT, function(){
    console.log(`app is listening on ${PORT}`)
})