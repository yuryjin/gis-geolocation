function updatesimulation_speed() {
	console.log(paths[stats.totalobjects].mode);
	for (let index = 0; index < paths.length; index++) {
		//var speedtype = null;
		if (paths[index].mode == "helicopter") { paths[index].speed = 200 }
		if (paths[index].mode == "drone") { paths[index].speed = 500 }
		if (paths[index].mode == "aircraft") { paths[index].speed = 800 }
		if (paths[index].mode == "missile") { paths[index].speed = 2000 }

		paths[index].movingMarker.pause();
		paths[index].movingMarker._currentDuration = paths[index].totaldistance / paths[index].speed * 3600000 / stats.simulation_speed;
		console.log("speed of object $ - " + index + ". equals " + paths[index].speed);
		paths[index].movingMarker.start();
	}
}

function changerange() {
	var range = document.getElementById("speedvaluerange");
	var rangevalue = range.value;
	stats.simulation_speed = rangevalue;
	var speedvalue = document.getElementById("speedvalx");
	speedvalue.innerHTML = stats.simulation_speed + "X";
	console.log("speed changed and equals - " + stats.simulation_speed);
	updatesimulation_speed();
}

function changespeedvalue(val) {
	if (val == 1) {
		stats.simulation_speed += 1;
	}
	if (val == -1) {
		stats.simulation_speed -= 1;
	}
	var speedvalue = document.getElementById("speedvalx");
	speedvalue.innerHTML = stats.simulation_speed + "X";
	console.log("speed changed and equals - " + stats.simulation_speed);
	updatesimulation_speed();
}