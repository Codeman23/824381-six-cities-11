import { User } from './offer';

type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

type ReviewData = {
  comment: string;
  rating: number | null;
}

export { type Review, type ReviewData };
