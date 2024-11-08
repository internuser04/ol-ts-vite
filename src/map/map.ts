import { Map } from 'ol';
import { layers } from './layers/baselayers';
import { view } from './views/view';

// maps need three things at least: target html element,  view settings,  and layers to be loaded
export const mapa = new Map({
    target: 'map',
    view: view,
    layers: layers,
});
