import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
const getOffersLoadedData = (state: State): boolean => state[NameSpace.Data].isOffersLoaded;

export { getOffers, getOffersLoadedData };
