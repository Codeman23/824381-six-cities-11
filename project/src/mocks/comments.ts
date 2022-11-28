import { type Review } from '../types/review';

const comments : Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Nov 12 2022 11:53:05 GMT+0300 (Москва, стандартное время)',
    id: 198789,
    rating: 2.3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 165,
      isPro: false,
      name: 'Akello'
    }
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Nov 12 2022 11:53:05 GMT+0300 (Москва, стандартное время)',
    id: 434346,
    rating: 4.6,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 223,
      isPro: false,
      name: 'Gela'
    }
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Nov 12 2022 11:53:05 GMT+0300 (Москва, стандартное время)',
    id: 434643,
    rating: 3.4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 452,
      isPro: false,
      name: 'Roman'
    }
  }
];

export { comments };
