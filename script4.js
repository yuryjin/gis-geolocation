var map = L.map('map').setView([47.003670, 24.907089], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.doubleClickZoom.disable();

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
	iconSize: [20, 39], // size of the icon
	iconAnchor: [22, 39], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
var helicoptericon = L.icon({
	iconUrl: "./pics_icons/military-helicopter-bottom-view.png",
	iconSize: [20, 39], // size of the icon
	iconAnchor: [22, 39], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
var missileicon = L.icon({
	iconUrl: "./pics_icons/rocket.png",
	iconSize: [20, 39], // size of the icon
	iconAnchor: [22, 39], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
var droneicon = L.icon({
	iconUrl: "./pics_icons/drone.png",
	iconSize: [20, 39], // size of the icon
	iconAnchor: [22, 39], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

var myIcon2 = L.divIcon({
	className: 'my-div-icon'
});

var chosenicon = null;

var movingtarget = null;
var movingtarget2 = null;
var movingtarget3 = null;

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

var playbuttonbtn = document.getElementById("playbutton");
var stopbuttonbtn = document.getElementById("stopbutton");


window.addEventListener('click', function (e) {

	if (document.getElementById('map').contains(e.target) ||
		(document.getElementById('button-group-controls').contains(e.target))
	) {
		//console.log("clicked map");
	} else {
		mapclicked = false;
		mode = "";
		console.log("Clicked outside map");
		newtarget = true;
	}
})

function startall() {
	movingtarget2.start();
	movingtarget3.start();
}

function chooseicon() {
	var icon = null;
	if (mode == "aircraft") {
		icon = aircrafticon
	}
	if (mode == "helicopter") {
		icon = helicoptericon
	}
	if (mode == "missile") {
		icon = missileicon
	}
	if (mode == "drone") {
		icon = droneicon
	}
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
		oncustom(stopbuttonbtn, "click", function () {
			if (controllerarr[index].isRunning()) {
				controllerarr[index].pause();
			} else {
				console.log("already stopped");
			}
		});
	}
}


function respawnmove2() {
	if (controllerarr[numobj] !== null) {
		map.removeLayer(controllerarr[numobj]);
	}
	if (newtarget == true) {
		map.removeLayer(controllerarr[numobj]);
	}
	chosenicon = chooseicon();
	controllerarr[numobj] = L.Marker.movingMarker(
		arraypointsx,
		10000 / simulation_speed, {
			//autostart: true,
			icon: chosenicon
		}).addTo(map);
		controll();
}

function respawnmove() {
	if (movingtarget !== null) {
		map.removeLayer(movingtarget);
	}
	if (newtarget == true) {
		map.removeLayer(movingtarget);
	}
	chosenicon = chooseicon();
	movingtarget = L.Marker.movingMarker(
		arraypointsx,
		100000 / simulation_speed, {
			//autostart: true,
			icon: chosenicon
		}).addTo(map);
	//map.removeLayer(movingtarget);
	playbutton.onclick = function () {
		if (movingtarget.isRunning()) {
			console.log("already running");
		} else {
			movingtarget.start();
		}
	}
	stopbutton.onclick = function () {
		if (movingtarget.isRunning()) {
			movingtarget.pause();
		} else {
			console.log("already stopped");
		}
	}
}

map.on('click', function (e) {
	if (mode == "aircraft" ||
		mode == "helicopter" ||
		mode == "missile" ||
		mode == "drone") {
		if (mapclicked == false) {
			numobj += 1;
			console.log("new object - " + numobj);
			mapclicked = true;
			newtarget = false;

			console.log(arraypoints);

			var markervar = null;
			controllerarr.push(markervar);
			console.log(controllerarr);
			//markervar

			if (numobj > 0) {
				arraypoints.push(arraypointsx);
			}

			// here goes function 


			createcat();
			var marker = new L.marker(e.latlng, {
				icon: myIcon2
			}).addTo(map);
			arraypointsx = new Array();

			arraypointsx.push(e.latlng);
			console.log(arraypointsx);
			respawnmove2();
		} else {
			var marker = new L.marker(e.latlng, {
				icon: myIcon2
			}).addTo(map);
			arraypointsx.push(e.latlng);
			console.log(arraypointsx);
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
			respawnmove2();
		}
	}

});

function change_timestatus(value) {
	if (value == "stop") {
		timestatus = "stop";
	}
	if (value == "pause") {
		timestatus = "pause";
	}
	if (value == "play") {
		timestatus = "play";
	}
	console.log(timestatus);
}

function changerange() {
	var range = document.getElementById("speedvaluerange");
	var rangevalue = range.value;
	simulation_speed = rangevalue;
	var speedvalue = document.getElementById("speedvalx");
	speedvalue.innerHTML = simulation_speed + "X";
	console.log("speed changed and equals - " + simulation_speed);
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