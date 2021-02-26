function whatmode() {
	if (controls.mode == "helicopter") {
		stats.helicopters += 1;
		return stats.helicopters
	}
	if (controls.mode == "drone") {
		stats.drones += 1;
		return stats.drones
	}
	if (controls.mode == "aircraft") {
		stats.aircrafts += 1;
		return stats.aircrafts
	}
	if (controls.mode == "missile") {
		stats.missiles += 1;
		return stats.missiles
	}
}

function choosesub(num) {
	var allotheritems = document.querySelectorAll(".targetslistobject");
	for (var i = 0; i < allotheritems.length; i++) {
		allotheritems[i].classList.remove("targetslistobject-active");
	  }
	var subel = document.getElementById("object-" + num);
	subel.className = "targetslistobject targetslistobject-active text-center";
}

function createsub2(name) {
	let targetslist = document.querySelector('#targetslist')
	let tr = document.createElement('div');
	//let delbutton = document.createElement('button');

	if (name == "aircraft") {
		stats.aircrafts += 1;
		tr.innerHTML = "aircraft - " + stats.aircrafts;
	}
	if (name == "helicopter") {
		stats.helicopters += 1;
		tr.innerHTML = "helicopter - " + stats.helicopters;
	}
	if (name == "missile") {
		stats.missiles += 1;
		tr.innerHTML = "missile - " + stats.missiles;
	}
	if (name == "drone") {
		stats.drones += 1;
		tr.innerHTML = "drone - " + stats.drones;
	}
	var allotheritems = document.querySelectorAll(".targetslistobject");
	for (var i = 0; i < allotheritems.length; i++) {
		allotheritems[i].classList.remove("targetslistobject-active");
	  }
	tr.id = "object-" + stats.totalobjects;
	//delbutton = "delbtn-" + stats.totalobjects;
	//delbutton.innerHTML = "x";
	var num = stats.totalobjects;
	tr.className = "targetslistobject targetslistobject-active text-center";
	//tr.innerHTML = delbutton;
	targetslist.append(tr);
	//targetslist.append(delbutton);
	tr.addEventListener("click", function() {
		choose_path(num);
	})
	tr.addEventListener('dblclick', function(){ 
			
			tr.remove();
			/*
			for (let index = 0; index < paths[stats.totalobjects].mark_arr.length; index++) {
				//const element = array[index];
				paths[stats.totalobjects].mark_arr[index].
				
			}
			*/
			for (let index = 0; index < paths[stats.totalobjects].mark_arr.length; index++) {
				//const element = array[index];
				map.removeLayer(paths[stats.totalobjects].mark_arr[index]);
				
			}
			if (paths[stats.totalobjects].polyline_h !== null) {
				map.removeLayer(paths[stats.totalobjects].polyline_h);
			}
			if (paths[stats.totalobjects].movingMarker !== null) {
				map.removeLayer(paths[stats.totalobjects].movingMarker);
			}
			
			paths.splice(stats.totalobjects, 1);
			stats.totalobjects -= 1;
			//delete paths[stats.totalobjects];
			//stats.totalobjects -= 1;
	  });
}