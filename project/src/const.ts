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

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Comments = '/comments'
}

enum StatusCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404
}

enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  AppAction = 'AppAction'
}

const RatingData = [
  {
    title: 'perfect',
    value: 5
  },
  {
    title: 'good',
    value: 4
  },
  {
    title: 'not bad',
    value: 3
  },
  {
    title: 'badly',
    value: 2
  },
  {
    title: 'terribly',
    value: 1
  }
];

const URL_MARKER_DEFAULT = '../img/pin.svg';
const URL_MARKER_CURRENT = '../img/pin-active.svg';
const INSTANCE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const DATE_FORMAT = 'MMMM YYYY';

const TIMEOUT_ERROR = 2000;
const TIMEOUT_PASSWORD_ERROR = 3000;
const RE = /^(?=.*[A-Za-z])(?=.*[0-9]).{2,}$/;

const MAX_REVIEWS_COUNT = 10;

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

export { AppRoute, AuthorizationStatus, CardClassName, MapIconSize, MapIconPosition, RaitingValues, CityType, SortType, APIRoute, StatusCode, NameSpace, RatingData, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, INSTANCE_LAYER, LAYER_ATTRIBUTION, DATE_FORMAT, TIMEOUT_ERROR, TIMEOUT_PASSWORD_ERROR, RE, MAX_REVIEWS_COUNT, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH };
