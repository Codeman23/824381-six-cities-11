import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { FormData } from '../../types/review';
import { RatingData, LengthComment } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setCommentAction } from '../../store/api-action';
import { getIsCommentLoading, getIsCommentLoadSuccess } from '../../store/data-process/selectors';
import ReviewRatingStar from '../../components/review-rating-star/review-rating-star';

type ReviewFormProps = {
  id: number;
};

const defaultFormData = {
  comment: '',
  rating: null
};

function ReviewForm({ id }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isCommentLoading = useAppSelector(getIsCommentLoading);
  const isCommentLoadSuccess = useAppSelector(getIsCommentLoadSuccess);
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  useEffect(() => {
    if (isCommentLoadSuccess) {
      setFormData(defaultFormData);
    }
  }, [isCommentLoadSuccess]);

  const isValidForm = (LengthComment.Min < formData.comment.length && formData.comment.length < LengthComment.Max && formData.rating !== null && formData.rating > 0);
  const isFormDisabled = !isValidForm || isCommentLoading;

  const handleFormChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (isValidForm) { dispatch(setCommentAction({ id, formData })); }
  };

  return (
    <form className="reviews__form form" action="" onSubmit={(evt) => {handleFormSubmit(evt);}}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RatingData.map((data) =>
            <ReviewRatingStar key={data.value} ratingStar={data} isChecked={data.value === Number(formData.rating)} formDisabled={isCommentLoading} handleFormChange={handleFormChange} />
          )
        }
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        maxLength={LengthComment.Max}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFormChange}
        disabled={isCommentLoading}
        value={formData.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
