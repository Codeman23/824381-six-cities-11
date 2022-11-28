import { ChangeEvent } from 'react';

type ReviewRatingStarsProps = {
  ratingStar: {
    title: string;
    value: number;
  };
  isChecked: boolean;
  fieldChangeHandle: ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formDisabled: boolean;
}

function ReviewRatingStars( {ratingStar, isChecked, fieldChangeHandle, formDisabled}: ReviewRatingStarsProps ): JSX.Element {
  const { title, value } = ratingStar;
  return (
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={fieldChangeHandle}
        checked={isChecked}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewRatingStars;
