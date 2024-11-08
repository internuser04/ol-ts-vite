import * as data from 'src/config/data.json';

type BaseLayer = {
    title: string;
    name: string;
    version: string;
    service: string;
    host: string;
    attribution: string;
};

export const BASE_LAYERS: BaseLayer[] = data.baselayers;
