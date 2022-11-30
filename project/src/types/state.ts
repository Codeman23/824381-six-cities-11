import { store } from '../store/index.js';
import { Offer } from './offer.js';
import { AuthorizationStatus } from '../const';

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

type DataProcess = {
  offers: Offer[];
  isOffersLoaded: boolean;
};

type AppActionData = {
  city: string;
};

export { type State, type AppDispatch, type UserProcess, type DataProcess, type AppActionData };
