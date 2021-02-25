function removeoldhighlight() {
	console.log("old highlights removed");
	for (let index = 0; index < classinstances.length; index++) {
		for (let index1 = 0; index1 < classinstances[index].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].polylines_hi_arr[index1]);
		}
		for (let index2 = 0; index2 < classinstances[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].markers_hi_arr[index2]);
		}
		classinstances[index].polylines_hi_arr = [];
		classinstances[index].markers_hi_arr = [];
	}
}

function choose_path_co(numberofpath) {
	
}


function choose_path(numberofpath) {
	removeoldhighlight();

	var allotheritems = document.querySelectorAll(".targetslistobject");
	for (var i = 0; i < allotheritems.length; i++) {
		allotheritems[i].classList.remove("targetslistobject-active");
	  }
	var subel = document.getElementById("object-" + numberofpath);
	subel.className = "targetslistobject targetslistobject-active text-center";
	
	console.log(numberofpath);
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length; index++) {
		classinstances[numberofpath].marker_highlighted = new L.marker(classinstances[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		classinstances[numberofpath].markers_hi_arr.push(classinstances[numberofpath].marker_highlighted);
	}
	console.log(classinstances[numberofpath].coordinates_array);
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length-1; index++) {
		classinstances[numberofpath].polyline_highlighted = L.polylineDecorator(
			classinstances[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				patterns: [{
					offset: 0,
					repeat: 10,
					symbol: L.Symbol.dash({
						pixelSize: 0,
						pathOptions: {
							color: '#F05E23',
							weight: 5
						}
					})
				}]
			}
		).addTo(map);
		
		classinstances[numberofpath].polylines_hi_arr.push(classinstances[numberofpath].polyline_highlighted);
	}
	choosesub(numberofpath);
	controls.cobj = numberofpath;
	reclicked = true;
	console.log(reclicked);
	//controls.reclicked = true;
	//console.log(controls.reclicked);
	/*
	for (let index = 0; index < classinstances[stats.totalobjects].markers_hi_arr.length; index++) {
		
		
	}
	*/
}

/*

marker.on('dragend', function (e) {
    document.getElementById('latitude').value = marker.getLatLng().lat;
    document.getElementById('longitude').value = marker.getLatLng().lng;
});

*/

/*
function redo_path() {

}
*/

//function reroute_path(latlng, nummar, numberofpath) {
	/*
function reroute_path(latlng, nummar, numberofpath) {	
	//console.log(latlng);
	classinstances[stats.totalobjects].coordinates_array[nummar] = latlng;
	console.log("rerouted");
	for (let index = 0; index < classinstances.length; index++) {
		for (let index1 = 0; index1 < classinstances[index].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].polylines_hi_arr[index1]);
		}
		for (let index2 = 0; index2 < classinstances[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].markers_hi_arr[index2]);
		}
		for (let index3 = 0; index3 < classinstances[index].polylines_arr.length; index3++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].polylines_arr[index3]);
		}
		for (let index4 = 0; index4 < classinstances[index].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].markers_arr[index4]);
		}



		classinstances[index].polylines_arr = [];
		classinstances[index].markers_arr = [];
		classinstances[index].polylines_hi_arr = [];
		classinstances[index].markers_hi_arr = [];
	}
	console.log(numberofpath);
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length; index++) {
		classinstances[numberofpath].marker_st = new L.marker(classinstances[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		classinstances[numberofpath].markers_hi_arr.push(classinstances[numberofpath].marker_st);
	}
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length; index++) {
		classinstances[numberofpath].marker_highlighted = new L.marker(classinstances[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		classinstances[numberofpath].markers_hi_arr.push(classinstances[numberofpath].marker_highlighted);
	}
	console.log(classinstances[numberofpath].coordinates_array);
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length-1; index++) {
		classinstances[numberofpath].polyline_st = L.polylineDecorator(
			classinstances[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				patterns: [{
					offset: 0,
					repeat: 10,
					symbol: L.Symbol.dash({
						pixelSize: 0,
						pathOptions: {
							color: '#F05E23',
							weight: 5
						}
					})
				}]
			}
		).addTo(map);
		
		classinstances[numberofpath].polylines_hi_arr.push(classinstances[numberofpath].polyline_st);
	console.log(classinstances[numberofpath].coordinates_array);
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length-1; index++) {
		classinstances[numberofpath].polyline_highlighted = L.polylineDecorator(
			classinstances[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				patterns: [{
					offset: 0,
					repeat: 10,
					symbol: L.Symbol.dash({
						pixelSize: 0,
						pathOptions: {
							color: '#F05E23',
							weight: 5
						}
					})
				}]
			}
		).addTo(map);
		
		classinstances[numberofpath].polylines_hi_arr.push(classinstances[numberofpath].polyline_highlighted);
	}
	/*
	console.log(latlng);
	console.log(nummar);
	console.log(numberofpath);
	
}}
*/

function reroute_path(latlng, nummar, numberofpath) {

	controls.cobj = numberofpath;
	console.log("rerouted");
	for (let index = 0; index < classinstances.length; index++) {
		for (let index1 = 0; index1 < classinstances[index].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].polylines_hi_arr[index1]);
		}
		/*
		for (let index2 = 0; index2 < classinstances[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].markers_hi_arr[index2]);
		}
		*/

		for (let index3 = 0; index3 < classinstances[index].polylines_arr.length; index3++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].polylines_arr[index3]);
		}
		/*
		for (let index4 = 0; index4 < classinstances[index].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].markers_arr[index4]);
		}
		*/
		/*
		for (let index2 = 0; index2 < classinstances[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].markers_hi_arr[index2]);
		}
		for (let index4 = 0; index4 < classinstances[index].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].markers_arr[index4]);
		}
		*/

		classinstances[index].polylines_arr = [];
		classinstances[index].polylines_hi_arr = [];
		/*
		classinstances[index].polylines_arr = [];
		classinstances[index].markers_arr = [];
		classinstances[index].polylines_hi_arr = [];
		classinstances[index].markers_hi_arr = [];
		*/
	}

	/*
	console.log(numberofpath);
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length; index++) {
		classinstances[numberofpath].marker_st = new L.marker(classinstances[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		classinstances[numberofpath].markers_hi_arr.push(classinstances[numberofpath].marker_st);
	}
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length; index++) {
		classinstances[numberofpath].marker_highlighted = new L.marker(classinstances[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		classinstances[numberofpath].markers_hi_arr.push(classinstances[numberofpath].marker_highlighted);
	}

	console.log(classinstances[numberofpath].coordinates_array);
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length-1; index++) {
		classinstances[numberofpath].polyline_st = L.polylineDecorator(
			classinstances[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				patterns: [{
					offset: 0,
					repeat: 10,
					symbol: L.Symbol.dash({
						pixelSize: 0,
						pathOptions: {
							color: '#F05E23',
							weight: 5
						}
					})
				}]
			}
		).addTo(map);
		
		classinstances[numberofpath].polylines_arr.push(classinstances[numberofpath].polyline_st);
		}
		*/



	classinstances[numberofpath].coordinates_array[nummar] = latlng;
	console.log(classinstances[numberofpath].coordinates_array);
	for (let index = 0; index < classinstances[numberofpath].coordinates_array.length-1; index++) {
		classinstances[numberofpath].polyline_st = L.polylineDecorator(
			classinstances[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
				patterns: [{
					offset: 0,
					repeat: 10,
					symbol: L.Symbol.dash({
						pixelSize: 0,
						pathOptions: {
							color: '#000',
							weight: 5
						}
					})
				}]
			}
		).addTo(map);
		
		classinstances[numberofpath].polylines_arr.push(classinstances[numberofpath].polyline_st);
}	
	classinstances[numberofpath].polyline_highlighted = L.polylineDecorator(
		classinstances[numberofpath].coordinates_array, {
			//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
			title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
			patterns: [{
				offset: 0,
				repeat: 10,
				symbol: L.Symbol.dash({
					pixelSize: 0,
					pathOptions: {
						color: '#F05E23',
						weight: 5
					}
				})
			}]
		}
	).addTo(map);
	
	classinstances[numberofpath].polylines_hi_arr.push(classinstances[numberofpath].polyline_highlighted);
	respawnmove_reclicked();
}

function addeventl1() {
	var numberofpath = stats.totalobjects;
	classinstances[stats.totalobjects].markers_arr[0].addEventListener("click", function(e) {
		//console.log(classinstances[stats.totalobjects].markers_arr[0].latlng);
		choose_path(numberofpath);
		console.log("test");
	});
	classinstances[stats.totalobjects].markers_arr[0].on('dragend', function(e) {
		console.log("dragged");
	})
	classinstances[stats.totalobjects].markers_hi_arr[0].addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});
	classinstances[stats.totalobjects].markers_hi_arr[0].on('dragend', function(e) {
		console.log("dragged");
	})
}

function addeventl() {
	var numberofpath = stats.totalobjects;
	var nummar = classinstances[stats.totalobjects].num_markers;
	var numpol = classinstances[stats.totalobjects].num_polylines;

	classinstances[stats.totalobjects].polylines_arr[classinstances[stats.totalobjects].num_polylines].addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});
	classinstances[stats.totalobjects].polylines_hi_arr[classinstances[stats.totalobjects].num_polylines].addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});

	classinstances[stats.totalobjects].markers_arr[classinstances[stats.totalobjects].num_markers].addEventListener("click", function(e) {
		choose_path(numberofpath);
		//var numofmarker = stats.totalobjects;
		//alert(numofmarker);
		//alert(nummar);
		//reroute_path(e.latlng, nummar, numberofpath);
		
		console.log("test");
	});
	classinstances[stats.totalobjects].markers_arr[classinstances[stats.totalobjects].num_markers].addEventListener('dragend', function(e) {
		console.log("dragged");
		console.log(classinstances[stats.totalobjects].coordinates_array);
		var latlng = e.target.getLatLng();
		reroute_path(latlng, nummar, numberofpath);
		//reroute_path(latlng, nummar, numberofpath);
		console.log(classinstances[stats.totalobjects].markers_arr[classinstances[stats.totalobjects].num_markers].options.marker_num);
	})
	classinstances[stats.totalobjects].markers_hi_arr[classinstances[stats.totalobjects].num_markers].addEventListener("click", function(e) {
		choose_path(numberofpath);
		//var numofmarker = stats.totalobjects;
		//alert(numofmarker);
		//alert(nummar);
		//reroute_path(e.latlng, nummar, numberofpath);
		//reroute_path(latlng, nummar, numberofpath);
		
		console.log("test");
	});
	classinstances[stats.totalobjects].markers_hi_arr[classinstances[stats.totalobjects].num_markers].addEventListener('dragend', function(e) {
		console.log("dragged");
		console.log(classinstances[stats.totalobjects].coordinates_array);
		var latlng = e.target.getLatLng();
		//reroute_path(latlng, nummar, numberofpath);
		reroute_path(latlng, nummar, numberofpath);
		console.log(classinstances[stats.totalobjects].markers_hi_arr[classinstances[stats.totalobjects].num_markers].options.marker_num);
	})

}