var oncustom = (function () {
	if (window.addEventListener) {
		return function (target, type, listener) {
			target.addEventListener(type, listener, false);
		};
	} else {
		return function (object, sEvent, fpNotify) {
			object.attachEvent("on" + sEvent, fpNotify);
		};
	}
}());

function controll() {
	for (let index = 0; index < classinstances.length; index++) {
		oncustom(playbuttonbtn, "click", function () {
			if (classinstances[index].movingMarker.isRunning()) {
				console.log("already running");
			} else {
				classinstances[index].movingMarker.start();
			}
		});
		oncustom(pausebuttonbtn, "click", function () {
			if (classinstances[index].movingMarker.isRunning()) {
				classinstances[index].movingMarker.pause();
			} else {
				console.log("already paused");
			}
		});
		oncustom(stopbuttonbtn, "click", function () {
			if (classinstances[index].movingMarker.isRunning()) {
				classinstances[index].movingMarker.stop();
				classinstances[index].movingMarker.start();
				classinstances[index].movingMarker.pause();
			} else {
				console.log("already stopped");
			}
		});
	}
}

window.addEventListener('click', function (e) {

	if (
		document.getElementById('map').contains(e.target) ||
		document.getElementById('controls').contains(e.target)
		//|| document.getElementById('button-group-controls').contains(e.target)
	) {
		//console.log("clicked map");
	} else if (document.getElementById('button-group-controls').contains(e.target)) {
		mapclicked = false;
	} else {
		mapclicked = false;
		mode = "";
		console.log("Clicked outside map");
		newtarget = true;
	}
})

document.getElementById("map").addEventListener("mouseleave", function() {
	controls.mouseover_map = false;
})

map.on('click', function (e) {
	//stats.additionals = -1;
	//stats.totalobjects += 1;
	

	if (controls.mouseover_map == false && controls.mode !== "" && controls.reclicked == false) {
		console.log("created");
		removeoldhighlight();
		stats.additionals = -1;
		stats.totalobjects += 1;
		if (controls.mode == "helicopter") {
			new Path("helicopter", 200, helicoptericon )
		}
		if (controls.mode == "drone") {
			new Path("drone", 500, droneicon)
		}
		if (controls.mode == "aircraft") {
			new Path("aircraft", 800, aircrafticon )
		}
		if (controls.mode == "missile") {
			new Path("missile", 2000, missileicon)
		}
		//controls.mode = "";
		controls.mode = "";
		classinstances[stats.totalobjects].coordinates_array.push(e.latlng);
		console.log(classinstances[stats.totalobjects].coordinates_array);
		classinstances[stats.totalobjects].marker_st = new L.marker(e.latlng, {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "marker-" + 0,
			title: "path-" + stats.totalobjects + "marker-" + 0,
			marker_num: 0,
			icon: myIcon2,
			draggable: true
		}).addTo(map);
		//console.log(classinstances[stats.totalobjects].marker_st.options.title);
		//console.log(classinstances[stats.totalobjects].marker_st);
		//console.log(classinstances[stats.totalobjects].marker_st.options.title + "titloooooooooooooooooo");

		//var markerlist = classinstances[stats.totalobjects].marker_st;
		//markerlist.addEventListener("click", markerOnClick);
		//classinstances[stats.totalobjects].marker_st.addEventListener("click", markerOnClick);

		//var markerOnClick = function(e) {
		//	alert("yes");
		//   };

		//addeventl(classinstances[stats.totalobjects].marker_st);

		//addeventl(classinstances[stats.totalobjects].marker_st);
		//marker.addEventListener

		classinstances[stats.totalobjects].markers_arr.push(classinstances[stats.totalobjects].marker_st);
		
		console.log(classinstances[stats.totalobjects].markers_arr[0].options.title);
		
		classinstances[stats.totalobjects].marker_highlighted = new L.marker(e.latlng, {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + stats.totalobjects + "hmarker-" + 0,
			marker_num: 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		//console.log(classinstances[stats.totalobjects].marker_highlighted.options.title);
		//console.log(classinstances[stats.totalobjects].marker_highlighted.options.title + "titloooooooooooooooooo");

		//addeventl(classinstances[stats.totalobjects].marker_highlighted);

		classinstances[stats.totalobjects].markers_hi_arr.push(classinstances[stats.totalobjects].marker_highlighted);

		console.log(classinstances[stats.totalobjects].markers_hi_arr[0].options.title);

		controls.mouseover_map = true;
		classinstances[stats.totalobjects].num_markers += 1;
		respawnmove();
		addeventl1();
	}


	if (controls.mouseover_map == true && controls.reclicked == false) {
		classinstances[stats.totalobjects].num_markers += 1;
		classinstances[stats.totalobjects].num_polylines += 1;
		//console.log(classinstances[0].coordinates_array);
		classinstances[stats.totalobjects].coordinates_array.push(e.latlng);
		console.log(classinstances[stats.totalobjects].coordinates_array);
		classinstances[stats.totalobjects].marker_st = new L.marker(e.latlng, {
			//rotationAngle: 120,
			title: "path-" + stats.totalobjects + "marker-" + classinstances[stats.totalobjects].num_markers,
			marker_num: classinstances[stats.totalobjects].num_markers,
			icon: myIcon2,
			draggable: true
		}).addTo(map);

		//addeventl(classinstances[stats.totalobjects].marker_st);

		classinstances[stats.totalobjects].markers_arr.push(classinstances[stats.totalobjects].marker_st);

		console.log(classinstances[stats.totalobjects].markers_arr[classinstances[stats.totalobjects].num_markers].options.title);

		classinstances[stats.totalobjects].marker_highlighted = new L.marker(e.latlng, {
			//rotationAngle: 120,
			title: "path-" + stats.totalobjects + "hmarker-" + classinstances[stats.totalobjects].num_markers,
			marker_num: classinstances[stats.totalobjects].num_markers,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);

		//addeventl(classinstances[stats.totalobjects].marker_highlighted);

		classinstances[stats.totalobjects].markers_hi_arr.push(classinstances[stats.totalobjects].marker_highlighted);
		
		console.log(classinstances[stats.totalobjects].markers_hi_arr[classinstances[stats.totalobjects].num_markers].options.title);
		
		
		//arraypointsx.push(e.latlng);
		//console.log(arraypointsx);
		
		var pathPattern = L.polylineDecorator(
			classinstances[stats.totalobjects].coordinates_array, {
				//title: "path-" + stats.totalobjects + "polyline-" + classinstances[stats.totalobjects].num_polylines,
				title: "path-" + stats.totalobjects + "polyline-" + classinstances[stats.totalobjects].num_polylines,
				patterns: [{
					offset: 0,
					repeat: 10,
					symbol: L.Symbol.dash({
						pixelSize: 0,
						//title: "1",
						pathOptions: {
							color: '#000',
							weight: 3
						}
					})
				}]
			}
		).addTo(map);
		classinstances[stats.totalobjects].polylines_arr.push(pathPattern);

		console.log(classinstances[stats.totalobjects].polylines_arr[classinstances[stats.totalobjects].num_polylines].options.title);

		classinstances[stats.totalobjects].polyline_highlighted = L.polylineDecorator(
			classinstances[stats.totalobjects].coordinates_array, {
				//title: "path-" + stats.totalobjects + "hpolyline-" + classinstances[stats.totalobjects].num_polylines,
				title: "path-" + stats.totalobjects + "hpolyline-" + classinstances[stats.totalobjects].num_polylines,
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
		classinstances[stats.totalobjects].polylines_hi_arr.push(classinstances[stats.totalobjects].polyline_highlighted);

		console.log(classinstances[stats.totalobjects].polylines_hi_arr[classinstances[stats.totalobjects].num_polylines].options.title);

		//console.log(classinstances[stats.totalobjects].polylines_hi_arr[classinstances[stats.totalobjects].num_polylines].options.title);
		/*
		var pathPatternactive = L.polylineDecorator(
			classinstances[stats.totalobjects].coordinates_array, {
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
		*/



		//classinstances[stats.totalobjects].num_markers += 1;
		//classinstances[stats.totalobjects].num_polylines += 1;
		respawnmove();
		addeventl();
	}

	if (reclicked == true) {
		console.log(reclicked);
		
		classinstances[controls.cobj].num_markers += 1;
		classinstances[controls.cobj].num_polylines += 1;
		//console.log(classinstances[0].coordinates_array);
		
		classinstances[controls.cobj].coordinates_array.push(e.latlng);
		console.log(classinstances[controls.cobj].coordinates_array);

		classinstances[controls.cobj].marker_st = new L.marker(e.latlng, {
			//rotationAngle: 120,
			//title: "path-" + controls.cobj + "marker-" + classinstances[controls.cobj].num_markers,
			title: classinstances[controls.cobj].num_markers,
			//marker_num: classinstances[controls.cobj].num_markers,
			icon: myIcon2,
			draggable: true
		}).addTo(map);
		classinstances[controls.cobj].markers_arr.push(classinstances[controls.cobj].marker_st);

		console.log(classinstances[controls.cobj].markers_arr[classinstances[controls.cobj].num_markers].options.title);

		classinstances[controls.cobj].marker_highlighted = new L.marker(e.latlng, {
			//rotationAngle: 120,
			//title: "path-" + controls.cobj + "hmarker-" + classinstances[controls.cobj].num_markers,
			title: classinstances[controls.cobj].num_markers,
			//marker_num: classinstances[controls.cobj].num_markers,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		

		classinstances[controls.cobj].markers_hi_arr.push(classinstances[controls.cobj].marker_highlighted);
		
		console.log(classinstances[controls.cobj].markers_hi_arr[classinstances[controls.cobj].num_markers].options.title);
		
		
		//arraypointsx.push(e.latlng);
		//console.log(arraypointsx);
		
		var pathPattern = L.polylineDecorator(
			classinstances[controls.cobj].coordinates_array, {
				//title: "path-" + controls.cobj + "polyline-" + classinstances[controls.cobj].num_polylines,
				title: "path-" + controls.cobj + "polyline-" + classinstances[controls.cobj].num_polylines,
				patterns: [{
					offset: 0,
					repeat: 10,
					symbol: L.Symbol.dash({
						pixelSize: 0,
						//title: "1",
						pathOptions: {
							color: '#000',
							weight: 3
						}
					})
				}]
			}
		).addTo(map);
		classinstances[controls.cobj].polylines_arr.push(pathPattern);

		console.log(classinstances[controls.cobj].polylines_arr[classinstances[controls.cobj].num_polylines].options.title);

		classinstances[controls.cobj].polyline_highlighted = L.polylineDecorator(
			classinstances[controls.cobj].coordinates_array, {
				//title: "path-" + controls.cobj + "hpolyline-" + classinstances[controls.cobj].num_polylines,
				title: "path-" + controls.cobj + "hpolyline-" + classinstances[controls.cobj].num_polylines,
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
		classinstances[controls.cobj].polylines_hi_arr.push(classinstances[controls.cobj].polyline_highlighted);

		console.log(classinstances[controls.cobj].polylines_hi_arr[classinstances[controls.cobj].num_polylines].options.title);


		classinstances[controls.cobj].num_markers += 1;
		classinstances[controls.cobj].num_polylines += 1;

		//console.log(classinstances[controls.cobj].polylines_hi_arr[classinstances[controls.cobj].num_polylines].options.title);
		/*
		var pathPatternactive = L.polylineDecorator(
			classinstances[controls.cobj].coordinates_array, {
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
		//classinstances[controls.cobj].num_markers += 1;
		//classinstances[controls.cobj].num_polylines += 1;
		/*


		//addeventl(classinstances[controls.cobj].marker_st);



		//addeventl(classinstances[controls.cobj].marker_highlighted);


		*/




		
		respawnmove_reclicked();
		//addeventl_reclicked();
	
	}
});