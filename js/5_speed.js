function updatesimulation_speed() {
	console.log(classinstances[stats.totalobjects].mode);
	for (let index = 0; index < classinstances.length; index++) {
		//var speedtype = null;
		if (classinstances[index].mode == "helicopter") { classinstances[index].speed = 200 }
		if (classinstances[index].mode == "drone") { classinstances[index].speed = 500 }
		if (classinstances[index].mode == "aircraft") { classinstances[index].speed = 800 }
		if (classinstances[index].mode == "missile") { classinstances[index].speed = 2000 }

		classinstances[index].movingMarker.pause();
		classinstances[index].movingMarker._currentDuration = classinstances[index].totaldistance / classinstances[index].speed * 3600000 / stats.simulation_speed;
		console.log("speed of object $ - " + index + ". equals " + classinstances[index].speed);
		classinstances[index].movingMarker.start();
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