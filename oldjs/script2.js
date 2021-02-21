var map = L.map('map').setView([47.003670, 24.907089], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.doubleClickZoom.disable();

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

var numobj = 0;

var mapclicked = false;

var arraypoints = [];

var myIcon2 = L.divIcon({
	className: 'my-div-icon'
});

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



window.addEventListener('click', function (e) {

	if (document.getElementById('map').contains(e.target)) {
		//console.log("clicked map");
	} else {
		mapclicked = false;
		console.log("Clicked outside map");
	}
})

map.on('click', function (e) {
	if (mapclicked == false) {
		numobj += 1;
		console.log("new object - " + numobj);
		mapclicked = true;

		// here goes function

		if (mode_aircraft == true ||
			mode_helicopter == true ||
			mode_missile == true ||
			mode_drone == true) {
			var marker = new L.marker(e.latlng, {
				icon: myIcon2
			}).addTo(map);
			arraypoints.push(e.latlng);
			console.log(arraypoints);
			var movingtarget = L.Marker.movingMarker(
				arraypoints,
				100000 / simulation_speed, {
					icon: helicoptericon
				}).addTo(map);
		} else {
			console.log("already clicked, last object number is - " + numobj);
		}
	} else {

		var marker = new L.marker(e.latlng, {
			icon: myIcon2
		}).addTo(map);
		arraypoints.push(e.latlng);
		console.log(arraypoints);
		var pathPattern = L.polylineDecorator(
			arraypoints, {
				patterns: [
					//{ offset: 12, repeat: 25, symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}}) },
					{
						offset: 0,
						repeat: 10,
						symbol: L.Symbol.dash({
							pixelSize: 0,
							pathOptions: {
								color: '#000',
								weight: 3
							}
						})
					}
				]
			}
		).addTo(map);
		var pathPattern = L.polylineDecorator(
			arraypoints, {
				patterns: [
					//{ offset: 12, repeat: 25, symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}}) },
					{
						offset: 0,
						repeat: 10,
						symbol: L.Symbol.dash({
							pixelSize: 0,
							pathOptions: {
								color: '#000',
								weight: 3
							}
						})
					}
				]
			}
		).addTo(map);
		console.log("already clicked, last object number is - " + numobj);
	}
})

/*
map.on('click', function(e){
	if (mode_aircraft == true ||
		mode_helicopter == true ||
		mode_missile == true ||
		mode_drone == true) {
			var myIcon2 = L.divIcon({className: 'my-div-icon'});
			var marker = new L.marker(e.latlng,{
				icon: myIcon2
			}).addTo(map);
			arraypoints.push(e.latlng);
			console.log(arraypoints);
			var pathPattern = L.polylineDecorator(
				arraypoints,
				{
					patterns: [
						//{ offset: 12, repeat: 25, symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}}) },
						{ offset: 0, repeat: 10, symbol: L.Symbol.dash({pixelSize: 0, pathOptions: {color: '#000', weight: 3}}) }
					]
				}
			).addTo(map);
			var aircrafticon = L.icon({
				iconUrl: "./pics_icons/plane.png",
                iconSize:     [20, 39], // size of the icon
                iconAnchor:   [22, 39], // point of the icon which will correspond to marker's location
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
			})
			var helicoptericon = L.icon({
				iconUrl: "./pics_icons/military-helicopter-bottom-view.png",
                iconSize:     [20, 39], // size of the icon
                iconAnchor:   [22, 39], // point of the icon which will correspond to marker's location
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
			})
			var missileicon = L.icon({
				iconUrl: "./pics_icons/rocket.png",
                iconSize:     [20, 39], // size of the icon
                iconAnchor:   [22, 39], // point of the icon which will correspond to marker's location
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
			})
			var droneicon = L.icon({
				iconUrl: "./pics_icons/drone.png",
                iconSize:     [20, 39], // size of the icon
                iconAnchor:   [22, 39], // point of the icon which will correspond to marker's location
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
			})
			//var aircrafticon2 = L.divIcon({className: 'aircrafticon'});
			var movingtarget = L.Marker.movingMarker(
				arraypoints,
				100000 / simulation_speed, {icon: helicoptericon}).addTo(map);
			playbutton.onclick = function() {
				if (movingtarget.isRunning()) {
					console.log("already running");
				} else {
					movingtarget.start();
				}	
			}
			stopbutton.onclick = function() {
				if (movingtarget.isRunning()) {
					movingtarget.pause();
				} else {
					console.log("already stopped");
				}
			}
			/*
			startButton.addEventListener('click', function () {
					movingtarget.start();
					/*
					startButton.addEventListener('click', function() {
						if (movingtarget.isRunning()) {
							movingtarget.pause();
						} else {
							movingtarget.start();
						}
					});
					
				});
			
	}
    
});
*/

/*
map.on('click', function(e) {
	if (mapclicked == false) {
		numobj += 1;
		console.log("new object - " + numobj);
		mapclicked = true;
	} else {
		console.log("already clicked, last object number is - " + numobj);
	}
})
*/

/*
window.addEventListener('click', function(e){
	
	if (document.getElementById('map').contains(e.target)){
		if (mapclicked == false) {
			numobj += 1;
			console.log("new object - " + numobj);
			mapclicked = true;

			// here goes function
			if (mode_aircraft == true ||
				mode_helicopter == true ||
				mode_missile == true ||
				mode_drone == true) {
					console.log("success");
					var myIcon2 = L.divIcon({className: 'my-div-icon'});
					var marker = new L.marker(e.latlng,{
						icon: myIcon2
					}).addTo(map);
			}

		} else {
			console.log("already clicked, last object number is - " + numobj);
		}





  } else{
	mapclicked = false;
  	console.log("Clicked outside map");
  }
})
*/


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