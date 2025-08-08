const express = require("express")

const app = express()

const PORT = "5000"
app.use(express.json())//parse json
app.get("/",(req,res)=>{
    res.json("Hello world")
})

app.listen(PORT, ()=> {
console.log(`success,running in http://localhost:${PORT}`)
})