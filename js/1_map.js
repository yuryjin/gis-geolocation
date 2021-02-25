var map = L.map('map').setView([47.003670, 24.907089], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.doubleClickZoom.disable();

/*
var pathnot = L.polylineDecorator(
	[[50.14874640066278,14.106445312500002],
					   [51.67255514839676,16.303710937500004],
						   [50.14874640066278,18.676757812500004],
					   ,[49.866316729538674,25.0927734375]], {
		//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
		//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
		patterns: [{
			offset: 0,
			repeat: 10,
			symbol: L.Symbol.dash({
				pixelSize: 0,
				pathOptions: {
					color: '#F05E23',
					weight: 5
				}
			})
		}]
	}
).addTo(map);

*/

/*
var arrr = [[50.14874640066278,14.106445312500002],
[51.67255514839676,16.303710937500004],
	[50.14874640066278,18.676757812500004],
,[49.866316729538674,25.0927734375]];
*/

/*
var pathnot = L.polylineDecorator(
	arrr, {
		//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
		//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
		patterns: [{
			offset: 0,
			repeat: 10,
			symbol: L.Symbol.dash({
				pixelSize: 0,
				pathOptions: {
					color: '#F05E23',
					weight: 5
				}
			})
		}]
	}
).addTo(map);
*/

/*
var pathnot = L.polylineDecorator(
	[[50.14874640066278,18.676757812500004],
,[49.866316729538674,25.0927734375]], {
		//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
		//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
		patterns: [{
			offset: 0,
			repeat: 10,
			symbol: L.Symbol.dash({
				pixelSize: 0,
				pathOptions: {
					color: '#F05E23',
					weight: 5
				}
			})
		}]
	}
).addTo(map);
*/

var pathnot = L.polylineDecorator(
	[{lat: 50.14874640066278,lng: 18.676757812500004},
,{lat: 49.866316729538674,lng: 25.0927734375}], {
		//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
		//title: "path-" + numberofpath + "hpolyline-" + classinstances[numberofpath].num_polylines,
		patterns: [{
			offset: 0,
			repeat: 10,
			symbol: L.Symbol.dash({
				pixelSize: 0,
				pathOptions: {
					color: '#F05E23',
					weight: 5
				}
			})
		}]
	}
).addTo(map);

var line = turf.lineString([
	[-76.091308, 18.427501],
	[-76.695556, 18.729501],
	[-76.552734, 19.40443],
	[-74.61914, 19.134789],
	[-73.652343, 20.07657],
	[-73.157958, 20.210656]
  ]);
  
  var curved = turf.bezierSpline(line);


var pathOne = L.curve(['M',[50.14874640066278,14.106445312500002],
					   'Q',[51.67255514839676,16.303710937500004],
						   [50.14874640066278,18.676757812500004],
					   'T',[49.866316729538674,25.0927734375]]).addTo(map);

var pathOne1 = L.curve(['M',[52.14874640066278,16.106445312500002],
					   'Q',[53.67255514839676,18.303710937500004],
						   [52.14874640066278,20.676757812500004],
					   'T',[51.866316729538674,27.0927734375]]).addTo(map);


					   var pathOne2 = L.curve(['M',[52.14874640066278,18.106445312500002],
					   'Q',[53.67255514839676,20.303710937500004],
						   [52.14874640066278,22.676757812500004],
					   'T',[51.866316729538674,29.0927734375]]).addTo(map);

					   /*
					   var pathOne1 = L.curve(['M',[56.14874640066278,20.106445312500002],
					   'Q',[55.67255514839676,22.303710937500004],
						   [54.14874640066278,24.676757812500004],
					   'T',[53.866316729538674,31.0927734375]]).addTo(map);
					   */
	
var marker1 = new L.marker([52.14874640066278,16.106445312500002], {
						draggable: true
					}).addTo(map);

					var marker2 = new L.marker([53.67255514839676,18.303710937500004], {
						draggable: true
					}).addTo(map);

					var marker3 = new L.marker([52.14874640066278,20.676757812500004], {
						draggable: true
					}).addTo(map);

					var marker4 = new L.marker([51.866316729538674,27.0927734375], {
						draggable: true
					}).addTo(map);

/*
//cubic bezier curve (and straight lines)
var pathTwo = L.curve(['M',[50.54136296522163,28.520507812500004],
					   'C',[52.214338608258224,28.564453125000004],
						   [48.45835188280866,33.57421875000001],
						   [50.680797145321655,33.83789062500001],
					   'V',[48.40003249610685],
					   'L',[47.45839225859763,31.201171875],
						   [48.40003249610685,28.564453125000004],'Z',
					   'M',[49.55372551347579,29.465332031250004],
					   'V',[48.7822260446217],
					   'H',[33.00292968750001],
					   'V',[49.55372551347579],'Z'],{color:'red',fill:true}).addTo(map);
*/

/*
var pathThree = L.curve(['M',[49.35375571830993,6.240234375],
						 'Q',[49.38237278700955,9.843750000000002],
							 [47.754097979680026,9.360351562500002],
							 [46.95026224218562,6.635742187500001],
							 [45.67548217560647,8.437500000000002],
							 [44.5278427984555,5.5810546875],
							 [45.85941212790755,3.0761718750000004],
							 [47.517200697839414,4.218750000000001],
							 [49.009050809382074,3.7353515625000004],
							 [48.45835188280866,5.800781250000001],
							 [48.8936153614802,5.493164062500001],'Z'], {fill:true, color:'orange'}).addTo(map);
*/


