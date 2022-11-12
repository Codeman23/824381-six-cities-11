import { type Review } from '../../types/offer';
import ReviewItem from '../../components/review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review: Review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </>
  );
}

export default ReviewsList;
