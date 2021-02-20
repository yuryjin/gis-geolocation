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
	}
    
});




var arraypoints = [];

function clickedbtn() {
	console.log("used");
}

function clickedbtn2() {
	//arraypoints.push(arraypoints[0]);
	var movingtarget = L.Marker.movingMarker(
		arraypoints,
		100000 / simulation_speed, {autostart: true}).addTo(map);
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

var polygon = L.polyline([    [41.385064, 2.173403],
    [42.698611, 2.895556],
    [43.3017, -0.3686],
    [44.837912, -0.579541],
    [43.296346, 5.369889],
    [43.738418, 7.424616]], {color: "#ff7800", weight: 1}).addTo(map);
var pd = L.polylineDecorator(polygon, {
	patterns: [
		{offset: 0, repeat: 10, symbol: L.Symbol.dash({pixelSize: 0})}
	]
}).addTo(map);
/*
    // --- Simple arrow ---
    var arrow = L.polyline([[57, -19], [60, -12]], {}).addTo(map);
    var arrowHead = L.polylineDecorator(arrow, {
        patterns: [
            {offset: '100%', repeat: 0, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
        ]
    }).addTo(map);

    // --- Polygon, with an inner ring ---
    var polygon = L.polygon([[[54, -6], [55, -7], [56, -2], [55, 1], [53, 0]], [[54, -3], [54, -2], [55, -1], [55, -5]]], {color: "#ff7800", weight: 1}).addTo(map);
    var pd = L.polylineDecorator(polygon, {
        patterns: [
            {offset: 0, repeat: 10, symbol: L.Symbol.dash({pixelSize: 0})}
        ]
    }).addTo(map);

    // --- Multi-pattern without Polyline ---
    var pathPattern = L.polylineDecorator(
        [ [ 49.543519, -12.469833 ], [ 49.808981, -12.895285 ], [ 50.056511, -13.555761 ], [ 50.217431, -14.758789 ], [ 50.476537, -15.226512 ], [ 50.377111, -15.706069 ], [ 50.200275, -16.000263 ], [ 49.860606, -15.414253 ], [ 49.672607, -15.710152 ], [ 49.863344, -16.451037 ], [ 49.774564, -16.875042 ], [ 49.498612, -17.106036 ], [ 49.435619, -17.953064 ], [ 49.041792, -19.118781 ], [ 48.548541, -20.496888 ], [ 47.930749, -22.391501 ], [ 47.547723, -23.781959 ], [ 47.095761, -24.941630 ], [ 46.282478, -25.178463 ], [ 45.409508, -25.601434 ], [ 44.833574, -25.346101 ], [ 44.039720, -24.988345 ] ],
        {
            patterns: [
                { offset: 12, repeat: 25, symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}}) },
                { offset: 0, repeat: 25, symbol: L.Symbol.dash({pixelSize: 0}) }
            ]
        }
    ).addTo(map);

    // --- Markers proportionnaly located ---
    var markerLine = L.polyline([[58.44773, -28.65234], [52.9354, -23.33496], [53.01478, -14.32617], [58.1707, -10.37109], [59.68993, -0.65918]], {}).addTo(map);
    var markerPatterns = L.polylineDecorator(markerLine, {
        patterns: [
            { offset: '5%', repeat: '10%', symbol: L.Symbol.marker()}
        ]
    }).addTo(map);

    // --- Example with a rotated marker ---
    var pathPattern = L.polylineDecorator(
        [ [ 42.9, -15 ], [ 44.18, -11.4 ], [ 45.77, -8.0 ], [ 47.61, -6.4 ], [ 49.41, -6.1 ], [ 51.01, -7.2 ] ],
        {
            patterns: [
                { offset: 0, repeat: 10, symbol: L.Symbol.dash({pixelSize: 5, pathOptions: {color: '#000', weight: 1, opacity: 0.2}}) },
                { offset: '16%', repeat: '33%', symbol: L.Symbol.marker({rotate: true, markerOptions: {
                    icon: L.icon({
                        iconUrl: 'icon_plane.png',
                        iconAnchor: [16, 16]
                    })
                }})}
            ]
        }
    ).addTo(map);

    // --- Example with an array of Polylines ---
    var multiCoords1 = [
        [[47.5468, -0.7910], [48.8068, -0.1318], [49.1242, 1.6699], [49.4966, 3.2958], [51.4266, 2.8564], [51.7542, 2.1093]],
        [[48.0193, -2.8125], [46.3165, -2.8564], [44.9336, -1.0107], [44.5278, 1.5820], [44.8714, 3.7353], [45.8287, 5.1855], [48.1953, 5.1416]],
        [[45.9205, 0.4394], [46.7699, 0.9228], [47.6061, 2.5488], [47.7540, 3.3837]]
    ];
    var plArray = [];
    for(var i=0; i<multiCoords1.length; i++) {
        plArray.push(L.polyline(multiCoords1[i]).addTo(map));
    }
    L.polylineDecorator(multiCoords1, {
        patterns: [
            {offset: 25, repeat: 50, symbol: L.Symbol.arrowHead({pixelSize: 15, pathOptions: {fillOpacity: 1, weight: 0}})}
        ]
    }).addTo(map);
*/

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
var arrow = L.polyline([[57, -19], [60, -12]], {}).addTo(map);
var arrowHead = L.polylineDecorator(arrow, {
	patterns: [
		{offset: '100%', repeat: 0, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
	]
}).addTo(map);

// --- Polygon, with an inner ring ---
var polygon = L.polygon([[[54, -6], [55, -7], [56, -2], [55, 1], [53, 0]], [[54, -3], [54, -2], [55, -1], [55, -5]]], {color: "#ff7800", weight: 1}).addTo(map);
var pd = L.polylineDecorator(polygon, {
	patterns: [
		{offset: 0, repeat: 10, symbol: L.Symbol.dash({pixelSize: 0})}
	]
}).addTo(map);

// --- Multi-pattern without Polyline ---
var pathPattern = L.polylineDecorator(
	[ [ 49.543519, -12.469833 ], [ 49.808981, -12.895285 ], [ 50.056511, -13.555761 ], [ 50.217431, -14.758789 ], [ 50.476537, -15.226512 ], [ 50.377111, -15.706069 ], [ 50.200275, -16.000263 ], [ 49.860606, -15.414253 ], [ 49.672607, -15.710152 ], [ 49.863344, -16.451037 ], [ 49.774564, -16.875042 ], [ 49.498612, -17.106036 ], [ 49.435619, -17.953064 ], [ 49.041792, -19.118781 ], [ 48.548541, -20.496888 ], [ 47.930749, -22.391501 ], [ 47.547723, -23.781959 ], [ 47.095761, -24.941630 ], [ 46.282478, -25.178463 ], [ 45.409508, -25.601434 ], [ 44.833574, -25.346101 ], [ 44.039720, -24.988345 ] ],
	{
		patterns: [
			{ offset: 12, repeat: 25, symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}}) },
			{ offset: 0, repeat: 25, symbol: L.Symbol.dash({pixelSize: 0}) }
		]
	}
).addTo(map);



// --- Example with a rotated marker ---
var pathPattern = L.polylineDecorator(
	[ [ 42.9, -15 ], [ 44.18, -11.4 ], [ 45.77, -8.0 ], [ 47.61, -6.4 ], [ 49.41, -6.1 ], [ 51.01, -7.2 ] ],
	{
		patterns: [
			{ offset: 0, repeat: 10, symbol: L.Symbol.dash({pixelSize: 5, pathOptions: {color: '#000', weight: 1, opacity: 0.2}}) },
			{ offset: '16%', repeat: '33%', symbol: L.Symbol.marker({rotate: true, markerOptions: {
				icon: L.icon({
					iconUrl: 'icon_plane.png',
					iconAnchor: [16, 16]
				})
			}})}
		]
	}
).addTo(map);




















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


