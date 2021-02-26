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

/*
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
*/

function respawnmove() {
	if (paths[stats.totalobjects].movingMarker !== null) {
		map.removeLayer(paths[stats.totalobjects].movingMarker);
	}
	/*
	if (newtarget == true) {
		map.removeLayer(controllerarr[numobj]);
	}
	*/
	chosenicon = paths[stats.totalobjects].icon;
	paths[stats.totalobjects].totaldistance = showdistance(paths[stats.totalobjects].coordinates_array);
	//chosenspeed = choosespeed();





	//simulation_speed_local = simulation_speed;
	//console.log("local - " + simulation_speed_local);
	//console.log("total - " + simulation_speed);
	paths[stats.totalobjects].millisecondstime = 
	
	paths[stats.totalobjects].totaldistance / paths[stats.totalobjects].speed * 3600000 / stats.simulation_speed;
	//console.log("total distance is - " + paths[stats.totalobjects].totaldistance + "km");
	var prev = [paths[stats.totalobjects].coordinates_array[0].lat, paths[stats.totalobjects].coordinates_array[0].lng];
	var curr = [paths[stats.totalobjects].coordinates_array[1].lat, paths[stats.totalobjects].coordinates_array[1].lng];
	var anglevalue = calcplay(prev, curr);
	//var anglevalue = calcplay([arraypointsx[number_of_markers-1].lat, arraypointsx[number_of_markers-1].lng], [arraypointsx[number_of_markers].lat, arraypointsx[number_of_markers].lng]) - 180
	//console.log(anglevalue);
	paths[stats.totalobjects].movingMarker = L.Marker.movingMarker(
		paths[stats.totalobjects].coordinates_array,
		paths[stats.totalobjects].millisecondstime, {
			//autostart: true,
			rotationAngle: anglevalue,
			icon: chosenicon
		}).addTo(map);
	controll();
}
