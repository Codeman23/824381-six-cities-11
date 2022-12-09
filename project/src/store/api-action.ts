import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { redirectToRoute, updateComments, updateCurrentOffer, updateFavoriteOffers, updateNearbyOffers, updateOffers } from './action';
import { Auth } from '../types/auth';
import { FavoriteStatusData } from '../types/favorite-status-data';
import { Offer } from '../types/offer';
import { Review, ReviewData } from '../types/review';
import { User } from '../types/user';
import { APIRoute, AppRoute } from '../const';
import { dropUserData, saveUserData } from '../services/user-data';

const fetchCurrentOfferAction = createAsyncThunk<Offer | undefined, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffer',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

const fetchOffersAction = createAsyncThunk<Offer[] | undefined, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(APIRoute.Offers);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

const fetchNearbyOffersAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffersAction',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

const setFavoriteStatusAction = createAsyncThunk<void, FavoriteStatusData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/setFavoriteStatus',
  async ({ currentId, status }, { dispatch, extra: api }) => {
    try {
      if (currentId) {
        const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${currentId}/${status}`);
        dispatch(updateCurrentOffer(data));
        dispatch(updateFavoriteOffers(data));
        dispatch(updateNearbyOffers(data));
        dispatch(updateOffers(data));
      }
    } catch {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  },
);

const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

const fetchCommentsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/getComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

const setCommentAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/setComment',
  async ({ id, formData }, { dispatch, extra: api }) => {
    const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, formData);
    dispatch(updateComments(data));
  },
);

const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
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
    dispatch(redirectToRoute(AppRoute.Main));
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
    dispatch(fetchOffersAction());
  },
);

export { fetchCurrentOfferAction, fetchOffersAction, fetchNearbyOffersAction, fetchFavoriteOffersAction, setFavoriteStatusAction, fetchCommentsAction, setCommentAction, checkAuthAction, loginAction, logoutAction };
