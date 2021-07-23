const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');           
const PORT = process.env.PORT || 5000;  

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(cors());
app.use(bodyParser.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('dotenv').config();
const url = process.env.MONGODB_URI;
console.log(url);
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb+srv://jzach:apple22@cluster0.qvf6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
client.connect();

var api = require('./api.js');
api.setApp( app, client );

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

if (process.env.NODE_ENV === 'production') 
{
  // Set static folder
  app.use(express.static('frontend/build'));

    
  app.get('*', (req, res) => 
  {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });

  // Make sure to uncomment this just in case
  /*app.get('/', (req,res) =>
  {
    res.send("GET Request Called");
  });*/
}

app.listen(PORT, () => 
{
  console.log('Server listening on port ' + PORT);
});
