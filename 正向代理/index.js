import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json)
app.use(cors())
app.get("/",async (req,res)=>{

})

app.listen(3000)
