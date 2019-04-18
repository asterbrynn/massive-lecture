module.exports = {
	allPlanes(req, res) {
		const db = req.app.get('db');
		if (req.query.count) {
			db.plane_by_count([req.query.count]).then(response => {res.status(200).send(response)})
		}
		else {
			db.all_airplanes().then(response => {res.status(200).send(response)});
		}
	},
	planeByID(req, res) {
		const db = req.app.get('db');
		const {id} = req.params;
		db.plane_by_id([id]).then(response => {res.status(200).send(response)});
	}
}