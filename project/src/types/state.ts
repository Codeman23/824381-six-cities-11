import { store } from '../store/index.js';

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export { type State, type AppDispatch };
