
function changeColor(e) {
	//controls.cobj = e.target.pathid;
	//console.log(paths[numberofpath].mark_arr);
	//console.log(numberofpath);
	//console.log(controls.cobj);
	//console.log(numberofpath);
	console.log("test");
}

  function dragStartHandler (e) {
	  console.log("dragstart");
	  //choose_path(controls.cobj);
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

function add_marker(numberofpath) {

}

function addevent_polyline(numberofpath) {
	var nummar = paths[numberofpath].num_markers;

	paths[numberofpath].polyline_h
	.on('click', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);

		paths[numberofpath].num_markers += 1;
	
		paths[numberofpath].latlngs_array.coordinates.push(e.latlng);
		
		
		// to coordinates array
		paths[numberofpath].coordinates_array.push(e.latlng);
		//console.log(paths[numberofpath].coordinates_array);
			
		paths[numberofpath].mark = new L.marker(paths[numberofpath].latlngs_array.coordinates[paths[numberofpath].num_markers], {
	
			title: "path-" + numberofpath + "marker-" + paths[numberofpath].num_markers,
			marker_num: paths[numberofpath].num_markers,
			pathid: numberofpath,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
	
		paths[numberofpath].mark_arr.push(paths[numberofpath].mark);
		if (paths[numberofpath].polyline_h !== null) {
			map.removeLayer(paths[numberofpath].polyline_h);
		}
		//paths[numberofpath].latlngs_array.coordinates.splice(nummar, 1);
		paths[numberofpath].polyline_h = new L.Polyline(paths[numberofpath].latlngs_array.coordinates, {color: "#00008b"}).addTo(map);

		respawnmove_uni(num);
		addeventl_uni(num);
	})
	/*
	.on('dragstart', function(e) {
		console.log("dragging");
	})
	*/
	/*
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
	*/
}



function addeventl_universal(numberofpath) {

	//var nummar = paths[numberofpath].num_markers;
	


	//var numberofpath = stats.totalobjects;
	var nummar = paths[numberofpath].num_markers;
	console.log(numberofpath);

	paths[numberofpath].mark_arr[nummar]
	.on('click', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	.on('dblclick', function(e) {
		//alert("yes");
		map.removeLayer(paths[numberofpath].mark_arr[nummar]);
		if (paths[numberofpath].polyline_h !== null) {
			map.removeLayer(paths[numberofpath].polyline_h);
		}
		paths[numberofpath].latlngs_array.coordinates.splice(nummar, 1);
		paths[numberofpath].polyline_h = new L.Polyline(paths[numberofpath].latlngs_array.coordinates, {color: "#00008b"}).addTo(map);
		
	})
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
}


function addeventl1() {
	//var numberofpath = controls.cobj;
	//controls.obj = stats.totalobjects;

	var numberofpath = stats.totalobjects;

	paths[numberofpath].mark_arr[0]
	
	//.on('click', changeColor)
	.on('click', function(e) {
		console.log(numberofpath);
		choose_path(numberofpath);
	})
	/*
	.on('mouseover', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	*/
	.on('dragstart', function(e) {
		console.log(numberofpath);
		choose_path(numberofpath);
	})
	//.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
}

function addeventl_reclicked() {
	console.log(controls.cobj);

	var numberofpath = controls.cobj;
	var nummar = paths[controls.cobj].num_markers;
	console.log(numberofpath);

	paths[numberofpath].mark_arr[nummar]

	.on('click', function(e) {
		console.log(numberofpath);
	})
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);

	/*
	var numberofpath = controls.cobj;
	var nummar = paths[controls.cobj].num_markers;
	console.log(numberofpath);
	/*
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;

	console.log(paths[stats.totalobjects].polyline_h);
	
	paths[numberofpath].mark_arr[nummar]


	.on('click', function(e) {
		console.log(numberofpath);
	})
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
	
	
	
	/*
	var numberofpath = controls.cobj;
	var nummar = paths[controls.cobj].num_markers;
	console.log(numberofpath);

	paths[numberofpath].mark_arr[nummar]
	*/
}


function addeventl() {
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;
	console.log(numberofpath);

	paths[numberofpath].mark_arr[nummar]
	.on('click', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	//.on('dragstart', dragStartHandler)
	//.on('dragstart', console.log("1"); dragStartHandler)
	/*
	.on('dragstart', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
		dragStartHandler(e);
	})
	*/
	/*
	.on('dragstart', function(e) {
		console.log(numberofpath + "dragging");
		controls.cobj = numberofpath;
		choose_path(numberofpath);
		//dragStartHandler(e);
	})
	*/
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);



	/*
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;
	console.log(numberofpath);
	
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;

	console.log(paths[stats.totalobjects].polyline_h);
	
	paths[numberofpath].mark_arr[nummar]
	
	
	//.on('click', changeColor(numberofpath))
	//.on('click', changeColor)
	/*
	.on('click', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	
	.on('click', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);

		//paths[numberofpath].mark_arr[nummar]
		paths[numberofpath].mark_arr[nummar]
		.on('dragstart', dragStartHandler)
		.on('drag', dragHandler)
		.on('dragend', dragEndHandler);
	})	
	/*
	.on('dragstart', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	*/
	/*
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
	*/
}

/*
function addeventl() {
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;
	console.log(numberofpath);
	/*
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;

	console.log(paths[stats.totalobjects].polyline_h);
	
	paths[numberofpath].mark_arr[nummar]
	
	
	//.on('click', changeColor(numberofpath))
	//.on('click', changeColor)
	/*
	.on('click', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	
	.on('click', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);

		//paths[numberofpath].mark_arr[nummar]
		paths[numberofpath].mark_arr[nummar]
		.on('dragstart', dragStartHandler)
		.on('drag', dragHandler)
		.on('dragend', dragEndHandler);
	})	
	
	.on('dragstart', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	
	
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
	
}
*/
