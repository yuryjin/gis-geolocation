class Path {
	constructor(name, speed, icon) {
		paths.push(this);
		this.id = stats.totalobjects;
		this.name = name;
		this.mode = name;
		this.speed = speed;
		this.icon = icon;
		this.simulation_speed = stats.simulation_speed;
		//this.movingMarker = 
		this.coordinates_array = [];

		this.latlngs_array = {
			coordinates: []
		};

		this.movingMarker = null;

		this.coordmarkers = -1;

		// markers and polylines

		this.marker_st = null;
		this.marker_highlighted = null;
		this.polyline_st = null;
		this.polyline_highlighted = null;

		this.markers_arr = [];
		this.markers_hi_arr = [];
		this.polylines_arr = [];
		this.polylines_hi_arr = [];


		this.mark = null;
		this.polyline = null;
		this.mark_arr = [];
		this.polyline_h = null;


		this.polyline_created = false;

		this.num_markers = -1;
		this.num_polylines = -1;

		// path related

		this.millisecondstime = 0;
		this.totalpath = 0;
		this.path = 0;

		createsub2(this.name);
	}
}