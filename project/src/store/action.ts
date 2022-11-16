import { createAction } from '@reduxjs/toolkit';

const selectCity = createAction<string>('main/selectCity');

export {selectCity};
