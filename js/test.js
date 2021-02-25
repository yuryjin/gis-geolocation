/*
function changeColor (e) {
	marker_a.setIcon(myIcon2active);
	marker_b.setIcon(myIcon2active);
	marker_c.setIcon(myIcon2active);
	polyline.setStyle({
		color: 'brown',
		weight: 5

	});
}

  function dragStartHandler (e) {
	  var latlngs = polyline.getLatLngs(),
		  latlng = this.getLatLng();
	  for (var i = 0; i < latlngs.length; i++) {
		  if (latlng.equals(latlngs[i])) {
			  this.polylineLatlng = i;
		  }
	  }
  }
  
  function dragHandler (e) {
	  var latlngs = polyline.getLatLngs(),
		  latlng = this.getLatLng();
	  latlngs.splice(this.polylineLatlng, 1, latlng);
	  polyline.setLatLngs(latlngs);
  }
  
  function dragEndHandler (e) {
	  delete this.polylineLatlng;
  }
  
  var a = new L.LatLng(-45, -90),
	  b = new L.LatLng(45, 0),
	  c = new L.LatLng(-45, 90);
	  
	  var marker_a = new L.Marker(a, {icon:myIcon2 ,draggable: true}).addTo(map),
		  marker_b = new L.Marker(b, {icon:myIcon2 ,draggable: true}).addTo(map),
		  marker_c = new L.Marker(c, {icon:myIcon2 ,draggable: true}).addTo(map);
	  
  var polyline = new L.Polyline([a, b, c]).addTo(map);
  
  /*
  marker_a.on('click', function(e) {
	//e.target.setIcon(myIcon2active);
	marker_a.target.setIcon(myIcon2active);
	marker_b.target.setIcon(myIcon2active);
	marker_c.target.setIcon(myIcon2active);
  })
  */

  /*
 marker_a.on('click', function(e) {
	//e.target.setIcon(myIcon2active);
	marker_a.target.setIcon(myIcon2active);
	marker_b.target.setIcon(myIcon2active);
	marker_c.target.setIcon(myIcon2active);
  })
  */

  /*
 marker_a.on('click', function(e) {
	e.target.setIcon(myIcon2active);
  })

  marker_b.on('click', function(e) {
	e.target.setIcon(myIcon2active);
  })

  marker_c.on('click', function(e) {
	e.target.setIcon(myIcon2active);
  })
  */

/*
  marker_a
  	  //.on('click', changeColor)
		//.on('click', changeColor)
		//.on('click', changeColor)
		.on('click', changeColor)
	  .on('dragstart', dragStartHandler)
	  .on('drag', dragHandler)
	  .on('dragend', dragEndHandler);
  
  marker_b
  	  //.on('click', changeColor)
		.on('click', changeColor)
	  .on('dragstart', dragStartHandler)
	  .on('drag', dragHandler)
	  .on('dragend', dragEndHandler);
  
  marker_c
  	  //.on('click', changeColor)
		.on('click', changeColor)
	  .on('dragstart', dragStartHandler)
	  .on('drag', dragHandler)
	  .on('dragend', dragEndHandler);
	  */