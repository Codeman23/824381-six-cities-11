import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { fetchFavoriteOffersAction } from '../../store/api-action';
import { getFavoriteOffers } from '../../store/data-process/selectors';
import { AppRoute } from '../../const';
import { groupBy } from '../../util';
import Header from '../../components/header/header';
import FavoriteCardsList from '../../components/favorite-cards-list/favorite-cards-list';

function Favorites(): JSX.Element {
  const [isFavoritesLoaded, setFavoritesLoaded] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoritesGroups = groupBy(favoriteOffers, (i) => i.city.name);
  const isEmpty = favoriteOffers.length === 0;

  useEffect(() => {
    if (isFavoritesLoaded) {return;}
    dispatch(fetchFavoriteOffersAction());
    setFavoritesLoaded(true);},
  [dispatch, isFavoritesLoaded]
  );

  return (
    <div className="page">
      <Header count={favoriteOffers.length} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{isEmpty ? 'There are no saved listing' : 'Saved listing'}</h1>
            <ul className="favorites__list">
              {!isEmpty ? Object.entries(favoritesGroups).map((item) => {
                const cityName = item[0];
                const cityOffers = item[1];
                return <FavoriteCardsList key={cityName} city={cityName} offers={cityOffers}/>;
              }) : ''}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
