import { Offer } from '../../types/offer';
import { groupBy } from '../../util';
import Header from '../../components/header/header';
import FavoriteCardsList from '../../components/favorite-cards-list/favorite-cards-list';

type FavoritePageProps = {
  offers: Offer[];
}

function Favorites({ offers }: FavoritePageProps): JSX.Element {
  const favoriteCards = offers.filter((offer) => offer.isFavorite);
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
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
