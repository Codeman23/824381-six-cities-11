import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

const loadOffers = createAction<Offer[]>('main/loadOffers');

const selectCity = createAction<string>('main/selectCity');

const setOffersLoadStatus = createAction<boolean>('main/setOffersLoadStatus');

export { loadOffers, selectCity, setOffersLoadStatus };
