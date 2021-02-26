function addeventl1() {
	//var numberofpath = controls.cobj;
	//controls.obj = stats.totalobjects;

	var numberofpath = stats.totalobjects;

	paths[numberofpath].mark_arr[0]
	
	//.on('click', changeColor)
	.on('click', function(e) {
		console.log(numberofpath);
		choose_path(numberofpath);
	})
	/*
	.on('mouseover', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	*/
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
}





function addeventl() {
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;
	console.log(numberofpath);
	/*
	var numberofpath = stats.totalobjects;
	var nummar = paths[stats.totalobjects].num_markers;

	console.log(paths[stats.totalobjects].polyline_h);
	*/
	paths[numberofpath].mark_arr[nummar]
	
	
	//.on('click', changeColor(numberofpath))
	//.on('click', changeColor)
	/*
	.on('click', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	*/
	.on('click', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);

		paths[numberofpath].mark_arr[nummar]
	})	
	/*
	.on('dragstart', function(e) {
		console.log(numberofpath);
		controls.cobj = numberofpath;
		choose_path(numberofpath);
	})
	*/
	.on('dragstart', dragStartHandler)
	.on('drag', dragHandler)
	.on('dragend', dragEndHandler);
}