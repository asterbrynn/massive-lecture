require('dotenv').config();
const express = require('express');
const massive = require('massive');
const airTrafficCtrl = require('./airTrafficCtrl');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

massive(CONNECTION_STRING).then(dbInstance => {
	app.set("db", dbInstance);
	app.listen(SERVER_PORT, () => {
		console.log(`listening on the best port, port ${SERVER_PORT}`)
	})
})

app.get('/api/airplanes', airTrafficCtrl.allPlanes);
app.get('/api/airplanes/:id', airTrafficCtrl.planeByID);