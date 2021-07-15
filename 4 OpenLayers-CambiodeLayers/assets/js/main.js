//El mapa esta compuesto por una 1-VISTA, 2-TARGET y 3-CAPAS 
var map = new ol.Map({

  //1-VISTA
  view: new ol.View({
      center: [-6497172.250348504, -4122565.4165904904],
      zoom: 1
  }), 

  //2-TARGET (COnexion con el html)
  target: 'map'

})


  //3-CAPAS
  //Varias Capas Base (LAYERS)
const openStreetStandard = new ol.layer.Tile({
source: new ol.source.OSM(),
visible: true,
title: 'OSMStandard'
})

//CAPAS EXTRAS
//Varias Capas 1 (LAYERS)
const openStreetHumanit = new ol.layer.Tile({
source: new ol.source.OSM({
    url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    attributions: 'Sebasoft S.A.'   
}),
visible: false,
title: 'OSMHumanitarian'
})

//Varias Capas 2 (LAYERS)
const stamenTerrain = new ol.layer.Tile({
source: new ol.source.XYZ({
  url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
  attributions: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
}),
visible: false,
title: 'StamenTerrain'
})

//map.addLayer(stamenTerrain);

//Agrupacion de capas anteriores 
const baseLayerGroup = new ol.layer.Group({
layers:[
  openStreetStandard, openStreetHumanit, stamenTerrain
]
})

map.addLayer(baseLayerGroup);

//BOTONES de Capas (Switch)
const  baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio]');
for(let baseLayerElement of baseLayerElements){
baseLayerElement.addEventListener('change', function(){
  let baseLayerElementValue = this.value;
  baseLayerGroup.getLayers().forEach(function(element, index, array){
      let baseLayerTitle = element.get('title');
      element.setVisible(baseLayerTitle === baseLayerElementValue);
  })
})

}

