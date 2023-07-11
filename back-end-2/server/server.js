const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// variable that requires my endpoints from the controller file
const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controllers/controllers.js');

//Route for get all houses(resquest to enpoint which is in server)
app.get('/api/houses', getHouses);
//Route for creating a house(resquest to enpoint which is in server)
app.post('/api/houses', createHouse);
//Route for updating a house(resquest to enpoint which is in server)
app.put('/api/houses/:id', updateHouse);
//Route for deleting a house(resquest to enpoint which is in server)
app.delete('/api/houses/:id', deleteHouse);

app.listen(4004, () => console.log('Server is up and running on port 4004'))