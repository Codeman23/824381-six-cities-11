import { type Offer } from '../types/offer';

const offers : Offer[] = [
  {
    city: {
      name: 'Cape Town',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 11
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/18.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/8.jpg',
      'https://11.react.pages.academy/static/hotel/6.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/14.jpg',
      'https://11.react.pages.academy/static/hotel/1.jpg',
      'https://11.react.pages.academy/static/hotel/4.jpg',
      'https://11.react.pages.academy/static/hotel/7.jpg',
      'https://11.react.pages.academy/static/hotel/12.jpg',
      'https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/10.jpg'
    ],
    title: 'Great flat with 4-5 rooms + 5 balconies',
    isFavorite: true,
    isPremium: false,
    rating: 4.1,
    type: 'hotel',

    bedrooms: 2,
    maxAdults: 5,
    price: 393,
    goods: [
      'Air conditioning',
      'Laptop friendly workspace',
      'Breakfast',
      'Washer',
    ],
    host: {
      id: 111,
      name: 'Anna',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Elegant luxury accommodation for 2 people with amazing panoramic views over the Sea.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },
    id: 1
  },
  {
    city: {
      name: 'Johannesburg',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 12
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/19.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/3.jpg',
      'https://11.react.pages.academy/static/hotel/2.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/20.jpg',
      'https://11.react.pages.academy/static/hotel/9.jpg',
      'https://11.react.pages.academy/static/hotel/10.jpg',
      'https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/18.jpg',
      'https://11.react.pages.academy/static/hotel/7.jpg',
      'https://11.react.pages.academy/static/hotel/8.jpg'
    ],
    title: 'Entire flat hosted by Fanis&Tina',
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
    type: 'house',

    bedrooms: 2,
    maxAdults: 3,
    price: 654,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 222,
      name: 'Sofia',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'The interior pays respect to functional and elegant living while being in line with the latest technology and modern comfort. Airy design combines light and bright colors with rectangular volumes and wooden floors to create an imitable heartwarming effect.',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },
    id: 2
  },
  {
    city: {
      name: 'Nairobi',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 11
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/6.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/14.jpg',
      'https://11.react.pages.academy/static/hotel/11.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/9.jpg',
      'https://11.react.pages.academy/static/hotel/2.jpg',
      'https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/6.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/12.jpg',
      'https://11.react.pages.academy/static/hotel/7.jpg'
    ],
    title: 'Warm big bed apartment',
    isFavorite: true,
    isPremium: false,
    rating: 3,
    type: 'house',

    bedrooms: 4,
    maxAdults: 8,
    price: 198,
    goods: [
      'Air conditioning',
      'Baby seat',
      'Fridge',
      'Breakfast',
      'Towels',
      'Dishwasher',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      id: 333,
      name: 'Juiliana',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Have you ever dreamed of living in a magazine like home? Immerse yourself in a perfect experience of relaxation in this beautiful, luxury, two-story villa..',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 11
    },
    id: 3
  },
  {
    city: {
      name: 'Cape Town',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 12
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/4.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/17.jpg',
      'https://11.react.pages.academy/static/hotel/9.jpg',
      'https://11.react.pages.academy/static/hotel/10.jpg',
      'https://11.react.pages.academy/static/hotel/14.jpg',
      'https://11.react.pages.academy/static/hotel/6.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/3.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/16.jpg'
    ],
    title: 'Loft Studio in the South Central',
    isFavorite: true,
    isPremium: false,
    rating: 3.7,
    type: 'house',

    bedrooms: 3,
    maxAdults: 8,
    price: 853,
    goods: [
      'Dishwasher',
      'Air conditioning',
      'Breakfast',
      'Baby seat',
      'Fridge',
      'Washer',
      'Towels',
      'Coffee machine',
      'Laptop friendly workspace'
    ],
    host: {
      id: 444,
      name: 'Nina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated.',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 11
    },
    id: 4
  }
];

export { offers };
