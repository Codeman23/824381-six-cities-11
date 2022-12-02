import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { AppRoute } from '../const';

const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

const selectCity = createAction<string>('main/selectCity');

const updateOffers = createAction<Offer>('main/updateOffers');

const updateFavoriteOffers = createAction<Offer>('favorite/updateFavoriteOffers');

const updateNearbyOffers = createAction<Offer>('room/updateNearbyOffers');

const updateCurrentOffer = createAction<Offer>('room/updateCurrentOffer');

const updateComments = createAction<Review[]>('room/updateComments');

export { selectCity, redirectToRoute, updateOffers, updateFavoriteOffers, updateNearbyOffers, updateCurrentOffer, updateComments };
