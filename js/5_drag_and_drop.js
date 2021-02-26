
//map.on("drop", changeColor);

target = document.getElementById("map")
target.ondragover = function (e) {
	e.preventDefault()
  e.dataTransfer.dropEffect = "move"
}

target.ondrop = function (e) {
	e.preventDefault()
  //imagePath = e.dataTransfer.getData("text/plain")
  //coordinates = map.containerPointToLatLng(L.point([e.clientX,e.clientY]))
  
  removeoldhighlight();
  imagePath = e.dataTransfer.getData("text/plain")
  coordinates = map.containerPointToLatLng(L.point([e.clientX,e.clientY]))
  //console.log(coordinates.lat+15);
  //console.log(coordinates.lng-15);
  
  
  //coordinates.lat += 15;
  //coordinates.lng -= 47.5;
  coordinates.lat += 15;
  coordinates.lng -= 65;
  console.log(coordinates);

  stats.additionals = -1;
  stats.totalobjects += 1;
  controls.cobj = stats.totalobjects;
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
  //L.marker(coordinates, {icon: myIcon2active,
  //	draggable: true}).addTo(map)
  controls.mouseover_map = true;
  paths[stats.totalobjects].num_markers += 1;



  controls.mode = "";
  paths[stats.totalobjects].latlngs_array.coordinates.push(coordinates);


  // to coordinates array
  paths[stats.totalobjects].coordinates_array.push(coordinates);
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
  
  var numberofpath = stats.totalobjects;
  //addeventl_universal(numberofpath);
  //addeventl1();
  addeventl_universal(numberofpath)
}

function dragnew(name) {
	//console.log("dragging");
	controls.mode = name;
	console.log("dragging - " + controls.mode);
	controls.mouseover_map = false;
	controls.editing_mode = "enabled";
}

function dragover (e) {
	e.preventDefault();
	console.log("dragging continues over map");
}

function dragndrop() {
	e.preventDefault();
	console.log("dropped");
}