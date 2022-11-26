import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Load from '../../pages/load/load';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import Realty from '../../pages/realty/realty';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersLoaded = useAppSelector((state) => state.isOffersLoaded);

  if(authorizationStatus === AuthorizationStatus.Unknown || isOffersLoaded) {
    return (
      <Load/>
    );
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}/>
        <Route path={AppRoute.Favorites}
          element = {
            <PrivateRoute autorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route path={AppRoute.NotFound} element={<NotFound />}/>
        <Route path={AppRoute.Realty} element={<Realty />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
