const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')

const app = express();
app.use(cors()) //Solve cors problem
app.use(bodyParser.json()) // parse application/json

const users = ['Asad', 'Moin', 'Saber', 'Susmita', 'Sohana', 'Sabana'];

//Get
app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit);
})

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: "banana", quantity: 1000, price: 10000})
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query);
    const name = users[id]; 
    console.log(name);
    res.send({id, name})
})

//Post
app.post('/addUser',(req, res) => {
    console.log('data received',req.body);
    //save to db
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log("Listening to port 3000"));
