import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../components/private-route/private-route';
import Realty from '../../pages/realty/realty';

type AppPlaceCountProps = {
  placeCount: number;
  offers: Offer[];
}

function App( {placeCount, offers} : AppPlaceCountProps ): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main placeCount={placeCount} offers={offers} />}/>
        <Route path={AppRoute.Favorites}
          element = {
            <PrivateRoute autorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites offers={offers} />
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
