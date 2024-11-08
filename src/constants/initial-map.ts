import * as data from "src/config/data.json"

export const INITIAL_LATITUDE = data.initialview.center.latitude || -6700000
export const INITIAL_LONGITUDE = data.initialview.center.longitude || -3700000
export const INITIAL_MAX_ZOOM = data.initialview.maxZoom || 18;
export const INITIAL_MIN_ZOOM = data.initialview.minZoom || 4;
export const INITIAL_ZOOM = data.initialview.zoom || 14;