import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';

const loadOffers = createAction<Offer[]>('main/loadOffers');

const selectCity = createAction<string>('main/selectCity');

const setOffersLoadStatus = createAction<boolean>('main/setOffersLoadedStatus');

const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

const setError = createAction<string | null>('main/setError');

export { loadOffers, selectCity, setOffersLoadStatus, setError, setAuthorizationStatus };
