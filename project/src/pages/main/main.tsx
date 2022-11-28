import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getSortedOffers } from '../../util';
import { CardClassName, SortType } from '../../const';
import { Offer } from '../../types/offer';
import { fetchOffersAction } from '../../store/api-action';
import CardsList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import SortList from '../../components/sort-list/sort-list';

function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const [activeSortItem, setActiveSortItem] = useState<string>(SortType.Popular);

  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

  if(offers.length === 0) {
    dispatch(fetchOffersAction());
  }

  const city = useAppSelector((state) => state.city);
  const currentOffers = offers.filter((offer) => offer.city.name === city);
  const sortedOffers = getSortedOffers(currentOffers, activeSortItem);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {city}</b>
              <SortList activeSortItem={activeSortItem} setActiveSortItem={setActiveSortItem} />
              <div className="cities__places-list places__list tabs__content">
                <CardsList offers={sortedOffers} getActiveCard={setActiveCard} cardClassName={CardClassName.Main} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {currentOffers[0]?.city && <Map offers={currentOffers} activeCard={activeCard} city={currentOffers[0].city} />}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
