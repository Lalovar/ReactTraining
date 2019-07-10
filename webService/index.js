const express=require('express')
const app =express()
const port=8080

const cors=require('cors')

const users=[
    {
        name:"Tesoro",
        pass:"123"
    },
    {
        name:"Lalo",
        pass:"123"
    },
    {
        name:"Otro",
        pass:"123"
    }
]

app.use(cors())
app.get('/users', (req,res)=>res.send(users))
app.listen(port, ()=>console.log("Example app listening on port "+port+ "!"))