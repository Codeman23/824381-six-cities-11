import { ChangeEvent, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { APIRoute, RatingData, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';
import { api } from '../../store';
import { Review, ReviewData } from '../../types/review';
import ReviewRatingStars from '../../components/review-rating-star/review-rating-star';

type ReviewFormProps = {
  setComments: (comments: Review[]) => void;
};

function ReviewForm( {setComments}: ReviewFormProps ): JSX.Element {

  const { id } = useParams();
  const [formDisabled, setFormDisabled] = useState<boolean>(false);
  const defaultFormData = {
    comment: '',
    rating: null
  };
  const [formData, setFormData] = useState<ReviewData>(defaultFormData);

  const fieldChangeHandle = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    try {
      setFormDisabled(true);
      const { data } = await api.post<Review[]>(`${APIRoute.Comments}/${Number(id)}`, formData);
      setComments(data);
      setFormDisabled(false);
      setFormData(defaultFormData);
    } catch (error) {
      toast.warn('Can not send your comment');
      setFormDisabled(false);
    }
  };

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
