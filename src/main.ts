import './config/styles/style-main.css';
import 'ol/ol.css';

import { ScaleLine } from 'ol/control';
import { BASE_LAYERS } from 'src/constants/base-layers';
import { createMenuIcon } from './components/sidebar/menu-icon/index';
import { initializeMap } from './components/map/map';

console.log(BASE_LAYERS.toString());

const app = document.querySelector('.app') ? null : document.createElement("div");
let  menuicon;
if (app !== null){
    menuicon = createMenuIcon(app);
}
const map = initializeMap();

map.addControl(
    new ScaleLine({
        units: 'metric',
    })
);

map.on('click', function (evt) {
    const coord = evt.coordinate;
    alert(JSON.stringify(coord));
});

// export function createApp() {
//     const map = initializeMap();
//     const topBar = initializeTopBar();
//     const sideBar = initializeSideBar();

//     return app;
// }