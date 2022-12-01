import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';
import { api } from '../../store';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { convertRating } from '../../util';
import { CardClassName, APIRoute, AppRoute, AuthorizationStatus } from '../../const';
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
  const [offer, setOffer] = useState<Offer | null>(null);
  const [nearbyOffers, setNearbyOffers] = useState<Offer[]>([]);
  const [comments, setComments] = useState<Review[]>([]);

  const navigate = useNavigate();
  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  let offersForMap;

  const getOffer = async () => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${currentId}`);
      setOffer(data);
    } catch (error) {
      navigate(AppRoute.NotFound);
    }
  };

  const getNearbyOffers = async () => {
    try {
      const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${currentId}/nearby`);
      setNearbyOffers(data);
    } catch (error) {
      toast.warn('Can not find nearby offers');
    }
  };

  const getComments = async () => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${currentId}`);
      setComments(data);
    } catch (error) {
      toast.warn('Can not find comments');
    }
  };

  if (offer === null || offer?.id !== Number(id)) {
    getOffer();
    getNearbyOffers();
    getComments();
  }

  if (offer !== null) {
    offersForMap = nearbyOffers.slice(0, 3).concat(offer);
  }

  return (
    <div className="page">
      <Header />
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
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
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
                <ReviewsList reviews={comments} />
                {
                  isAuth && <ReviewForm setComments={setComments} />
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
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                nearbyOffers ? <CardsList offers={nearbyOffers} cardClassName={CardClassName.Main} /> : ''
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Realty;
