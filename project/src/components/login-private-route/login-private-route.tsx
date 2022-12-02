import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type LoginPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function LoginPrivateRoute({ authorizationStatus, children }: LoginPrivateRouteProps): JSX.Element {
  return (
    authorizationStatus !== AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Main} />
  );
}

export default LoginPrivateRoute;
