import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { fetchCurrentOfferAction, fetchFavoriteOffersAction, fetchNearbyOffersAction, setFavoriteStatusAction } from '../../store/api-action';
import { getFavoriteOffers, getNearbyOffers, getOffer } from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { convertRating } from '../../util';
import { PageType, AuthorizationStatus, FavoriteStatus } from '../../const';
import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import RoomImage from '../../components/room-image/room-image';
import RoomItem from '../../components/room-item/room-item';

function Realty(): JSX.Element {
  const { id } = useParams();
  const currentId = Number(id);
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const favoriteCount = useAppSelector(getFavoriteOffers).length;
  let offersForMap;
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const handleFavoriteButtonClick = () => {
    dispatch(setFavoriteStatusAction({
      currentId: currentId,
      status: offer.isFavorite ? FavoriteStatus.NotFavorite : FavoriteStatus.Favorite
    }));
  };

  if (offer !== null) {
    offersForMap = nearbyOffers.slice(0, 3).concat(offer);
  }

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchFavoriteOffersAction());
    }
    if (offer === undefined || offer.id !== currentId) {
      dispatch(fetchCurrentOfferAction(currentId));
      dispatch(fetchNearbyOffersAction(currentId));
    }
  }, [currentId, dispatch, isAuth, offer]
  );

  return (
    <div className="page">
      <Header count={favoriteCount} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer?.images.slice(0, 6).map((img) =><RoomImage key={img} imageUrl={img} alt={offer.type} />)
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer?.isPremium &&
                <div className="property__mark"><span>Premium</span></div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer?.title}
                </h1>
                <button
                  className={`property__bookmark-button ${offer?.isFavorite ? 'property__bookmark-button--active' : ''} button`}
                  type="button"
                  onClick={handleFavoriteButtonClick}
                >
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${offer ? convertRating(offer.rating) : '0'}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer ? offer?.type.charAt(0).toUpperCase() + offer?.type.slice(1) : ''}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer?.goods.map((item) => <RoomItem key={item} roomItem={item} />)
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer?.host.name}
                  </span>
                  {offer?.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  {offer?.description}
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList id={currentId} />
                {
                  isAuth && <ReviewForm id={currentId} />
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            {
              offersForMap && offer ? <Map offers={offersForMap} activeCard={offer} city={offersForMap[0].city} /> : ''
            }
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">{nearbyOffers.length !== 0 ? 'Other places in the neighbourhood' : 'There are no neighbourhood offers'}</h2>
            <div className="near-places__list places__list">
              {
                nearbyOffers ? <CardsList offers={nearbyOffers} pageType={PageType.Room} /> : ''
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Realty;
