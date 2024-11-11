import { Map } from 'ol';
import { baselayers } from './layers/baselayers';
import { view } from './views/view';

// maps need three things at least: target html element,  view settings,  and layers to be loaded
export function initializeMap() {
    const app = document.querySelector('.app');
    const mapDiv = document.createElement('div');
    mapDiv.setAttribute('id', 'map');
    mapDiv.setAttribute('height', '100%');
    app?.appendChild(mapDiv);

    const map = new Map({
        target: mapDiv,
        view: view,
        layers: baselayers,
    });

    return map;
}
