enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Realty = '/offer/:id',
  NotFound = '*',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum CardClassName {
  Main = 'cities',
  Favorite = 'favorites'
}

enum MapIconSize {
  Width = 40,
  Height = 40
}

enum MapIconPosition {
  X = 20,
  Y = 40
}

enum RaitingValues {
  MaxStars = 5,
  MaxValue = 100
}

const urlMarkerDefault = '../img/pin.svg';
const urlMarkerCurrent = '../img/pin-active.svg';
const instanceLayer = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const layerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const dateFormat = 'MMMM YYYY';

export { AppRoute, AuthorizationStatus, CardClassName, MapIconSize, MapIconPosition, RaitingValues, urlMarkerDefault, urlMarkerCurrent, instanceLayer, layerAttribution, dateFormat };
