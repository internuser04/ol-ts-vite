import './config/styles/style-main.css';
import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import XYZ from 'ol/source/XYZ';
// import { fromLonLat } from 'ol/proj';
import { ScaleLine } from 'ol/control';
import { mapa } from './map/map';
import {BASE_LAYERS} from "src/constants/base-layers"
import { createMenuIcon } from './reusable-components/menu-icon';

let nav = document.createElement('nav');
document.body.appendChild(nav);
nav.innerHTML = `
<div class="container" id="icon-bar">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
`;
console.log( BASE_LAYERS.toString());

// let nav2 = document.createElement("div");
// document.body.appendChild(nav2);
// nav2.innerHTML = `${BASE_LAYERS}`;

createMenuIcon();
document.getElementById('icon-bar')?.addEventListener('click', function () {
    myFunction(this);
});

// const map = new Map({
//     target: 'map',
//     layers: [
//         new TileLayer({
//             source: new XYZ({
//                 url: 'https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png',
//                 attributions:
//                     'Maptiles by <a href="http://mierune.co.jp" target="_blank">MIERUNE</a>, under CC BY. Data by <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors, under ODbL.',
//                 attributionsCollapsible: false,
//                 tileSize: [256, 256],
//                 minZoom: 0,
//                 maxZoom: 18,
//             }),
//         }),
//     ],
//     view: new View({
//         center: fromLonLat([139.767, 35.681]),
//         zoom: 11,
//     }),
// });

mapa.addControl(
    new ScaleLine({
        units: 'metric',
    })
);

mapa.on("click", function(evt) {
    const coord = evt.coordinate;
    alert(JSON.stringify(coord));
})

function myFunction(x: Element) {
    x.classList.toggle('change');
}
