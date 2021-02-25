function removeoldhighlight() {
	console.log("old highlights removed");
	for (let index = 0; index < paths.length; index++) {
		for (let index1 = 0; index1 < paths[index].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(paths[index].polylines_hi_arr[index1]);
		}
		for (let index2 = 0; index2 < paths[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(paths[index].markers_hi_arr[index2]);
		}
		paths[index].polylines_hi_arr = [];
		paths[index].markers_hi_arr = [];
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
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_highlighted = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		paths[numberofpath].markers_hi_arr.push(paths[numberofpath].marker_highlighted);
	}
	console.log(paths[numberofpath].coordinates_array);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length-1; index++) {
		paths[numberofpath].polyline_highlighted = L.polylineDecorator(
			paths[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
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
		
		paths[numberofpath].polylines_hi_arr.push(paths[numberofpath].polyline_highlighted);
	}
	choosesub(numberofpath);
	controls.cobj = numberofpath;
	reclicked = true;
	console.log(reclicked);
	//controls.reclicked = true;
	//console.log(controls.reclicked);
	/*
	for (let index = 0; index < paths[stats.totalobjects].markers_hi_arr.length; index++) {
		
		
	}
	*/
}

function reroute_path(latlng, nummar, numberofpath) {

	controls.cobj = numberofpath;
	console.log("rerouted");
	//for (let index = 0; index < paths.length; index++) {
		for (let index1 = 0; index1 < paths[numberofpath].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].polylines_hi_arr[index1]);
		}

		for (let index3 = 0; index3 < paths[numberofpath].polylines_arr.length; index3++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].polylines_arr[index3]);
		}


		/*
		for (let index2 = 0; index2 < paths[numberofpath].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].markers_hi_arr[index2]);
		}
		for (let index4 = 0; index4 < paths[numberofpath].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].markers_arr[index4]);
		}
		*/
		/*
		for (let index2 = 0; index2 < paths[numberofpath].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].markers_hi_arr[index2]);
		}
		for (let index4 = 0; index4 < paths[numberofpath].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].markers_arr[index4]);
		}
		*/

		paths[numberofpath].polylines_arr = [];
		paths[numberofpath].polylines_hi_arr = [];
		//paths[numberofpath].markers_arr = [];
		//paths[numberofpath].markers_hi_arr = [];



		/*
	console.log(numberofpath);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_st = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "marker-" + 0,
			icon: myIcon2,
			draggable: true
		}).addTo(map);


		paths[numberofpath].marker_st.addEventListener("click", function(e) {
			choose_path(numberofpath);
			console.log("test");
		});
		
		paths[numberofpath].markers_arr.push(paths[numberofpath].marker_st);
	}
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_highlighted = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);


		paths[numberofpath].marker_highlighted.addEventListener("click", function(e) {
			choose_path(numberofpath);
			console.log("test");
		});
		
		paths[numberofpath].markers_hi_arr.push(paths[numberofpath].marker_highlighted);
	}
	*/



	paths[numberofpath].coordinates_array[nummar] = latlng;
	console.log(paths[numberofpath].coordinates_array);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length-1; index++) {
		paths[numberofpath].polyline_st = L.polylineDecorator(
			paths[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
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

		paths[numberofpath].polyline_st.addEventListener("click", function(e) {
			choose_path(numberofpath);
			console.log("test");
		});
		
		paths[numberofpath].polylines_arr.push(paths[numberofpath].polyline_st);
}	
	paths[numberofpath].polyline_highlighted = L.polylineDecorator(
		paths[numberofpath].coordinates_array, {
			//title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
			title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
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


	paths[numberofpath].polyline_highlighted.addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});
	
	paths[numberofpath].polylines_hi_arr.push(paths[numberofpath].polyline_highlighted);
	respawnmove_reclicked();
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
	paths[stats.totalobjects].coordinates_array[nummar] = latlng;
	console.log("rerouted");
	for (let index = 0; index < paths.length; index++) {
		for (let index1 = 0; index1 < paths[index].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(paths[index].polylines_hi_arr[index1]);
		}
		for (let index2 = 0; index2 < paths[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(paths[index].markers_hi_arr[index2]);
		}
		for (let index3 = 0; index3 < paths[index].polylines_arr.length; index3++) {
			//const element = array[index];
			map.removeLayer(paths[index].polylines_arr[index3]);
		}
		for (let index4 = 0; index4 < paths[index].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(paths[index].markers_arr[index4]);
		}



		paths[index].polylines_arr = [];
		paths[index].markers_arr = [];
		paths[index].polylines_hi_arr = [];
		paths[index].markers_hi_arr = [];
	}
	console.log(numberofpath);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_st = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		paths[numberofpath].markers_hi_arr.push(paths[numberofpath].marker_st);
	}
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_highlighted = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		paths[numberofpath].markers_hi_arr.push(paths[numberofpath].marker_highlighted);
	}
	console.log(paths[numberofpath].coordinates_array);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length-1; index++) {
		paths[numberofpath].polyline_st = L.polylineDecorator(
			paths[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
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
		
		paths[numberofpath].polylines_hi_arr.push(paths[numberofpath].polyline_st);
	console.log(paths[numberofpath].coordinates_array);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length-1; index++) {
		paths[numberofpath].polyline_highlighted = L.polylineDecorator(
			paths[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
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
		
		paths[numberofpath].polylines_hi_arr.push(paths[numberofpath].polyline_highlighted);
	}
	/*
	console.log(latlng);
	console.log(nummar);
	console.log(numberofpath);
	
}}
*/


/*
function reroute_path(latlng, nummar, numberofpath) {

	controls.cobj = numberofpath;
	console.log("rerouted");
	//for (let index = 0; index < paths.length; index++) {
		for (let index1 = 0; index1 < paths[numberofpath].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].polylines_hi_arr[index1]);
		}
		
		for (let index2 = 0; index2 < paths[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(paths[index].markers_hi_arr[index2]);
		}
		

		for (let index3 = 0; index3 < paths[numberofpath].polylines_arr.length; index3++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].polylines_arr[index3]);
		}


		for (let index2 = 0; index2 < paths[numberofpath].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].markers_hi_arr[index2]);
		}
		for (let index4 = 0; index4 < paths[numberofpath].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].markers_arr[index4]);
		}
		
		for (let index2 = 0; index2 < paths[numberofpath].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].markers_hi_arr[index2]);
		}
		for (let index4 = 0; index4 < paths[numberofpath].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(paths[numberofpath].markers_arr[index4]);
		}
		


		
		for (let index4 = 0; index4 < paths[index].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(paths[index].markers_arr[index4]);
		}
		
		
		for (let index2 = 0; index2 < paths[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(paths[index].markers_hi_arr[index2]);
		}
		for (let index4 = 0; index4 < paths[index].markers_arr.length; index4++) {
			//const element = array[index];
			map.removeLayer(paths[index].markers_arr[index4]);
		}
		

		paths[numberofpath].polylines_arr = [];
		paths[numberofpath].polylines_hi_arr = [];
		paths[numberofpath].markers_arr = [];
		paths[numberofpath].markers_hi_arr = [];
		//paths[index].markers_arr = [];
		//paths[index].markers_hi_arr = [];
		
		paths[index].polylines_arr = [];
		paths[index].markers_arr = [];
		paths[index].polylines_hi_arr = [];
		paths[index].markers_hi_arr = [];
		
	//}

	
	console.log(numberofpath);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_st = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		paths[numberofpath].markers_hi_arr.push(paths[numberofpath].marker_st);
	}
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_highlighted = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		paths[numberofpath].markers_hi_arr.push(paths[numberofpath].marker_highlighted);
	}

	console.log(paths[numberofpath].coordinates_array);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length-1; index++) {
		paths[numberofpath].polyline_st = L.polylineDecorator(
			paths[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
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
		
		paths[numberofpath].polylines_arr.push(paths[numberofpath].polyline_st);
		}

		console.log(numberofpath);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_st = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "marker-" + 0,
			icon: myIcon,
			draggable: true
		}).addTo(map);
		
		paths[numberofpath].markers_arr.push(paths[numberofpath].marker_st);
	}
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_highlighted = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		
		paths[numberofpath].markers_hi_arr.push(paths[numberofpath].marker_highlighted);
	}
	



	console.log(numberofpath);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_st = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "marker-" + 0,
			icon: myIcon2,
			draggable: true
		}).addTo(map);


		paths[numberofpath].marker_st.addEventListener("click", function(e) {
			choose_path(numberofpath);
			console.log("test");
		});
		
		paths[numberofpath].markers_arr.push(paths[numberofpath].marker_st);
	}
	for (let index = 0; index < paths[numberofpath].coordinates_array.length; index++) {
		paths[numberofpath].marker_highlighted = new L.marker(paths[numberofpath].coordinates_array[index], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + numberofpath + "hmarker-" + 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);


		paths[numberofpath].marker_highlighted.addEventListener("click", function(e) {
			choose_path(numberofpath);
			console.log("test");
		});
		
		paths[numberofpath].markers_hi_arr.push(paths[numberofpath].marker_highlighted);
	}



	paths[numberofpath].coordinates_array[nummar] = latlng;
	console.log(paths[numberofpath].coordinates_array);
	for (let index = 0; index < paths[numberofpath].coordinates_array.length-1; index++) {
		paths[numberofpath].polyline_st = L.polylineDecorator(
			paths[numberofpath].coordinates_array, {
				//title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
				title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
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

		paths[numberofpath].polyline_st.addEventListener("click", function(e) {
			choose_path(numberofpath);
			console.log("test");
		});
		
		paths[numberofpath].polylines_arr.push(paths[numberofpath].polyline_st);
}	
	paths[numberofpath].polyline_highlighted = L.polylineDecorator(
		paths[numberofpath].coordinates_array, {
			//title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
			title: "path-" + numberofpath + "hpolyline-" + paths[numberofpath].num_polylines,
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


	paths[numberofpath].polyline_highlighted.addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});
	
	paths[numberofpath].polylines_hi_arr.push(paths[numberofpath].polyline_highlighted);
	respawnmove_reclicked();
}
*/

function addeventl1() {
	var numberofpath = stats.totalobjects;
	paths[stats.totalobjects].markers_arr[0].addEventListener("click", function(e) {
		//console.log(paths[stats.totalobjects].markers_arr[0].latlng);
		choose_path(numberofpath);
		console.log("test");
	});
	paths[stats.totalobjects].markers_arr[0].on('dragend', function(e) {
		console.log("dragged");
	})
	paths[stats.totalobjects].markers_hi_arr[0].addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});
	paths[stats.totalobjects].markers_hi_arr[0].on('dragend', function(e) {
		console.log("dragged");
	})
}

function addeventl() {
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;
	var numpol = paths[stats.totalobjects].num_polylines;

	paths[stats.totalobjects].polylines_arr[paths[stats.totalobjects].num_polylines].addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});
	paths[stats.totalobjects].polylines_hi_arr[paths[stats.totalobjects].num_polylines].addEventListener("click", function(e) {
		choose_path(numberofpath);
		console.log("test");
	});

	paths[stats.totalobjects].markers_arr[paths[stats.totalobjects].num_markers].addEventListener("click", function(e) {
		choose_path(numberofpath);
		//var numofmarker = stats.totalobjects;
		//alert(numofmarker);
		//alert(nummar);
		//reroute_path(e.latlng, nummar, numberofpath);
		
		console.log("test");
	});
	paths[stats.totalobjects].markers_arr[paths[stats.totalobjects].num_markers].addEventListener('dragend', function(e) {
		console.log("dragged");
		console.log(paths[stats.totalobjects].coordinates_array);
		var latlng = e.target.getLatLng();
		reroute_path(latlng, nummar, numberofpath);
		//reroute_path(latlng, nummar, numberofpath);
		console.log(paths[stats.totalobjects].markers_arr[paths[stats.totalobjects].num_markers].options.marker_num);
	})
	paths[stats.totalobjects].markers_hi_arr[paths[stats.totalobjects].num_markers].addEventListener("click", function(e) {
		choose_path(numberofpath);
		//var numofmarker = stats.totalobjects;
		//alert(numofmarker);
		//alert(nummar);
		//reroute_path(e.latlng, nummar, numberofpath);
		//reroute_path(latlng, nummar, numberofpath);
		
		console.log("test");
	});
	paths[stats.totalobjects].markers_hi_arr[paths[stats.totalobjects].num_markers].addEventListener('dragend', function(e) {
		console.log("dragged");
		console.log(paths[stats.totalobjects].coordinates_array);
		var latlng = e.target.getLatLng();
		//reroute_path(latlng, nummar, numberofpath);
		reroute_path(latlng, nummar, numberofpath);
		console.log(paths[stats.totalobjects].markers_hi_arr[paths[stats.totalobjects].num_markers].options.marker_num);
	})

}