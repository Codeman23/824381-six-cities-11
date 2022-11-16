import { createReducer } from '@reduxjs/toolkit';
import { selectCity } from './action';
import { Offer } from '../types/offer';
import { offers } from '../mocks/offers';
import { CityType } from '../const';

type InitialCityStateProps = {
  city: string;
  offers: Offer[];
}

const initialCityState: InitialCityStateProps = {
  city: CityType.Paris,
  offers: offers
};

const reducer = createReducer(initialCityState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };
