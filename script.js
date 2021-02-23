var map = L.map('map').setView([47.003670, 24.907089], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.doubleClickZoom.disable();






  // two GeoJSON bounding boxes.  the first smaller than the second.
  var boundingBoxes = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          color: 'orange'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-84.39010620117188, 33.747965492070236],
              [-84.39010620117188, 33.75431694675655],
              [-84.37311172485352, 33.75431694675655],
              [-84.37311172485352, 33.747965492070236],
              [-84.39010620117188, 33.747965492070236]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          color: '#0ceb70'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-84.39963340759277, 33.744254312044156],
              [-84.39963340759277, 33.75817040902938],
              [-84.38444137573242, 33.75817040902938],
              [-84.38444137573242, 33.744254312044156],
              [-84.39963340759277, 33.744254312044156]
            ]
          ]
        }
      }
    ]
  };



  var line = turf.lineString([
  [-76.091308, 18.427501],
  [-76.695556, 18.729501],
  [-76.552734, 19.40443],
  [-74.61914, 19.134789],
  [-73.652343, 20.07657],
  [-73.157958, 20.210656]
]);

var curved = turf.bezierSpline(line);

  // query for census block points that intersect the smaller box
  var query = L.esri.query({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/0'
  });
  query.intersects(boundingBoxes.features[0]);
  query.run(function (err, censusCollection, raw) {
    if (err) {
      return;
    }
    var features = censusCollection.features;
    // loop through the collection of census block points
    for (var i = 0; i < features.length; i++) {
      // if the point is inside (or contained by, the bigger box) draw it in red
      if (turf.inside(features[i], boundingBoxes.features[1])) {
        L.geoJSON(features[i], {
          pointToLayer: function (geoJsonPoint, latlng) {
            return L.circleMarker(latlng, {
              color: '#ff0066'
            });
          }
        }).addTo(map);
      } else {
        // if it is not contained by the bigger box, make it gray and partially transparent.
        L.geoJSON(features[i], {
          pointToLayer: function (geoJsonPoint, latlng) {
            return L.circleMarker(latlng, {
              radius: 10,
              color: 'gray',
              opacity: 0.2
            });
          }
        }).addTo(map);
      }
    }
  });















/*
var line = turf.lineString([
  [-76.091308, 18.427501],
  [-76.695556, 18.729501],
  [-76.552734, 19.40443],
  [-74.61914, 19.134789],
  [-73.652343, 20.07657],
  [-73.157958, 20.210656]
]);

var curved = turf.bezierSpline(line);
*/

/*
//quadratic bezier curve
var pathOne = L.curve(['M',[50.14874640066278,14.106445312500002],
					   'Q',[51.67255514839676,16.303710937500004],
						   [50.14874640066278,18.676757812500004],
					   'T',[49.866316729538674,25.0927734375]]).addTo(map);
*/

// vars 

var objectid = -1;

var objectx = {
	id: 0,
	mode: "helicopter",
	coords: []
};
var objectarray = [];

// classes

/*
class Path {
	constructor() {
		
	}
}
*/


// vars 

var mode = "";

var aircraft_num = 0;
var helicopter_num = 0;
var missile_num = 0;
var drone_num = 0;

var timestatus = "stop";

var simulation_speed = 10;

var numobj = -1;

var mapclicked = false;

var arraypoints = [];

var arraypointsx = [];

var newtarget = true;



var controllerarr = [];
var controlnum = 0;

var aircrafticon = L.icon({
	iconUrl: "./pics_icons/plane.png",
	iconSize: [20, 20], // size of the icon
	iconAnchor: [5, 5], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
	className: 'turned-icon'
})
var helicoptericon = L.icon({
	iconUrl: "./pics_icons/military-helicopter-bottom-view.png",
	iconSize: [20, 20], // size of the icon
	iconAnchor: [5, 5], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
	className: 'turned-icon'
})
var missileicon = L.icon({
	iconUrl: "./pics_icons/rocket.png",
	iconSize: [20, 20], // size of the icon
	iconAnchor: [5, 5], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
	className: 'turned-icon'
})
var droneicon = L.icon({
	iconUrl: "./pics_icons/drone.png",
	iconSize: [20, 20], // size of the icon
	iconAnchor: [5, 5], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
	className: 'turned-icon'
})

var myIcon2 = L.divIcon({
	className: 'my-div-icon'
});

var chosenicon = null;

var movingtarget = null;

var movingmarkercreated = false;

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

function showdistance(arrayc) {
	var totaldistance = 0;
	var distance = 0;
	for (let index = 0; index < arrayc.length; index++) {
		distance = arrayc[0].distanceTo(arrayc[1]).toFixed(0)/1000;
		totaldistance += distance;
	}
	//var text = totaldistance + ' km';
	//console.log(text);
	return totaldistance;
}

var playbuttonbtn = document.getElementById("playbutton");
var pausebuttonbtn = document.getElementById("pausebutton");
var stopbuttonbtn = document.getElementById("stopbutton");

//var speedtype = null;

function updatesimulation_speed() {
	console.log(mode);
	for (let index = 0; index < controllerarr.length; index++) {
		var speedtype = null;
		if (objectarray[index].mode == "helicopter") { speedtype = 200 }
		if (objectarray[index].mode == "drone") { speedtype = 500 }
		if (objectarray[index].mode == "aircraft") { speedtype = 800 }
		if (objectarray[index].mode == "missile") { speedtype = 2000 }

		controllerarr[index].pause();
		controllerarr[index]._currentDuration = totaldistance/speedtype * 3600000 / simulation_speed;
		console.log("speed of object $ - " + index + ". equals " + speedtype);
		controllerarr[index].start();
	}
}

function calculate() {
	console.log("zhopa");
	//console.log(distance(arraypointsx[0], arraypointsx[1]));
	console.log(arraypointsx[0], arraypointsx[1]);
}

window.addEventListener('click', function (e) {

	if (
		document.getElementById('map').contains(e.target) 
		|| document.getElementById('controls').contains(e.target)
		//|| document.getElementById('button-group-controls').contains(e.target)
	) {
		//console.log("clicked map");
	} else if (document.getElementById('button-group-controls').contains(e.target)) {
		mapclicked = false;
	}
	else {
		mapclicked = false;
		mode = "";
		console.log("Clicked outside map");
		newtarget = true;
	}
})

var chosenspeed;
var speedtotal;

function choosespeed() {
	var speed = null;
	if (mode == "aircraft") { speed = 800 }
	if (mode == "helicopter") { speed = 200 }
	if (mode == "missile") { speed = 2000 }
	if (mode == "drone") { speed = 500 }
	return speed;	
}

function chooseicon() {
	var icon = null;
	if (mode == "aircraft") { icon = aircrafticon }
	if (mode == "helicopter") { icon = helicoptericon }
	if (mode == "missile") { icon = missileicon }
	if (mode == "drone") { icon = droneicon }
	return icon;
}

function controll() {
	for (let index = 0; index < controllerarr.length; index++) {
		//const element = array[index];
		oncustom(playbuttonbtn, "click", function () {
			if (controllerarr[index].isRunning()) {
				console.log("already running");
			} else {
				controllerarr[index].start();
			}
		});
		oncustom(pausebuttonbtn, "click", function () {
			if (controllerarr[index].isRunning()) {
				controllerarr[index].pause();
			} else {
				console.log("already paused");
			}
		});
		oncustom(stopbuttonbtn, "click", function () {
			if (controllerarr[index].isRunning()) {
				controllerarr[index].stop();
				controllerarr[index].start();
				controllerarr[index].pause();
			} else {
				console.log("already stopped");
			}
		});
	}
}

function respawnmove() {
	if (controllerarr[numobj] !== null) {
		map.removeLayer(controllerarr[numobj]);
	}
	if (newtarget == true) {
		map.removeLayer(controllerarr[numobj]);
	}
	chosenicon = chooseicon();
	totaldistance = showdistance(arraypointsx);
	chosenspeed = choosespeed();
	//simulation_speed_local = simulation_speed;
	//console.log("local - " + simulation_speed_local);
	//console.log("total - " + simulation_speed);
	speedtotal = totaldistance/chosenspeed * 3600000 / simulation_speed;
	console.log("total distance is - " + totaldistance + "km");
	controllerarr[numobj] = L.Marker.movingMarker(
		arraypointsx,
		speedtotal, {
			//autostart: true,
			rotationAngle: 240,
			icon: chosenicon
		}).addTo(map);
		controll();
}

map.on('click', function (e) {
	if (mode == "aircraft" ||
		mode == "helicopter" ||
		mode == "missile" ||
		mode == "drone") {
		if (mapclicked == false) {
			objectid += 1;
			var object_temp = {
				id: objectid,
				mode: mode
			}
			objectarray.push(object_temp);



			console.log(objectarray);
			numobj += 1;
			//console.log("new object - " + numobj);
			mapclicked = true;
			newtarget = false;

			//console.log(arraypoints);

			var markervar = null;
			controllerarr.push(markervar);
			//console.log(controllerarr);
			//markervar

			if (numobj > 0) {
				arraypoints.push(arraypointsx);
			}

			// here goes function 


			createcat();
			var marker = new L.marker(e.latlng, {
				//rotationAngle: 120,
				icon: myIcon2,
				draggable: true
			}).addTo(map);
			arraypointsx = new Array();

			arraypointsx.push(e.latlng);
			//console.log(arraypointsx);
			respawnmove();
		} else {
			var marker = new L.marker(e.latlng, {
				//rotationAngle: 120,
				icon: myIcon2,
				draggable: true
			}).addTo(map);
			arraypointsx.push(e.latlng);
			//console.log(arraypointsx);
			var pathPattern = L.polylineDecorator(
				arraypointsx, {
					patterns: [{
						offset: 0,
						repeat: 10,
						symbol: L.Symbol.dash({
							pixelSize: 0,
							pathOptions: {
								color: '#000',
								weight: 3
							}
						})
					}]
				}
			).addTo(map);
			var pathOne = L.curve(['M',[50.14874640066278,14.106445312500002],
					   'Q',[51.67255514839676,16.303710937500004],
						   [50.14874640066278,18.676757812500004],
					   'T',[49.866316729538674,25.0927734375]]).addTo(map);
			respawnmove();
		}
	}

});

function changerange() {
	var range = document.getElementById("speedvaluerange");
	var rangevalue = range.value;
	simulation_speed = rangevalue;
	var speedvalue = document.getElementById("speedvalx");
	speedvalue.innerHTML = simulation_speed + "X";
	console.log("speed changed and equals - " + simulation_speed);
	updatesimulation_speed();
}

function changespeedvalue(val) {
	if (val == 1) {
		simulation_speed += 1;
	}
	if (val == -1) {
		simulation_speed -= 1;
	}
	var speedvalue = document.getElementById("speedvalx");
	speedvalue.innerHTML = simulation_speed + "X";
	console.log("speed changed and equals - " + simulation_speed);
	updatesimulation_speed();
}

// functions

function createsub2(name) {
	let targetslist = document.querySelector('#targetslist')
	let tr = document.createElement('div');

	if (name == "aircraft") {
		aircraft_num += 1;
		tr.innerHTML = "aircraft - " + aircraft_num;
	}
	if (name == "helicopter") {
		helicopter_num += 1;
		tr.innerHTML = "helicopter - " + helicopter_num;
	}
	if (name == "missile") {
		missile_num += 1;
		tr.innerHTML = "missile - " + missile_num;
	}
	if (name == "drone") {
		drone_num += 1;
		tr.innerHTML = "drone - " + drone_num;
	}
	tr.className = "targetslistobject text-center";
	targetslist.append(tr);
}

function createcat() {
	var img = document.createElement('div');
	img.className = mode;
	createsub2(img.className);
}

function changestate(name) {
	movingmarkercreated = false;
	mode = name;
	console.log("current mod is - " + mode);
}