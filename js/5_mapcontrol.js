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
	for (let index = 0; index < paths.length; index++) {
		oncustom(playbuttonbtn, "click", function () {
			if (paths[index].movingMarker.isRunning()) {
				console.log("already running");
			} else {
				paths[index].movingMarker.start();
			}
		});
		oncustom(pausebuttonbtn, "click", function () {
			if (paths[index].movingMarker.isRunning()) {
				paths[index].movingMarker.pause();
			} else {
				console.log("already paused");
			}
		});
		oncustom(stopbuttonbtn, "click", function () {
			if (paths[index].movingMarker.isRunning()) {
				paths[index].movingMarker.stop();
				paths[index].movingMarker.start();
				paths[index].movingMarker.pause();
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






function addElements(e, num) {
	paths[num].num_markers += 1;
	paths[num].num_polylines += 1;

	paths[num].latlngs_array.coordinates.push(e.latlng);
	
	
	// to coordinates array
	paths[num].coordinates_array.push(e.latlng);
	//console.log(paths[num].coordinates_array);
		
	paths[num].mark = new L.marker(paths[num].latlngs_array.coordinates[paths[num].num_markers], {

		title: "path-" + num + "marker-" + paths[num].num_markers,
		marker_num: paths[num].num_markers,
		pathid: num,
		icon: myIcon2active,
		draggable: true
	}).addTo(map);

	paths[num].mark_arr.push(paths[num].mark);

	if (paths[num].polyline_h !== null) {
		map.removeLayer(paths[num].polyline_h);
	}
	paths[num].polyline_h = new L.Polyline(paths[num].latlngs_array.coordinates, {color: "#00008b"}).addTo(map);
	//console.log(paths[num].latlngs_array.coordinates);
	respawnmove_uni(num);
	addeventl_uni(num);
}











map.on('click', function (e) {
	//stats.additionals = -1;
	//stats.totalobjects += 1;
	

	if (controls.editing_mode == "enabled") {
		
	
		/*
	if (controls.mouseover_map == false && controls.mode !== "" && controls.reclicked == false) {
		//console.log("created");
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
		controls.mouseover_map = true;
		paths[stats.totalobjects].num_markers += 1;



		controls.mode = "";
		paths[stats.totalobjects].latlngs_array.coordinates.push(e.latlng);


		// to coordinates array
		paths[stats.totalobjects].coordinates_array.push(e.latlng);
		console.log(paths[stats.totalobjects].coordinates_array);


		paths[stats.totalobjects].mark = new L.marker(paths[stats.totalobjects].latlngs_array.coordinates[0], {
			//rotationAngle: 120,
			//title: "path-" + stats.totalobjects + "marker-" + 0,
			title: "path-" + stats.totalobjects + "marker-" + 0,
			marker_num: 0,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);

		paths[stats.totalobjects].mark_arr.push(paths[stats.totalobjects].mark);
		
		addeventl1();
		respawnmove();
		
	}
	*/


	if (controls.mouseover_map == true && controls.reclicked == false) {
		//var num = stats.totalobjects
		//addElements(e, num);
		
		paths[stats.totalobjects].num_markers += 1;
		paths[stats.totalobjects].num_polylines += 1;
		controls.cobj = stats.totalobjects;

		paths[stats.totalobjects].latlngs_array.coordinates.push(e.latlng);
		
		
		// to coordinates array
		paths[stats.totalobjects].coordinates_array.push(e.latlng);
		//console.log(paths[stats.totalobjects].coordinates_array);
			
		paths[stats.totalobjects].mark = new L.marker(paths[stats.totalobjects].latlngs_array.coordinates[paths[stats.totalobjects].num_markers], {

			title: "path-" + stats.totalobjects + "marker-" + paths[stats.totalobjects].num_markers,
			marker_num: paths[stats.totalobjects].num_markers,
			pathid: stats.totalobjects,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);

		/*
		paths[stats.totalobjects].mark.on('dragstart', function(e) {
			choose_path(stats.totalobjects);
		})
		*/

		paths[stats.totalobjects].mark_arr.push(paths[stats.totalobjects].mark);

		if (paths[stats.totalobjects].polyline_h !== null) {
			map.removeLayer(paths[stats.totalobjects].polyline_h);
		}
		paths[stats.totalobjects].polyline_h = new L.Polyline(paths[stats.totalobjects].latlngs_array.coordinates, {color: "#00008b"}).addTo(map);
		//console.log(paths[stats.totalobjects].latlngs_array.coordinates);
		respawnmove();
		var numberofpath = stats.totalobjects;
		//addeventl_universal(numberofpath);
		//addeventl();
		addeventl_universal(numberofpath);
		addevent_polyline(numberofpath)
		
	}

	if (reclicked == true) {
		//var num = controls.cobj;
		//addElements(e, num);
		
		//console.log(reclicked);
		
		paths[controls.cobj].num_markers += 1;
		paths[controls.cobj].num_polylines += 1;
		
		//console.log(paths[0].coordinates_array);
		
		paths[controls.cobj].coordinates_array.push(e.latlng);
		//console.log(paths[controls.cobj].coordinates_array);

		
		paths[controls.cobj].mark = new L.marker(e.latlng, {
			//rotationAngle: 120,
			//title: "path-" + controls.cobj + "marker-" + paths[controls.cobj].num_markers,
			title: paths[controls.cobj].num_markers,
			marker_num: paths[controls.cobj].num_markers,
			pathid: controls.cobj,
			icon: myIcon2active,
			draggable: true
		}).addTo(map);
		paths[controls.cobj].mark_arr.push(paths[controls.cobj].mark);

		if (paths[controls.cobj].polyline_h !== null) {
			map.removeLayer(paths[controls.cobj].polyline_h);
		}
		paths[controls.cobj].polyline_h = new L.Polyline(paths[controls.cobj].coordinates_array, {color: "#00008b", pathid: controls.cobj}).addTo(map);
		
		respawnmove_reclicked();
		var numberofpath = controls.cobj;
		//addeventl_universal(numberofpath);
		//addeventl_reclicked();
		addeventl_universal(numberofpath);
		addevent_polyline(numberofpath);
		
	
	}

}
});
