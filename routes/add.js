var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log("in addFriend");
	var nameToAdd = req.query.name;
	var descriptionToAdd = req.query.description;
	var friendInfo = {
			"name": nameToAdd,
			"description": descriptionToAdd,
			"imageURL": "http://upload.wikimedia.org/wikipedia/commons/0/07/Bruins_DSCN0077.JPG"
		};
	console.log(friendInfo);
	data['friends'].push(friendInfo);
	res.render('add');
 }