import {View} from "ol";
import * as constants from 'src/constants/initial-map';

const coordinates = [constants.INITIAL_LATITUDE, constants.INITIAL_LONGITUDE];

export const view = new View({
    center: coordinates,
    zoom: constants.INITIAL_ZOOM,
});