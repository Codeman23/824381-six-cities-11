import { ChangeEvent, useState } from 'react';
import ReviewRatingStars from '../../components/review-rating-star/review-rating-star';

function ReviewForm(): JSX.Element {

  const RatingData = [
    {
      title: 'perfect',
      value: '5'
    },
    {
      title: 'good',
      value: '4'
    },
    {
      title: 'not bad',
      value: '3'
    },
    {
      title: 'badly',
      value: '2'
    },
    {
      title: 'terribly',
      value: '1'
    }
  ];

  const [formData, setFormData] = useState({
    review: '',
    rating: ''
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <div>{formData.rating} -- {formData.review}</div>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingData.map((data) => <ReviewRatingStars key={data.value} ratingStar={data} fieldChangeHandle={fieldChangeHandle} />)}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={fieldChangeHandle}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
