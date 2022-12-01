import { NameSpace } from '../../const';
import { State } from '../../types/state';

const getCity = (state: State): string => state[NameSpace.AppAction].city;

export { getCity };
