import { createSlice } from '@reduxjs/toolkit';
import { selectCity } from '../action';
import { AppActionData } from '../../types/state';
import { CityType, NameSpace } from '../../const';

const initialState: AppActionData = {
  city: CityType.Paris,
};

const appAction = createSlice({
  name: NameSpace.AppAction,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(selectCity, (state, action) => {
        state.city = action.payload;
      });
  }
});

export { appAction };
