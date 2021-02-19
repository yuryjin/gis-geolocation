var map = L.map('map').setView([47.003670, 24.907089], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.doubleClickZoom.disable(); 

/*
// zoom control options
var zoomOptions = {
	zoomInText: '1',
	zoomOutText: '0',
 };
 // Creating zoom control
 var zoom = L.control.zoom(zoomOptions);
*/

// vars 

var mode_aircraft = false;
var mode_helicopter = false;
var mode_missile = false;
var mode_drone = false;

var aircraft_num = 0;
var helicopter_num = 0;
var missile_num = 0;
var drone_num = 0;

var timestatus = "stop";

var simulation_speed = 10;

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

document.addEventListener("DOMContentLoaded", function () {
	let selectedEl = document.querySelector('#map');
	selectedEl.onclick = function (event) {
		if (
			mode_aircraft == true ||
			mode_helicopter == true ||
			mode_missile == true ||
			mode_drone == true
		) {
			if (mode_aircraft == true) {
				//var img = $('<div class="redsquare" />');
				//var img = document.createElement('div').className = "redsquare";
				var img = document.createElement('div');
				img.className = "aircraft";

				//console.log(img.className);
				//console.log("red square created");
			} else if (mode_helicopter == true) {
				//var img = $('<div class="bluecircle" />');
				var img = document.createElement('div');
				img.className = "helicopter";
				//console.log("blue circle created");
			} else if (mode_missile == true) {
				//var img = $('<div class="greentriangle" />');
				var img = document.createElement('div');
				img.className = "missile";
				//console.log("green triangle created");
			} else if (mode_drone == true) {
				//var img = $('<div class="purpleellipse" />');
				var img = document.createElement('div');
				img.className = "drone";
				//console.log("purple ellipse created");
			}
			
			createsub2(img.className);

		} else {

		}

	}
});

function changestate(name) {
	if (name == "aircraft") {
		mode_aircraft = true;
		mode_helicopter = false;
		mode_missile = false;
		mode_drone = false;
		console.log("aircraft - " + mode_aircraft + ", all else - disabled");
	} else if (name == "helicopter") {
		mode_aircraft = false;
		mode_helicopter = true;
		mode_missile = false;
		mode_drone = false;
		console.log("helicopter - " + mode_helicopter + ", all else - disabled");
	} else if (name == "missile") {
		mode_aircraft = false;
		mode_helicopter = false;
		mode_missile = true;
		mode_drone = false;
		console.log("missile - " + mode_missile + ", all else - disabled");
	} else if (name == "drone") {
		mode_aircraft = false;
		mode_helicopter = false;
		mode_missile = false;
		mode_drone = true;
		console.log("drone - " + mode_drone + ", all else - disabled");
	}
}


