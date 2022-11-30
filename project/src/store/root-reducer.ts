import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appAction } from './app-action-process/app-action-process';
import { offersData } from './data-process/data-process';
import { userProcess } from './user-process/user-process';

const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.AppAction]: appAction.reducer,
});

export { rootReducer };
