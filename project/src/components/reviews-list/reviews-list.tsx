import { type Review } from '../../types/review';
import { MAX_REVIEWS_COUNT } from '../../const';
import { sortReviews } from '../../util';
import ReviewItem from '../../components/review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const sortedReviews = reviews.slice(0, MAX_REVIEWS_COUNT).sort(sortReviews);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review: Review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </>
  );
}

export default ReviewsList;
