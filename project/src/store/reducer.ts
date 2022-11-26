import { selectCity, loadOffers, setOffersLoadStatus, setAuthorizationStatus, setError } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { CityType, AuthorizationStatus } from '../const';

type InitialCityState = {
  city: string;
  offers: Offer[];
  favoriteOffers: Offer[];
  isOffersLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

const initialCityState: InitialCityState = {
  city: CityType.Paris,
  offers: [],
  favoriteOffers: [],
  isOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

const reducer = createReducer(initialCityState, (builder) => {
  builder
    .addCase(setOffersLoadStatus, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
