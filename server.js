var express = require("express")
var bodyParser =require("body-parser")

var tasks = require("./routes/orderList.js")
var cors = require("cors")

var port = 3000

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use("/api",tasks)

app.listen(port,function(){
   console.log("server started on port "+port) 
})