console.log("Create OpenLayers Map");

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([24.9457241, 60.1706629]),
        zoom: 14
    }),
    controls: ol.control.defaults({
        attribution: false,
        zoom : false,
        rotate: false
    }),
    interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
});
//Adding a marker on the map
var marker = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([24.9457241, 60.1706629])
    ), // Cordinates of New York's Town Hall
});
var markerImgLocation = "/denttisivu/user/themes/quark/images/pin-small.png";
marker.setStyle(new ol.style.Style({
    image: new ol.style.Icon(({
        anchor: [0.5, 1],
        //crossOrigin: 'anonymous',
        src: markerImgLocation
    }))
}));
var vectorSource = new ol.source.Vector({
    features: [marker]
});
var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
});
map.addLayer(markerVectorLayer);