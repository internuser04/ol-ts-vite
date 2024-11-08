import { BASE_LAYERS } from 'src/constants/base-layers';
import TileLayer from 'ol/layer/Tile';
import ImageTileSource from 'ol/source/ImageTile';

export const layers: Array<TileLayer> = BASE_LAYERS.map((layer) => {
    return new TileLayer({
        source: new ImageTileSource({
            url: layer.host,
            attributions: layer.attribution,
        }),
    });
});