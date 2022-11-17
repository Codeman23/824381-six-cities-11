import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';
import { AppRoute } from '../../const';
import { groupBy } from '../../util';
import Header from '../../components/header/header';
import FavoriteCardsList from '../../components/favorite-cards-list/favorite-cards-list';

function Favorites(): JSX.Element {
  const favoriteCards = useAppSelector((state) => state.offers).filter((offer) => offer.isFavorite);
  const favoritesGroups = groupBy(favoriteCards, (i) => i.city.name);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesGroups).map((item) => {
                const cityName = item[0];
                const cityOffers = item[1];
                return <FavoriteCardsList key={cityName} city={cityName} offers={cityOffers}/>;
              })}
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
