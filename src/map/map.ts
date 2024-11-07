import { Map, View } from 'ol';
import { initialview, baselayers } from '../data.json';
import TileLayer from 'ol/layer/Tile';
import ImageTileSource from 'ol/source/ImageTile';

const coordinates = [initialview.center.latitude, initialview.center.longitude];

const view = new View({
    center: coordinates,
    zoom: initialview.zoom,
});

const layers = new Array<TileLayer>(
    new TileLayer({
        source: new ImageTileSource({
            url: baselayers[0].host,
            attributions: baselayers[0].attribution,
        }),
    }),
    new TileLayer({
        source: new ImageTileSource({
            url: baselayers[1].host,
            attributions: baselayers[1].attribution,
        }),
    }),
    new TileLayer({
        source: new ImageTileSource({
            url: baselayers[2].host,
            attributions: baselayers[2].attribution,
        }),
    }),
    new TileLayer({
        source: new ImageTileSource({
            url: baselayers[3].host,
            attributions: baselayers[3].attribution,
        }),
    }),
    new TileLayer({
        source: new ImageTileSource({
            url: baselayers[4].host,
            attributions: baselayers[4].attribution,
        }),
    })
);


// maps need three things at least: target html element,  view settings,  and layers to be loaded
export const mapa = new Map({
    target: 'map',
    view: view,
    layers: layers,
});
