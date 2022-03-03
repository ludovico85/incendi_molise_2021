// intial map settings
var mymap = L.map('map',
	{
		zoomControl:false,//custom zoom control
    }).setView([41.65, 14.5], 10);

L.control.zoom({
    position:'topleft'// default is topleft
}).addTo(mymap);

L.control.scale().addTo(mymap); // add scale bar

var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		  maxZoom: 21,attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		  id: 'mapbox/streets-v11',
		  tileSize: 512,
		  zoomOffset: -1}).addTo(mymap);

var custom_icon = new L.ExtraMarkers.icon ({
	icon: 'fa-fire',
	prefix: 'fa',
	shape: 'circle',
	markerColor: 'orange-dark'
});


var incendi = new L.geoJson(incendi, {
	pointToLayer: function (feature, layer) {
    return L.marker(layer, {icon: custom_icon});},
	onEachFeature: function (feature, layer) {
	layer.bindPopup('<table><tbody><tr><th scope="row"><td>Luogo: '+feature.properties.Luogo+'</td></th></tr><tr><th scope="row"></th></tr><tr><th scope="row"><td>Data evento: '+feature.properties.Data+'</td></th></tr><tr><th scope="row"><td>Link all\'<a href='+feature.properties.link+' target="_blank">articolo di giornale</a></td></th></tr><tr><th scope="row"><td>Apri la <a href='+feature.properties.index+' target="_blank">mappa satellitare dell\'incendio</a></td></th></tr></tbody>')}
}).addTo(mymap);