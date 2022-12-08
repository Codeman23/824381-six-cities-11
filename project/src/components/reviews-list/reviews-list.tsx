import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction } from '../../store/api-action';
import { getComments } from '../../store/data-process/selectors';
import { MAX_REVIEWS_COUNT } from '../../const';
import { sortReviews } from '../../util';
import ReviewItem from '../../components/review-item/review-item';

type ReviewsListProps = {
  id: number;
}

function ReviewsList({ id }: ReviewsListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getComments);
  const sortedReviews = reviews.slice(0, MAX_REVIEWS_COUNT).sort(sortReviews);

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id]);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </>
  );
}

export default ReviewsList;
