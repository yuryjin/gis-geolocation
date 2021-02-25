function removeoldhighlight() {
	console.log("old highlights removed");
	for (let index = 0; index < paths.length; index++) {
		for (let index1 = 0; index1 < paths[index].polylines_hi_arr.length; index1++) {
			//const element = array[index];
			map.removeLayer(paths[index].polylines_hi_arr[index1]);
		}
		for (let index2 = 0; index2 < paths[index].markers_hi_arr.length; index2++) {
			//const element = array[index];
			map.removeLayer(paths[index].markers_hi_arr[index2]);
		}
	}
}

function addeventl1() {
	paths[stats.totalobjects].markers_arr[0].addEventListener("click", function(e) {
		//paths[stats.totalobjects].markers_arr[0].options.title = "path-" + stats.totalobjects + "marker-0";
		console.log(paths[stats.totalobjects].markers_arr[0].latlng);
		console.log("test")
	});
	paths[stats.totalobjects].markers_hi_arr[0].addEventListener("click", function(e) {
		console.log("test")
	});
}

function addeventl() {


	paths[stats.totalobjects].polylines_arr[paths[stats.totalobjects].num_polylines].addEventListener("click", function(e) { 
		paths[stats.totalobjects].polylines_arr[paths[stats.totalobjects].num_polylines].title = "path-" + stats.totalobjects + "poly-" + paths[stats.totalobjects].num_polylines
		console.log(paths[stats.totalobjects].polylines_[paths[stats.totalobjects].num_polylines].title);
		console.log("test")
	});
	paths[stats.totalobjects].polylines_hi_arr[paths[stats.totalobjects].num_polylines].addEventListener("click", function(e) {
		//paths[stats.totalobjects].polylines_hi_arr[paths[stats.totalobjects].num_polylines].id = "path-" + stats.totalobjects + "hpoly-" + paths[stats.totalobjects].num_polylines
		paths[stats.totalobjects].polylines_hi_arr[paths[stats.totalobjects].num_polylines].title = "path-" + stats.totalobjects + "hpoly-" + paths[stats.totalobjects].num_polylines
		console.log(paths[stats.totalobjects].polylines_hi_arr[paths[stats.totalobjects].num_polylines].title);
		console.log("test")
	});

	paths[stats.totalobjects].markers_arr[paths[stats.totalobjects].num_markers].addEventListener("click", function(e) {
		paths[stats.totalobjects].markers_arr[paths[stats.totalobjects].num_markers].title = "path-" + stats.totalobjects + "marker-" + paths[stats.totalobjects].num_markers;
		console.log(paths[stats.totalobjects].markers_arr[paths[stats.totalobjects].num_markers].title);
		//alert(paths[stats.totalobjects].markers_arr[paths[stats.totalobjects].num_markers].latlng);
		//paths[stats.totalobjects].markers_arr[paths[stats.totalobjects].num_markers].id = "path-" + stats.totalobjects + "marker-" + paths[stats.totalobjects].num_markers
		console.log("test")
	});
	paths[stats.totalobjects].markers_hi_arr[paths[stats.totalobjects].num_markers].addEventListener("click", function(e) {
		paths[stats.totalobjects].markers_hi_arr[paths[stats.totalobjects].num_markers].title = "path-" + stats.totalobjects + "hmarker-" + paths[stats.totalobjects].num_markers;
		console.log(paths[stats.totalobjects].markers_hi_arr[paths[stats.totalobjects].num_markers].title);
		//paths[stats.totalobjects].markers_hi_arr[paths[stats.totalobjects].num_markers].id = "path-" + stats.totalobjects + "hmarker-" + paths[stats.totalobjects].num_markers
		console.log("test")
	});
}