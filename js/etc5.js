


map.on('click', function (e) {
	//stats.additionals = -1;
	//stats.totalobjects += 1;
	

	if (controls.editing_mode == "enabled") {
		
	

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
		paths[stats.totalobjects].coordinates_array.push(e.latlng);
		console.log(paths[stats.totalobjects].coordinates_array);
		paths[stats.totalobjects].marker_st = new L.marker(e.latlng, {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "marker-" + 0,
			title: "path-" + stats.totalobjects + "marker-" + 0,
			marker_num: 0,
			icon: myIcon2,
			draggable: true
		}).addTo(map);
		//console.log(paths[stats.totalobjects].marker_st.options.title);
		//console.log(paths[stats.totalobjects].marker_st);
		//console.log(paths[stats.totalobjects].marker_st.options.title + "titloooooooooooooooooo");

		//var markerlist = paths[stats.totalobjects].marker_st;
		//markerlist.addEventListener("click", markerOnClick);
		//paths[stats.totalobjects].marker_st.addEventListener("click", markerOnClick);

		//var markerOnClick = function(e) {
		//	alert("yes");
		//   };

		//addeventl(paths[stats.totalobjects].marker_st);

		//addeventl(paths[stats.totalobjects].marker_st);
		//marker.addEventListener

		paths[stats.totalobjects].markers_arr.push(paths[stats.totalobjects].marker_st);
		
		console.log(paths[stats.totalobjects].markers_arr[0].options.title);
		
		paths[stats.totalobjects].marker_highlighted = new L.marker(e.latlng, {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "hmarker-" + 0,
			title: "path-" + stats.totalobjects + "hmarker-" + 0,
			marker_num: 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		//console.log(paths[stats.totalobjects].marker_highlighted.options.title);
		//console.log(paths[stats.totalobjects].marker_highlighted.options.title + "titloooooooooooooooooo");

		//addeventl(paths[stats.totalobjects].marker_highlighted);

		paths[stats.totalobjects].markers_hi_arr.push(paths[stats.totalobjects].marker_highlighted);

		console.log(paths[stats.totalobjects].markers_hi_arr[0].options.title);

		controls.mouseover_map = true;
		paths[stats.totalobjects].num_markers += 1;
		respawnmove();
		addeventl1();
	}


	if (controls.mouseover_map == true && controls.reclicked == false) {
		paths[stats.totalobjects].num_markers += 1;
		paths[stats.totalobjects].num_polylines += 1;
		//console.log(paths[0].coordinates_array);
		paths[stats.totalobjects].coordinates_array.push(e.latlng);
		console.log(paths[stats.totalobjects].coordinates_array);
		paths[stats.totalobjects].marker_st = new L.marker(e.latlng, {
			//rotationAngle: 120,
			title: "path-" + stats.totalobjects + "marker-" + paths[stats.totalobjects].num_markers,
			marker_num: paths[stats.totalobjects].num_markers,
			icon: myIcon2,
			draggable: true
		}).addTo(map);

		//addeventl(paths[stats.totalobjects].marker_st);

		paths[stats.totalobjects].markers_arr.push(paths[stats.totalobjects].marker_st);

		console.log(paths[stats.totalobjects].markers_arr[paths[stats.totalobjects].num_markers].options.title);

		paths[stats.totalobjects].marker_highlighted = new L.marker(e.latlng, {
			//rotationAngle: 120,
			title: "path-" + stats.totalobjects + "hmarker-" + paths[stats.totalobjects].num_markers,
			marker_num: paths[stats.totalobjects].num_markers,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);

		//addeventl(paths[stats.totalobjects].marker_highlighted);

		paths[stats.totalobjects].markers_hi_arr.push(paths[stats.totalobjects].marker_highlighted);
		
		console.log(paths[stats.totalobjects].markers_hi_arr[paths[stats.totalobjects].num_markers].options.title);
		
		
		//arraypointsx.push(e.latlng);
		//console.log(arraypointsx);
		

		for (let index1 = 0; index1 < paths[stats.totalobjects].polylines_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(paths[stats.totalobjects].polylines_arr[index1]);
		}
		var pathPattern = L.polylineDecorator(
			paths[stats.totalobjects].coordinates_array, {
				//title: "path-" + stats.totalobjects + "polyline-" + paths[stats.totalobjects].num_polylines,
				title: "path-" + stats.totalobjects + "polyline-" + paths[stats.totalobjects].num_polylines,
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
		paths[stats.totalobjects].polylines_arr.push(pathPattern);

		console.log(paths[stats.totalobjects].polylines_arr[paths[stats.totalobjects].num_polylines].options.title);


		/*
		for (let index1 = 0; index1 < paths[stats.totalobjectsj].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(paths[stats.totalobjectsj].polylines_hi_arr[index1]);
		}
		*/
		paths[stats.totalobjects].polyline_highlighted = L.polylineDecorator(
			paths[stats.totalobjects].coordinates_array, {
				//title: "path-" + stats.totalobjects + "hpolyline-" + paths[stats.totalobjects].num_polylines,
				title: "path-" + stats.totalobjects + "hpolyline-" + paths[stats.totalobjects].num_polylines,
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
		paths[stats.totalobjects].polylines_hi_arr.push(paths[stats.totalobjects].polyline_highlighted);

		console.log(paths[stats.totalobjects].polylines_hi_arr[paths[stats.totalobjects].num_polylines].options.title);

		//console.log(paths[stats.totalobjects].polylines_hi_arr[paths[stats.totalobjects].num_polylines].options.title);
		/*
		var pathPatternactive = L.polylineDecorator(
			paths[stats.totalobjects].coordinates_array, {
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



		//paths[stats.totalobjects].num_markers += 1;
		//paths[stats.totalobjects].num_polylines += 1;
		respawnmove();
		addeventl();
	}

	if (reclicked == true) {
		console.log(reclicked);
		
		paths[controls.cobj].num_markers += 1;
		paths[controls.cobj].num_polylines += 1;
		//console.log(paths[0].coordinates_array);
		
		paths[controls.cobj].coordinates_array.push(e.latlng);
		console.log(paths[controls.cobj].coordinates_array);

		
		paths[controls.cobj].marker_st = new L.marker(e.latlng, {
			//rotationAngle: 120,
			//title: "path-" + controls.cobj + "marker-" + paths[controls.cobj].num_markers,
			title: paths[controls.cobj].num_markers,
			//marker_num: paths[controls.cobj].num_markers,
			icon: myIcon2,
			draggable: true
		}).addTo(map);
		paths[controls.cobj].markers_arr.push(paths[controls.cobj].marker_st);

		console.log(paths[controls.cobj].markers_arr[paths[controls.cobj].num_markers].options.title);
		

		
		paths[controls.cobj].marker_highlighted = new L.marker(e.latlng, {
			//rotationAngle: 120,
			//title: "path-" + controls.cobj + "hmarker-" + paths[controls.cobj].num_markers,
			title: paths[controls.cobj].num_markers,
			//marker_num: paths[controls.cobj].num_markers,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		

		paths[controls.cobj].markers_hi_arr.push(paths[controls.cobj].marker_highlighted);
		
		console.log(paths[controls.cobj].markers_hi_arr[paths[controls.cobj].num_markers].options.title);
		
		
		//arraypointsx.push(e.latlng);
		//console.log(arraypointsx);
		
		
		for (let index1 = 0; index1 < paths[controls.cobj].polylines_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(paths[controls.cobj].polylines_arr[index1]);
		}
		var pathPattern = L.polylineDecorator(
			paths[controls.cobj].coordinates_array, {
				//title: "path-" + controls.cobj + "polyline-" + paths[controls.cobj].num_polylines,
				title: "path-" + controls.cobj + "polyline-" + paths[controls.cobj].num_polylines,
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
		paths[controls.cobj].polylines_arr.push(pathPattern);

		console.log(paths[controls.cobj].polylines_arr[paths[controls.cobj].num_polylines].options.title);
			

		for (let index1 = 0; index1 < paths[controls.cobj].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(paths[controls.cobj].polylines_hi_arr[index1]);
		}
		paths[controls.cobj].polyline_highlighted = L.polylineDecorator(
			paths[controls.cobj].coordinates_array, {
				//title: "path-" + controls.cobj + "hpolyline-" + paths[controls.cobj].num_polylines,
				title: "path-" + controls.cobj + "hpolyline-" + paths[controls.cobj].num_polylines,
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
		paths[controls.cobj].polylines_hi_arr.push(paths[controls.cobj].polyline_highlighted);

		console.log(paths[controls.cobj].polylines_hi_arr[paths[controls.cobj].num_polylines].options.title);


		//paths[controls.cobj].num_markers += 1;
		//paths[controls.cobj].num_polylines += 1;

		//console.log(paths[controls.cobj].polylines_hi_arr[paths[controls.cobj].num_polylines].options.title);
		/*
		var pathPatternactive = L.polylineDecorator(
			paths[controls.cobj].coordinates_array, {
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
		//paths[controls.cobj].num_markers += 1;
		//paths[controls.cobj].num_polylines += 1;
		/*


		//addeventl(paths[controls.cobj].marker_st);



		//addeventl(paths[controls.cobj].marker_highlighted);


		*/




		
		respawnmove_reclicked();
		addeventl_reclicked();
		//addeventl_reclicked();
	
	}

}
});