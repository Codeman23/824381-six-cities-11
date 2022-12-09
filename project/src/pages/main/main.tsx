import { useState, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { PageType, SortType } from '../../const';
import { Offer } from '../../types/offer';
import { getCity } from '../../store/app-action-process/selectors';
import { getOffers } from '../../store/data-process/selectors';
import { selectCity } from '../../store/action';
import { getSortedOffers } from '../../util';
import CardsList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import NotAvailable from '../../components/not-available/not-available';
import SortList from '../../components/sort-list/sort-list';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);
  const [activeSortItem, setActiveSortItem] = useState<string>(SortType.Popular);
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const setCity = useCallback((cityItem: string) => dispatch(selectCity(cityItem)), [dispatch]);
  const favoriteCount = offers.filter((offer) => offer.isFavorite).length;
  const sortedByCityOffers = offers.filter((offer) => offer.city.name === city);
  const currentOffers = getSortedOffers(sortedByCityOffers, activeSortItem);

  const isEmpty = currentOffers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header count={favoriteCount} />
      <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList selectedCity={city} setCity={setCity}/>
        <div className="cities">
          {
            isEmpty ? < NotAvailable city={city} /> :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {city}</b>
                  <SortList activeSortItem={activeSortItem} setActiveSortItem={setActiveSortItem} />
                  <div className="cities__places-list places__list tabs__content">
                    <CardsList offers={currentOffers} setActiveCard={setActiveCard} pageType={PageType.Main} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    {currentOffers[0].city && <Map offers={currentOffers} activeCard={activeCard} city={currentOffers[0].city} />}
                  </section>
                </div>
              </div>
          }
        </div>
      </main>
    </div>
  );
}

export default Main;
