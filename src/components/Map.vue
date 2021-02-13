<template>
	<div class="map-wrapper">
		<div class="content-wrapper map-container">
			<div class="row wrapper-inside">
				<div class="col-2">
					<div class="targets-wrapper">
						<div class="targets-types">
							<div class="types-h1">
								<div class="text-center">
									Target types
								</div>
							</div>
							<button class="btn target-type-btn text-left">Aircraft</button>
							<button class="btn target-type-btn">Helicopter</button>
							<button class="btn target-type-btn">Cruise missile</button>
							<button class="btn target-type-btn">Drone</button>
						</div>
						<div class="targets">
							<div class="targets-h1">
								<div class="text-center">
									Targets
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-10">

					<div class="row">
						<div class="col control-panel">
							<div class="control-panel-inner" style="display: inline-block;">

								<button class="btn">
									<div class="triangle2">
										<div class="empty"></div>
									</div>
								</button>
								<button class="btn">
									<div class="double-bars">
										<div class="double-bar">
											<div class="double-bar-inner"></div>
										</div>
										<div class="double-bar">
											<div class="double-bar-inner"></div>
										</div>
									</div>
								</button>
								<button class="btn">
									<div class="stop">
										<div class="stop-inner"></div>
									</div>
								</button>
								<img src="https://image.flaticon.com/icons/png/512/32/32284.png" alt=""
									style="width: 35px; height: 35px;">
								<input type="range" min="0" max="100" step="5" id="speedvalue" class="rangeselect">
								<div class="speedvalue">
									10x
									<div class="btn-group-vertical">
										<button class="btn button-up-down">
											&#9652;
										</button>
										<button class="btn button-up-down">
											&#9662;
										</button>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div id="map"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="css">
	@import "../../src/components/css/style.css";
</style>

<script>
	import "leaflet/dist/leaflet.css";
	import L from "leaflet";

	export default {
		name: "Map",
		data() {
			return {
				center: [37, 7749, -122, 4194]
			}
		},
		methods: {
			setupLeafletMap: function () {
				var map = L.map('map').setView([47.003670, 24.907089], 4);

				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				}).addTo(map);
			},
		},
		mounted() {
			this.setupLeafletMap();
		},
	};
</script>


