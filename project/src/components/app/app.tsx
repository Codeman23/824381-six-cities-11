import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import Realty from '../../pages/realty/realty';
import { useAppSelector } from '../../hooks';
import Load from '../../pages/load/load';

function App(): JSX.Element {
  const isOffersLoaded = useAppSelector((state) => state.isOffersLoaded);

  if(isOffersLoaded) {
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
            <PrivateRoute autorizationStatus={AuthorizationStatus.NoAuth}>
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
