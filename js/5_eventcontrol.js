
function changeColor(e) {
	console.log("test");
}

  function dragStartHandler (e) {
	  console.log("dragstart");
	var polyline = paths[controls.cobj].polyline_h;
	var latlngs = polyline.getLatLngs(),
		latlng = this.getLatLng();
	for (var i = 0; i < latlngs.length; i++) {
		if (latlng.equals(latlngs[i])) {
			this.polylineLatlng = i;
		}
	}
}

function dragHandler (e) {
	console.log("draghandle");
	var polyline = paths[controls.cobj].polyline_h;
	var latlngs = polyline.getLatLngs(),
		latlng = this.getLatLng();
	latlngs.splice(this.polylineLatlng, 1, latlng);
	polyline.setLatLngs(latlngs);
}

function dragEndHandler (e) {
	console.log("dragend");
	delete this.polylineLatlng;
	paths[controls.cobj].coordinates_array = paths[controls.cobj].polyline_h.getLatLngs();

	if (paths[controls.cobj].movingMarker !== null) {
		map.removeLayer(paths[controls.cobj].movingMarker);
	}
	/*
	if (newtarget == true) {
		map.removeLayer(controllerarr[numobj]);
	}
	*/
	chosenicon = paths[controls.cobj].icon;
	paths[controls.cobj].totaldistance = showdistance(paths[controls.cobj].coordinates_array);
	//chosenspeed = choosespeed();





	//simulation_speed_local = simulation_speed;
	//console.log("local - " + simulation_speed_local);
	//console.log("total - " + simulation_speed);
	paths[controls.cobj].millisecondstime = 
	
	paths[controls.cobj].totaldistance / paths[controls.cobj].speed * 3600000 / stats.simulation_speed;
	//console.log("total distance is - " + paths[controls.cobj].totaldistance + "km");
	var prev = [paths[controls.cobj].coordinates_array[0].lat, paths[controls.cobj].coordinates_array[0].lng];
	var curr = [paths[controls.cobj].coordinates_array[1].lat, paths[controls.cobj].coordinates_array[1].lng];
	var anglevalue = calcplay(prev, curr);
	//var anglevalue = calcplay([arraypointsx[number_of_markers-1].lat, arraypointsx[number_of_markers-1].lng], [arraypointsx[number_of_markers].lat, arraypointsx[number_of_markers].lng]) - 180
	//console.log(anglevalue);
	paths[controls.cobj].movingMarker = L.Marker.movingMarker(
		paths[controls.cobj].coordinates_array,
		paths[controls.cobj].millisecondstime, {
			//autostart: true,
			rotationAngle: anglevalue,
			icon: chosenicon
		}).addTo(map);
	controll();


	respawnmove();
}


function addeventl1() {
	var numberofpath = controls.cobj;

	paths[controls.cobj].mark_arr[0]
	
	.on('click', changeColor)
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
}


function addeventl() {
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;

	console.log(paths[stats.totalobjects].polyline_h);
	paths[numberofpath].mark_arr[nummar]
	
	.on('click', changeColor)
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
}
