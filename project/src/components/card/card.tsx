import { Link } from 'react-router-dom';
import { type Offer } from '../../types/offer';
import { useAppDispatch } from '../../hooks';
import { setFavoriteStatusAction } from '../../store/api-action';
import { PageType, FavoriteStatus } from '../../const';
import { convertRating } from '../../util';

type CardProps = {
  offer: Offer;
  setActiveCard: ((offer: Offer | undefined) => void) | undefined;
  pageType: string;
  updateType?: string;
}

function Card( { offer, setActiveCard, updateType, pageType }: CardProps ): JSX.Element {
  const {id, title, isPremium, isFavorite, previewImage, price, type, rating} = offer;
  const dispatch = useAppDispatch();

  const onMouseOverHandler = () => {
    if (setActiveCard) {
      return setActiveCard(offer);
    }
  };

  const onMouseLeaveHandler = () => {
    if (setActiveCard) {
      return setActiveCard(undefined);
    }
  };

  const favoriteButtonClickHandle = () => {
    dispatch(setFavoriteStatusAction({
      currentId: id,
      status: isFavorite ? FavoriteStatus.NotFavorite : FavoriteStatus.Favorite,
    }));
  };

  return (
    <article id={String(id)} className={`${pageType}__card place-card`} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null }
      <div className={`${pageType}__image-wrapper place-card__image-wrapper`}>
        <Link to={ `/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage} width={pageType !== PageType.Favorite ? '260' : '150'}
            height={pageType !== PageType.Favorite ? '200' : '110'}
            alt="Place"
          />
        </Link>
      </div>
      <div className={`${pageType === PageType.Favorite ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={favoriteButtonClickHandle}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${convertRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default Card;
