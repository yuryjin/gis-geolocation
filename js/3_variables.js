var classinstances = [];

var markers_and_poly = [];

var highlighted_poly = null;

var reclicked = false;

var controls = {
	mode: "",
	mouseover_map: false,
	reclicked: false,
	cobj: 0
}

var stats = {
	totalobjects: -1,
	helicopters: -1,
	drones: -1,
	aircrafts: -1,
	missiles: -1,

	additionals: -1,
	timestatus: "stop",
	simulation_speed: 10,
}

var aircrafticon = L.icon({
	iconUrl: "./pics_icons/airplane-mode.png",
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

var myIcon2active = L.divIcon({
	className: 'my-div-icon-active'
});

var playbuttonbtn = document.getElementById("playbutton");
var pausebuttonbtn = document.getElementById("pausebutton");
var stopbuttonbtn = document.getElementById("stopbutton");

var iter = 0;
