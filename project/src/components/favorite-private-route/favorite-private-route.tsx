import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type FavoritePrivateRouteProps = {
  autorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function FavoritePrivateRoute( {autorizationStatus, children}: FavoritePrivateRouteProps ): JSX.Element {
  return (
    autorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default FavoritePrivateRoute;
