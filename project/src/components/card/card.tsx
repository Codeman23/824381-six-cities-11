import { useState } from 'react';
import { Link } from 'react-router-dom';
import { type Offer } from '../../types/offer';
import { CardClassName, AppRoute } from '../../const';
import { convertRating } from '../../util';

type CardProps = {
  offer: Offer;
  getActiveCard: ((offer: Offer | undefined) => void) | undefined;
  cardClassName: string;
}

function Card( { offer, getActiveCard, cardClassName }: CardProps ): JSX.Element {
  const {id, title, isPremium, isFavorite, previewImage, price, type, rating} = offer;
  const [buttonState, setButtonState] = useState(isFavorite);

  const onMouseOverHandler = () => {
    if (getActiveCard) {
      return getActiveCard(offer);
    }
  };

  const onMouseLeaveHandler = () => {
    if (getActiveCard) {
      return getActiveCard(undefined);
    }
  };

  const buttonClickHandle = () => {
    setButtonState((prevButtonState) => !prevButtonState);
  };

  return (
    <article id={String(id)} className={`${cardClassName}__card place-card`} onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null }
      <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Realty}>
          <img className="place-card__image" src={previewImage} width={cardClassName === CardClassName.Main ? '260' : '150'} height={cardClassName === CardClassName.Main ? '200' : '110'} alt="place-img" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${buttonState ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={buttonClickHandle}
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
          <Link to={AppRoute.Realty}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
