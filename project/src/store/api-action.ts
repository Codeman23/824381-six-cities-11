import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { loadOffers, setOffersLoadStatus, setError, setAuthorizationStatus} from './action';
import { Offer } from '../types/offer';
import { APIRoute, AuthorizationStatus, TIMEOUT_ERROR } from '../const';
import { dropUserData, saveUserData } from '../services/user-data';
import { User } from '../types/user';
import { Auth } from '../types/auth';
import { store } from '.';

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersLoadStatus(true));
    dispatch(loadOffers(data));
    dispatch(setOffersLoadStatus(false));
  }
);

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

const loginAction = createAsyncThunk<void, Auth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<User>(APIRoute.Login, { email, password });
    saveUserData(data);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropUserData();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_ERROR,
    );
  },
);

export { fetchOffersAction, checkAuthAction, loginAction, logoutAction, clearErrorAction };
