var data = require("../data.json");

exports.addFriend = function(request, response) {    
	
	newname = request.query.name;
	newdesc = request.query.description;
	console.log("Name: "+newname+" Desc:" +newdesc);
	var NewFriend = {
		"name": newname,
		"description": newdesc,
		"imageURL": "http://lorempixel.com/400/400/people"
	}
	data.friends.push(NewFriend);
	response.render('index',data);
 }