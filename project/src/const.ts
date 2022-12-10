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

enum PageType {
  Main = 'cities',
  Favorite = 'favorites',
  Room = 'near-places'
}

enum MapIconSize {
  Width = 27,
  Height = 39
}

enum MapIconPosition {
  X = 13.5,
  Y = 39
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
  AppAction = 'APP_ACTION'
}

enum FavoriteStatus {
  Favorite = 1,
  NotFavorite = 0
}

enum UpdateType {
  CurrentOffer = 'CURRENT_OFFER',
  Nearby = 'NEARBY'
}

enum LengthComment {
  Min = 50,
  Max = 300
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

const MAX_RANDOM_CITY = 5;

export { AppRoute, AuthorizationStatus, PageType, MapIconSize, MapIconPosition, RaitingValues, CityType, SortType, APIRoute, StatusCode, NameSpace, FavoriteStatus, UpdateType, LengthComment, RatingData, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, INSTANCE_LAYER, LAYER_ATTRIBUTION, DATE_FORMAT, TIMEOUT_ERROR, TIMEOUT_PASSWORD_ERROR, RE, MAX_REVIEWS_COUNT, MAX_RANDOM_CITY };
