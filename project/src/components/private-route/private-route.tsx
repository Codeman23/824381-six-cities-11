import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  autorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute( {autorizationStatus, children}: PrivateRouteProps ): JSX.Element {
  return (
    autorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
