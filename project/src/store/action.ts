import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

const selectCity = createAction<string>('main/selectCity');

const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

export { selectCity, redirectToRoute };
