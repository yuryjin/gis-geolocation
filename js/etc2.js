function removeoldhighlight() {
	console.log("old highlights removed");
	for (let index = 0; index < classinstances.length; index++) {
		for (let index1 = 0; index1 < classinstances[index].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].polylines_hi_arr[index1]);
		}
		for (let index2 = 0; index2 < classinstances[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(classinstances[index].markers_hi_arr[index2]);
		}
	}
}

function addeventl1() {
	classinstances[stats.totalobjects].markers_arr[0].addEventListener("click", function(e) {
		//classinstances[stats.totalobjects].markers_arr[0].options.title = "path-" + stats.totalobjects + "marker-0";
		console.log(classinstances[stats.totalobjects].markers_arr[0].latlng);
		console.log("test")
	});
	classinstances[stats.totalobjects].markers_hi_arr[0].addEventListener("click", function(e) {
		console.log("test")
	});
}

function addeventl() {


	classinstances[stats.totalobjects].polylines_arr[classinstances[stats.totalobjects].num_polylines].addEventListener("click", function(e) { 
		classinstances[stats.totalobjects].polylines_arr[classinstances[stats.totalobjects].num_polylines].title = "path-" + stats.totalobjects + "poly-" + classinstances[stats.totalobjects].num_polylines
		console.log(classinstances[stats.totalobjects].polylines_[classinstances[stats.totalobjects].num_polylines].title);
		console.log("test")
	});
	classinstances[stats.totalobjects].polylines_hi_arr[classinstances[stats.totalobjects].num_polylines].addEventListener("click", function(e) {
		//classinstances[stats.totalobjects].polylines_hi_arr[classinstances[stats.totalobjects].num_polylines].id = "path-" + stats.totalobjects + "hpoly-" + classinstances[stats.totalobjects].num_polylines
		classinstances[stats.totalobjects].polylines_hi_arr[classinstances[stats.totalobjects].num_polylines].title = "path-" + stats.totalobjects + "hpoly-" + classinstances[stats.totalobjects].num_polylines
		console.log(classinstances[stats.totalobjects].polylines_hi_arr[classinstances[stats.totalobjects].num_polylines].title);
		console.log("test")
	});

	classinstances[stats.totalobjects].markers_arr[classinstances[stats.totalobjects].num_markers].addEventListener("click", function(e) {
		classinstances[stats.totalobjects].markers_arr[classinstances[stats.totalobjects].num_markers].title = "path-" + stats.totalobjects + "marker-" + classinstances[stats.totalobjects].num_markers;
		console.log(classinstances[stats.totalobjects].markers_arr[classinstances[stats.totalobjects].num_markers].title);
		//alert(classinstances[stats.totalobjects].markers_arr[classinstances[stats.totalobjects].num_markers].latlng);
		//classinstances[stats.totalobjects].markers_arr[classinstances[stats.totalobjects].num_markers].id = "path-" + stats.totalobjects + "marker-" + classinstances[stats.totalobjects].num_markers
		console.log("test")
	});
	classinstances[stats.totalobjects].markers_hi_arr[classinstances[stats.totalobjects].num_markers].addEventListener("click", function(e) {
		classinstances[stats.totalobjects].markers_hi_arr[classinstances[stats.totalobjects].num_markers].title = "path-" + stats.totalobjects + "hmarker-" + classinstances[stats.totalobjects].num_markers;
		console.log(classinstances[stats.totalobjects].markers_hi_arr[classinstances[stats.totalobjects].num_markers].title);
		//classinstances[stats.totalobjects].markers_hi_arr[classinstances[stats.totalobjects].num_markers].id = "path-" + stats.totalobjects + "hmarker-" + classinstances[stats.totalobjects].num_markers
		console.log("test")
	});
}