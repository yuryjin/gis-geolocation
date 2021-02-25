function compare_to_array(eventlatlng) {
	var sames = 0;

	for (let index = 0; index < arraypointsx.length; index++) {
		var eventlat = eventlatlng.lat;
		var eventlng = eventlatlng.lng;
		var arrayxlat = arraypointsx[index].lat;
		var arrayxlng = arraypointsx[index].lng;
		sames += 1;
		if (eventlat == arrayxlat && eventlng == arrayxlng) {
			//sames += 1;
			

			console.log("eventlat - " + eventlat + ".\n arrayxlat - " + arrayxlat + ".\n eventlng - " + eventlng + ".\n arrayxlng - " + arrayxlng + ".\n same position - "  + sames);
			//console.log("same position - " + sames);
			//return true;
			return true;
		}
	}
}

function recreatemarker(anglevaluex) {

		map.removeLayer(controllerarr[numobj]);
	controllerarr[numobj] = L.Marker.movingMarker(
		arraypointsx,
		speedtotal, {
			//autostart: true,
			rotationAngle: anglevaluex,
			icon: chosenicon
		}).addTo(map);
}

function respawnmove() {
	if (classinstances[stats.totalobjects].movingMarker !== null) {
		map.removeLayer(classinstances[stats.totalobjects].movingMarker);
	}
	/*
	if (newtarget == true) {
		map.removeLayer(controllerarr[numobj]);
	}
	*/
	chosenicon = classinstances[stats.totalobjects].icon;
	classinstances[stats.totalobjects].totaldistance = showdistance(classinstances[stats.totalobjects].coordinates_array);
	//chosenspeed = choosespeed();





	//simulation_speed_local = simulation_speed;
	//console.log("local - " + simulation_speed_local);
	//console.log("total - " + simulation_speed);
	classinstances[stats.totalobjects].millisecondstime = 
	
	classinstances[stats.totalobjects].totaldistance / classinstances[stats.totalobjects].speed * 3600000 / stats.simulation_speed;
	console.log("total distance is - " + classinstances[stats.totalobjects].totaldistance + "km");
	var prev = [classinstances[stats.totalobjects].coordinates_array[0].lat, classinstances[stats.totalobjects].coordinates_array[0].lng];
	var curr = [classinstances[stats.totalobjects].coordinates_array[1].lat, classinstances[stats.totalobjects].coordinates_array[1].lng];
	var anglevalue = calcplay(prev, curr);
	//var anglevalue = calcplay([arraypointsx[number_of_markers-1].lat, arraypointsx[number_of_markers-1].lng], [arraypointsx[number_of_markers].lat, arraypointsx[number_of_markers].lng]) - 180
	console.log(anglevalue);
	classinstances[stats.totalobjects].movingMarker = L.Marker.movingMarker(
		classinstances[stats.totalobjects].coordinates_array,
		classinstances[stats.totalobjects].millisecondstime, {
			//autostart: true,
			rotationAngle: anglevalue,
			icon: chosenicon
		}).addTo(map);
	controll();
}
