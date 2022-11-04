import { ChangeEvent } from 'react';

type ReviewRatingStarsProps = {
  ratingStar: {
    title: string;
    value: string;
  };
  fieldChangeHandle: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function ReviewRatingStars( {ratingStar, fieldChangeHandle}: ReviewRatingStarsProps ): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={ratingStar.value}
        id={`${ratingStar.value}-stars`}
        type="radio"
        onChange={fieldChangeHandle}
      />
      <label htmlFor={`${ratingStar.value}-stars`} className="reviews__rating-label form__rating-label" title={ratingStar.title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewRatingStars;
