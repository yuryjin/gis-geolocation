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




//document

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
	var num = stats.totalobjects;
	tr.className = "targetslistobject targetslistobject-active text-center";
	targetslist.append(tr);
	tr.addEventListener("click", function() {
		choose_path(num);
		//choosesub(num);
		//alert("yes");
		  //tr.className = "targetslistobject targetslistobject-active text-center";
		  /* 
		  choose_path(num);
		  controls.cobj = num;
		  controls.reclicked = true;
		  console.log(controls.reclicked);
		  */
		//controls.mouseover_map = false;
	})
}