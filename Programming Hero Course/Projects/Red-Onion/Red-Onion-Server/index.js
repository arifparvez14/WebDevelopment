const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const app = express();
app.use(cors()) //Solve cors problem
app.use(bodyParser.json()) // parse application/json

const uri = process.env.DB_PATH;

//Get
app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit);
});


/* Red Onion */
//Add food & features

app.post('/addFoods',(req, res) => {
    const food = req.body;
    client = new MongoClient(uri, { useNewUrlParser: true});
    client.connect(err => {
        const collection = client.db("onlineStore").collection("feature");
        collection.insert(food, (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).send({message:err})
            } else {
                res.send(result.ops[0]);
            }
        })
        client.close();
      });
})

app.get('/features', (req, res) => {
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("onlineStore").collection("feature");
        collection.find().toArray((err, documents) => {
            if (err) {
                console.log(err)
                res.status(500).send({message:err})
            } else {
                res.send(documents);
            }
        })
        client.close();
      });
});

app.get('/foods', (req, res) => {
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("onlineStore").collection("foods");
        collection.find().toArray((err, documents) => {
            if (err) {
                console.log(err)
                res.status(500).send({message:err})
            } else {
                res.send(documents);
            }
        })
        client.close();
      });
});

app.post('/orders' , (req,res) => {
    const data = req.body;
    console.log(data);
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db('onlineStore').collection('orders');
        collection.insert(data , (reject, result) =>  {
            if(reject){
                res.status(500).send("failed")
            }else{
                res.send(result.ops[0])
            }
        });
        client.close()
    });
  });

app.get('/food/:id', (req, res) => {
    const id = req.params.id;
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("onlineStore").collection("foods");
        collection.find(id).toArray((err, documents) => {
            if (err) {
                console.log(err)
                res.status(500).send({message:err})
            } else {
                res.send(documents[id]);
            }
        })
        client.close();
      });
});


const port = process.env.PORT || 5000
app.listen(port, () => console.log("Listening to port", port));