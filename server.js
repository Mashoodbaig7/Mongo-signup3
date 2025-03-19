const express = require('express')
const app = express()
app.use(express.json())
const {myRouter} = require('./routes/router')
const {dbConnection} = require('./config/db') 


dbConnection()   

app.use('/', myRouter) 



app.listen(2000, () => console.log('server is running on 3000'))