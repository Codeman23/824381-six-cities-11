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

enum CityType {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

const urlMarkerDefault = '../img/pin.svg';
const urlMarkerCurrent = '../img/pin-active.svg';
const instanceLayer = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const layerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const dateFormat = 'MMMM YYYY';

export { AppRoute, AuthorizationStatus, CardClassName, MapIconSize, MapIconPosition, RaitingValues, CityType, SortType, urlMarkerDefault, urlMarkerCurrent, instanceLayer, layerAttribution, dateFormat };
