import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-router/history-router';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getOffersLoadingData } from '../../store/data-process/selectors';
import { AppRoute } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Load from '../../pages/load/load';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import FavoritePrivateRoute from '../favorite-private-route/favorite-private-route';
import LoginPrivateRoute from '../login-private-route/login-private-route';
import Realty from '../../pages/realty/realty';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersLoading = useAppSelector(getOffersLoadingData);

  if (isOffersLoading) {
    return (
      <Load/>
    );
  }

  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}/>
        <Route path={AppRoute.Favorites}
          element = {
            <FavoritePrivateRoute autorizationStatus={authorizationStatus}>
              <Favorites />
            </FavoritePrivateRoute >
          }
        />
        <Route path={AppRoute.Login} element={<LoginPrivateRoute authorizationStatus={authorizationStatus}><Login /></LoginPrivateRoute>}/>
        <Route path={AppRoute.NotFound} element={<NotFound />}/>
        <Route path={AppRoute.Realty} element={<Realty />}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
