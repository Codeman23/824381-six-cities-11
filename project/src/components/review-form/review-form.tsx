import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { FormData } from '../../types/review';
import { RatingData, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setCommentAction } from '../../store/api-action';
import ReviewRatingStars from '../../components/review-rating-star/review-rating-star';

type ReviewFormProps = {
  id: number;
};

const defaultFormData = {
  comment: '',
  rating: null
};

function ReviewForm({ id }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formDisabled, setFormDisabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const fieldChangeHandle = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    setFormDisabled(true);
    dispatch(setCommentAction({ id, formData }));
    setFormData(defaultFormData);
    setFormDisabled(false);
  };

  useEffect(() => { setFormData(defaultFormData);}, [id]);

  return (
    <form className="reviews__form form" action="" onSubmit={(evt) => {handleSubmit(evt);}}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RatingData.map((data) =>
            <ReviewRatingStars key={data.value} ratingStar={data} isChecked={data.value === Number(formData.rating)} formDisabled={formDisabled} fieldChangeHandle={fieldChangeHandle} />
          )
        }
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        maxLength={MAX_COMMENT_LENGTH}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangeHandle}
        disabled={formDisabled}
        value={formData.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.comment.length < MIN_COMMENT_LENGTH || formData.rating === null || formDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
