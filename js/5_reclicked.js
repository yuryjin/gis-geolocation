//respawnmove();
//addeventl();

function respawnmove_reclicked() {
	if (classinstances[controls.cobj].movingMarker !== null) {
		map.removeLayer(classinstances[controls.cobj].movingMarker);
	}
	/*
	if (newtarget == true) {
		map.removeLayer(controllerarr[numobj]);
	}
	*/
	chosenicon = classinstances[controls.cobj].icon;
	classinstances[controls.cobj].totaldistance = showdistance(classinstances[controls.cobj].coordinates_array);
	//chosenspeed = choosespeed();





	//simulation_speed_local = simulation_speed;
	//console.log("local - " + simulation_speed_local);
	//console.log("total - " + simulation_speed);
	classinstances[controls.cobj].millisecondstime = 
	
	classinstances[controls.cobj].totaldistance / classinstances[controls.cobj].speed * 3600000 / stats.simulation_speed;
	console.log("total distance is - " + classinstances[controls.cobj].totaldistance + "km");
	var prev = [classinstances[controls.cobj].coordinates_array[0].lat, classinstances[controls.cobj].coordinates_array[0].lng];
	var curr = [classinstances[controls.cobj].coordinates_array[1].lat, classinstances[controls.cobj].coordinates_array[1].lng];
	var anglevalue = calcplay(prev, curr);
	//var anglevalue = calcplay([arraypointsx[number_of_markers-1].lat, arraypointsx[number_of_markers-1].lng], [arraypointsx[number_of_markers].lat, arraypointsx[number_of_markers].lng]) - 180
	console.log(anglevalue);
	classinstances[controls.cobj].movingMarker = L.Marker.movingMarker(
		classinstances[controls.cobj].coordinates_array,
		classinstances[controls.cobj].millisecondstime, {
			//autostart: true,
			rotationAngle: anglevalue,
			icon: chosenicon
		}).addTo(map);
	controll();
}

