import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/index.js'
const app  =express();
dotenv.config();
const Port =process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded())
app.use(routes)

app.listen(Port ,()=>{
    return console.log(`Ruuning post at ${Port}`)
})