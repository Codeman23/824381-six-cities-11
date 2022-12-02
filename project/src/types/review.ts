import { User } from './offer';

type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

type FormData = {
  comment: string;
  rating: number | null;
}

type ReviewData = {
  id: number;
  formData: FormData;
}

export { type Review, type FormData, type ReviewData };
