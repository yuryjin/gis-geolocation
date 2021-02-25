function radians(n) {
	return n * (Math.PI / 180);
}

function degrees(n) {
	return n * (180 / Math.PI);
}

function getBearing(startLat, startLong, endLat, endLong) {
	startLat = radians(startLat);
	startLong = radians(startLong);
	endLat = radians(endLat);
	endLong = radians(endLong);

	var dLong = endLong - startLong;

	var dPhi = Math.log(Math.tan(endLat / 2.0 + Math.PI / 4.0) / Math.tan(startLat / 2.0 + Math.PI / 4.0));
	if (Math.abs(dLong) > Math.PI) {
		if (dLong > 0.0)
			dLong = -(2.0 * Math.PI - dLong);
		else
			dLong = (2.0 * Math.PI + dLong);
	}

	return (degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
}

function calcplay(loc1, loc2) {
	var bearing = getBearing(loc1[0], loc1[1], loc2[0], loc2[1]);
	console.log(bearing);
	return bearing;
}

function showdistance(arrayc) {
	var totaldistance = 0;
	var distance = 0;
	for (let index = 0; index < arrayc.length; index++) {
		distance = arrayc[0].distanceTo(arrayc[1]).toFixed(0) / 1000;
		totaldistance += distance;
	}
	//var text = totaldistance + ' km';
	//console.log(text);
	return totaldistance;
}