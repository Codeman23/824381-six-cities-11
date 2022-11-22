import { selectCity, loadOffers, setOffersLoadStatus } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { CityType } from '../const';

type InitialCityState = {
  city: string;
  offers: Offer[];
  isOffersLoaded: boolean;
}

const initialCityState: InitialCityState = {
  city: CityType.Paris,
  offers: [],
  isOffersLoaded: false
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
    });
});

export { reducer };
