function changestate(name) {
	//console.log(controls.editing_mode);
	//if (controls.editing_mode == "disabled") {
		controls.mode = name;
		controls.mouseover_map = false;
		controls.editing_mode = "enabled";
		//console.log(controls.editing_mode);
	//}
	/*
	else if (controls.editing_mode == "enabled") {
		controls.editing_mode = "disabled";
	}
	*/



	//controls.mode = name;
	//console.log(controls.mode);
	//controls.mouseover_map = false;
	//controls.editing_mode = "enabled";
}

/*
function stop_edit() {
	controls.editing_mode = "disabled";
}
*/

function switch_edit() {
	//console.log(controls.editing_mode);
	if (controls.editing_mode == "disabled") {
		controls.editing_mode = "enabled";
		
	}
	else if (controls.editing_mode == "enabled") {
		controls.editing_mode = "disabled";
	}
	//console.log(controls.editing_mode);
}

function getlatlng22() {
	//console.log(paths[0].polyline.getLatLngs());
}


