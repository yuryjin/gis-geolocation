//respawnmove();
//addeventl();

function respawnmove_reclicked() {
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
	console.log("total distance is - " + paths[controls.cobj].totaldistance + "km");
	var prev = [paths[controls.cobj].coordinates_array[0].lat, paths[controls.cobj].coordinates_array[0].lng];
	var curr = [paths[controls.cobj].coordinates_array[1].lat, paths[controls.cobj].coordinates_array[1].lng];
	var anglevalue = calcplay(prev, curr);
	//var anglevalue = calcplay([arraypointsx[number_of_markers-1].lat, arraypointsx[number_of_markers-1].lng], [arraypointsx[number_of_markers].lat, arraypointsx[number_of_markers].lng]) - 180
	console.log(anglevalue);
	paths[controls.cobj].movingMarker = L.Marker.movingMarker(
		paths[controls.cobj].coordinates_array,
		paths[controls.cobj].millisecondstime, {
			//autostart: true,
			rotationAngle: anglevalue,
			icon: chosenicon
		}).addTo(map);
	controll();
}

function addeventl_reclicked() {
	var numberofpath = controls.cobj;
	var nummar = paths[stats.totalobjects].num_markers;
	var numpol = paths[stats.totalobjects].num_polylines;

	paths[controls.cobj].polylines_arr[paths[controls.cobj].num_polylines].addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});
	paths[controls.cobj].polylines_hi_arr[paths[controls.cobj].num_polylines].addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});

	paths[controls.cobj].markers_arr[paths[controls.cobj].num_markers].addEventListener("click", function(e) {
		choose_path(numberofpath);
		//var numofmarker = controls.cobj;
		//alert(numofmarker);
		//alert(nummar);
		//reroute_path(e.latlng, nummar, numberofpath);
		
		console.log("test");
	});
	paths[controls.cobj].markers_arr[paths[controls.cobj].num_markers].addEventListener('dragend', function(e) {
		console.log("dragged");
		console.log(paths[controls.cobj].coordinates_array);
		var latlng = e.target.getLatLng();
		reroute_path(latlng, nummar, numberofpath);
		//reroute_path(latlng, nummar, numberofpath);
		console.log(paths[controls.cobj].markers_arr[paths[controls.cobj].num_markers].options.marker_num);
	})
	paths[controls.cobj].markers_hi_arr[paths[controls.cobj].num_markers].addEventListener("click", function(e) {
		choose_path(numberofpath);
		//var numofmarker = controls.cobj;
		//alert(numofmarker);
		//alert(nummar);
		//reroute_path(e.latlng, nummar, numberofpath);
		//reroute_path(latlng, nummar, numberofpath);
		
		console.log("test");
	});
	paths[controls.cobj].markers_hi_arr[paths[controls.cobj].num_markers].addEventListener('dragend', function(e) {
		console.log("dragged");
		console.log(paths[controls.cobj].coordinates_array);
		var latlng = e.target.getLatLng();
		//reroute_path(latlng, nummar, numberofpath);
		reroute_path(latlng, nummar, numberofpath);
		console.log(paths[controls.cobj].markers_hi_arr[paths[controls.cobj].num_markers].options.marker_num);
	})

}

