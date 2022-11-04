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

export { AppRoute, AuthorizationStatus, CardClassName, CityType };
