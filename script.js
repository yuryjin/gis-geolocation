var map = L.map('map').setView([47.003670, 24.907089], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.doubleClickZoom.disable(); 

map.on('click', function(e){
	if (mode_aircraft == true ||
		mode_helicopter == true ||
		mode_missile == true ||
		mode_drone == true) {
			var marker = new L.marker(e.latlng).addTo(map);
			arraypoints.push(e.latlng);
			console.log(arraypoints);
	}
    
});




var arraypoints = [];

function clickedbtn() {
	//arraypoints.push(arraypoints[0]);
	L.polyline(arraypoints,
		{color: 'green'}).addTo(map);
}

/*
var parisKievLL = [[48.8567, 2.3508], [50.45, 30.523333]];
var londonParisRomeBerlinBucarest = [[51.507222, -0.1275], [48.8567, 2.3508],
[41.9, 12.5], [52.516667, 13.383333], [44.4166,26.1]];
var londonBrusselFrankfurtAmsterdamLondon = [[51.507222, -0.1275], [50.85, 4.35],
[50.116667, 8.683333], [52.366667, 4.9], [51.507222, -0.1275]];
var barcelonePerpignanPauBordeauxMarseilleMonaco = [
    [41.385064, 2.173403],
    [42.698611, 2.895556],
    [43.3017, -0.3686],
    [44.837912, -0.579541],
    [43.296346, 5.369889],
    [43.738418, 7.424616]
];


map.fitBounds(londonParisRomeBerlinBucarest);

//========================================================================
var marker5 = L.Marker.movingMarker(
    barcelonePerpignanPauBordeauxMarseilleMonaco,
    10000, {autostart: true}).addTo(map);

	/*
marker5.addStation(1, 2000);
marker5.addStation(2, 2000);
marker5.addStation(3, 2000);
marker5.addStation(4, 2000);


L.polyline(barcelonePerpignanPauBordeauxMarseilleMonaco,
    {color: 'green'}).addTo(map);

//var marker = L.marker([49.55,50.33]).addTo(map);
*/






















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


