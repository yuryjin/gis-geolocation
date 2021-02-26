function removeoldhighlight() {
	//console.log("old highlights removed");
	for (let index = 0; index < paths.length; index++) {
		if (paths[index].polyline_h !== null) {
			paths[index].polyline_h.setStyle({
				color: '#000',
				weight: 3
			});
		}
		for (let index2 = 0; index2 < paths[index].mark_arr.length; index2++) {
			paths[index].mark_arr[index2].setIcon(myIcon2);
		}
	}
}

function choose_path(numberofpath) {
	removeoldhighlight();

	var allotheritems = document.querySelectorAll(".targetslistobject");
	for (var i = 0; i < allotheritems.length; i++) {
		allotheritems[i].classList.remove("targetslistobject-active");
	  }
	var subel = document.getElementById("object-" + numberofpath);
	subel.className = "targetslistobject targetslistobject-active text-center";


	if (paths[numberofpath].polyline_h !== null) {
		paths[numberofpath].polyline_h.setStyle({
			color: '#00008b',
			weight: 3
		});
	}
	for (let index2 = 0; index2 < paths[numberofpath].mark_arr.length; index2++) {
		paths[numberofpath].mark_arr[index2].setIcon(myIcon2active);
	}
	choosesub(numberofpath);
	controls.cobj = numberofpath;
	reclicked = true;
	console.log(reclicked);
	/*
	choosesub(numberofpath);
	controls.cobj = numberofpath;
	reclicked = true;
	console.log(reclicked);
	*/	
}
