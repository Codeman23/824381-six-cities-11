import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';

const getOffer = (state: State): Offer => state[NameSpace.Data].currentOffer as Offer;
const getOfferLoadedData = (state: State): boolean => state[NameSpace.Data].loadedState.isCurrentOfferLoading;
const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers as Offer[];
const getOffersLoadingData = (state: State): boolean => state[NameSpace.Data].loadedState.isOffersLoading;
const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
const getComments = (state: State): Review[] => state[NameSpace.Data].comments;

export { getOffer, getOfferLoadedData, getOffers, getOffersLoadingData, getFavoriteOffers, getNearbyOffers, getComments };
