import { Link } from 'react-router-dom';
import CardsList from '../cards-list/cards-list';
import { Offer } from '../../types/offer';
import { PageType, AppRoute } from '../../const';

type FavoriteCardsListProps = {
  offers: Offer[];
  city: string;
}

function FavoriteCardsList( { offers, city }: FavoriteCardsListProps ): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <CardsList offers={offers} pageType={PageType.Favorite} />
      </div>
    </li>
  );
}

export default FavoriteCardsList;
