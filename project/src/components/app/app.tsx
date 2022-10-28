import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import Realty from '../../pages/realty/realty';
import PrivateRoute from '../../components/private-route/private-route';

type AppPlaceCountProps = {
  placeCount: number;
}

function App( {placeCount} : AppPlaceCountProps ): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main placeCount={placeCount} />}/>
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
