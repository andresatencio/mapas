// create a map in the "map" div, set the view to a given place and zoom
// var map = L.map('map').setView([-34.332321, -60.211002], 13);

// // add an OpenStreetMap tile layer
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// 	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// var kmlLayer = new L.KML("kml/SanNicolas.kml");

// // kmlLayer.on("loaded", function(e) { 
// // 	map.fitBounds(e.target.getBounds());
// // });

// map.addLayer(kmlLayer);








// var testData = {
//   max: 8,
//   data: [{lat: 24.6408, lng:46.7728, count: 3},{lat: 50.75, lng:-1.55, count: 1}, ...]
// };


// var baseLayer = L.tileLayer(
//   'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//     attribution: '...',
//     maxZoom: 18
//   }
// );




// var heatmapLayer = new HeatmapOverlay(cfg);

// var map = new L.Map('map-canvas', {
//   center: new L.LatLng(25.6586, -80.3568),
//   zoom: 4,
//   layers: [baseLayer, heatmapLayer]
// });

$(function () {

	var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
   "radius": 15,
  "maxOpacity": 0.8, 
  // // scales the radius based on map zoom
  // "scaleRadius": true, 
  // // if set to false the heatmap uses the global maximum for colorization
  // // if activated: uses the data maximum within the current map boundaries 
  // //   (there will always be a red spot with useLocalExtremas true)
  // "useLocalExtrema": true,
  // // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'count'
};

var map;

$.getJSON('data/Reclamos-mini.json', function (data) {
	


	

	var datas = [];
	data.forEach(function (e) {
		
			datas.push({lat: e.lat, lng: e.lon, count: 3});
		

	})

	var testData = {
		max: 8,
		data: datas
	};
	var bn = 'http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png'
	var baseLayer = L.tileLayer(
		'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
			maxZoom: 18
		}
		);
	var heatmapLayer = new HeatmapOverlay(cfg);
	console.log(testData)
	var map = new L.Map('map', {
		center: new L.LatLng(-34.332321,-60.211002),
		zoom: 8,
		layers: [baseLayer, heatmapLayer]
	});

	heatmapLayer.setData(testData);

	var kmlLayer = new L.KML("kml/SanNicolas.kml");


	map.addLayer(kmlLayer);
	map.panTo(new L.LatLng(-34.332321,-60.211002));
	
})

})


