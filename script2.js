var map = L.map('map').setView([47.003670, 24.907089], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.doubleClickZoom.disable();

// vars 

var objectid = 0;
var classinstances = [];

var aircraft_num = 0;
var helicopter_num = 0;
var missile_num = 0;
var drone_num = 0;

var simulation_speed = 10;

var playbuttonbtn = document.getElementById("playbutton");
var pausebuttonbtn = document.getElementById("pausebutton");
var stopbuttonbtn = document.getElementById("stopbutton");



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
	iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
var droneicon = L.icon({
	iconUrl: "./pics_icons/drone.png",
	iconSize: [20, 39], // size of the icon
	iconAnchor: [22, 39], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

class Path {
	constructor(name, speed, icon) {
		classinstances.push(this);
		this.id = objectid;
		this.name = name;
		this.speed = speed;
		this.icon = icon;
		this.simulation_speed = simulation_speed;
		//this.movingMarker = 
		this.coordinates_array = [];
		createsub2(this.name);
		console.log("This object name is - " + this.name + ".\nThis object speed is - " + this.speed + ".\nThis object's id = " + this.id);
		console.log(classinstances);
	}


}

function changestate(name) {
	if (name == "helicopter") { new Path("helicopter", 200, aircrafticon) }
	if (name == "drone") { new Path("drone", 500, helicoptericon) }
	if (name == "aircraft") { new Path("aircraft", 800, missileicon) }
	if (name == "missile") { new Path("missile", 2000, droneicon) }
	//console.log("new object - " + objectid);
	objectid += 1;
}

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


function changerange() {
	var range = document.getElementById("speedvaluerange");
	var rangevalue = range.value;
	simulation_speed = rangevalue;
	var speedvalue = document.getElementById("speedvalx");
	speedvalue.innerHTML = simulation_speed + "X";
	console.log("speed changed and equals - " + simulation_speed);
	change_simulationspeed_in_all_objects();
	//updatesimulation_speed();
	//respawnmove();
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
	change_simulationspeed_in_all_objects();
	//updatesimulation_speed();
	//respawnmove();
}








































/*
function chooseicon(name) {
	if (name == "helicopter") { return aircrafticon }
	if (name == "drone") { return helicoptericon }
	if (name == "aircraft") { return missileicon }
	if (name == "missile") { return droneicon }
}


function speedchoose(name) {
	if (name == "helicopter") { return 200 }
	if (name == "drone") { return 500 }
	if (name == "aircraft") { return 800 }
	if (name == "missile") { return 2000 }
}

function changestate(name) {
	if (name == "helicopter") { new PathHelicopter("helicopter") }
	if (name == "drone") { new PathDrone("drone") }
	if (name == "aircraft") { new PathAircraft("aircraft") }
	if (name == "missile") { new PathMissile("missile") }
	console.log("new object - " + objectid);
	objectid += 1;
}



class Path {
	constructor() {

	}
}
*/

/*
class User {

	constructor(name) {
	  this.name = name;
	  alert(this.name + " - zhopa");
	}
  
	/*
	sayHi() {
	  alert(this.name);
	}
	
  
  }
  */
  
  // Usage:
  //let user = new User("John");
  //user.sayHi();

/*
class PathHelicopter {
	constructor(name) {
		this.id = objectid;
		this.name = name;
		this.speed = 200;
		//this.name = "helicopter";
		createsub2(this.name);
		console.log("This object name is - " + this.name + ".\nThis object speed is - " + this.speed + ".\nThis object's id = " + this.id);
	}
}

class PathDrone {
	constructor(name) {
		this.id = objectid;
		this.name = name;
		this.speed = 500;
		//this.name = "helicopter";

		




		createsub2(this.name);
		console.log("This object name is - " + this.name + ".\nThis object speed is - " + this.speed + ".\nThis object's id = " + this.id);
	}
}

class PathAircraft {
	constructor(name) {
		this.id = objectid;
		this.name = name;
		this.speed = 800;
		//this.name = "helicopter";
		createsub2(this.name);
		console.log("This object name is - " + this.name + ".\nThis object speed is - " + this.speed + ".\nThis object's id = " + this.id);
	}
}

class PathMissile {
	constructor(name) {
		this.id = objectid;
		this.name = name;
		this.speed = 2000;
		//this.name = "helicopter";
		createsub2(this.name);
		console.log("This object name is - " + this.name + ".\nThis object speed is - " + this.speed + ".\nThis object's id = " + this.id);
	}
}
*/