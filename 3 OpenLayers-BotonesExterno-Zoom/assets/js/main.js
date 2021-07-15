
        var map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([0, 0]),
                zoom: 1
            })
        });


document.getElementById('zoom-out').onclick = function () {
  var view = map.getView();
  var zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  var view = map.getView();
  var zoom = view.getZoom();
  view.setZoom(zoom + 1);
};
 