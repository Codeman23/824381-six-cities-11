import { store } from '../store/index.js';
import { Offer } from './offer.js';
import { Review } from './review.js';
import { AuthorizationStatus } from '../const';

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

type DataProcess = {
  currentOffer: Offer | undefined;
  offers: Offer[] | undefined;
  favoriteOffers: Offer[];
  nearbyOffers: Offer[];
  comments: Review[];
  loadedState: {
    isCurrentOfferLoading: boolean;
    isOffersLoading: boolean;
    isOffersLoaded: boolean;
    isFavoritesLoaded: boolean;
    isNearbyLoaded: boolean;
  };
};

type AppActionData = {
  city: string;
};

export { type State, type AppDispatch, type UserProcess, type DataProcess, type AppActionData };
