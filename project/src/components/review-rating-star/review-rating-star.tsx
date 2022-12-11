import { ChangeEvent } from 'react';

type ReviewRatingStarProps = {
  ratingStar: {
    title: string;
    value: number;
  };
  isChecked: boolean;
  handleFormChange: ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formDisabled: boolean;
}

function ReviewRatingStar( {ratingStar, isChecked, handleFormChange, formDisabled}: ReviewRatingStarProps ): JSX.Element {
  const { title, value } = ratingStar;
  return (
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={handleFormChange}
        checked={isChecked}
        disabled ={formDisabled}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewRatingStar;
