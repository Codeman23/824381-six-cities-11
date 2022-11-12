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

enum CityType {
  CapeTown = 'Cape Town',
  Johannesburg = 'Johannesburg',
  Nairobi = 'Nairobi',
  Lagos = 'Lagos'
}

enum MapIconSize {
  Width = 40,
  Height = 40
}

enum MapIconPosition {
  X = 20,
  Y = 40
}

const urlMarkerDefault = '../img/pin.svg';
const urlMarkerCurrent = '../img/pin-active.svg';
const instanceLayer = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const layerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export { AppRoute, AuthorizationStatus, CardClassName, CityType, MapIconSize, MapIconPosition, urlMarkerDefault, urlMarkerCurrent, instanceLayer, layerAttribution };
