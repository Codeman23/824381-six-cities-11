import { NameSpace, AuthorizationStatus } from '../../const';
import { State } from '../../types/state';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export { getAuthorizationStatus };
