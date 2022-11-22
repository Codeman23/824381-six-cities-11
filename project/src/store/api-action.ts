import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { loadOffers, setOffersLoadStatus} from './action';
import { Offer } from '../types/offer';
import { APIRoute } from '../const';

const fetchOffersAction = createAsyncThunk <void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api}) => {
    dispatch(setOffersLoadStatus(true));

    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers(data));

    dispatch(setOffersLoadStatus(false));
  }
);

export { fetchOffersAction };
