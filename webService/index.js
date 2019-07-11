const express = require('express')
const port = 8080
const bodyParser=require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
let users = [
    {
        name: "Tesoro",
        pass: "123"
    },
    {
        name: "Lalo",
        pass: "123"
    },
    {
        name: "Otro",
        pass: "123"
    },
    {
        name: "Otro2",
        pass: "1234545454"
    }
]

app.use(cors())

app.put('/users', (req, res) => {
    const request=req.body
    console.log(request)
    users.push(request);

    res.send('User succesfully added');
})

app.get('/users', (req, res) => res.send(users))
app.listen(port, () => console.log("Example app listening on port " + port + "!"))