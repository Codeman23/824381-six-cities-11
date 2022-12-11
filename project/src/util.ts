import dayjs from 'dayjs';
import { RaitingValues, SortType } from './const';
import { Offer } from './types/offer';
import { Review } from './types/review';

/**
 * Helper function that convert date format
 * @param date - source date
 * @param format - date format
 * @returns formated date
 */
const humanizeDate = (date: string, format: string) => dayjs(date).format(format);

/**
 * Helper function that group array of objects by value of object property
 * @param array - array
 * @param predicate - property value
 * @returns - grouped object
 */
const groupBy = <T>(array: T[], predicate: (value: T, index: number, array: T[]) => string) =>
  array.reduce((acc, value, index, arr) => {
    (acc[predicate(value, index, arr)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });

/**
 * Helper function that conver rating to css width property value
 * @param raiting - raiting number
 * @returns - number value for css width property
 */
const convertRating = (raiting:number) : number => Math.round(raiting) * RaitingValues.MaxValue / RaitingValues.MaxStars;

/**
 *  Function that putt items with no data to the end of the list
 * @param itemA - item data
 * @param itemB - item data
 * @returns - sorted items
 */
const getItemsWithNoData = (itemA: number, itemB: number) => {
  if (itemA === null && itemB === null) {return 0;}
  if (itemA === null) {return 1;}
  if (itemB === null) {return -1;}
  return null;
};

/**
 * Function that sorts items by highest price
 * @param offerA - item data
 * @param offerB - item data
 * @returns - sorted items
 */
const sortHighToLow = (offerA: Offer, offerB: Offer) => {
  const itemsWithNoData = getItemsWithNoData(offerA.price, offerB.price);
  return itemsWithNoData ?? offerB.price - offerA.price;
};

/**
 * Function that sorts items by lowest price
 * @param offerA - item data
 * @param offerB - item data
 * @returns - sorted items
 */
const sortLowToHigh = (offerA: Offer, offerB: Offer) => {
  const itemsWithNoData = getItemsWithNoData(offerA.price, offerB.price);
  return itemsWithNoData ?? offerA.price - offerB.price;
};

/**
 * Function that sorts items by highest rating
 * @param offerA - item data
 * @param offerB - item data
 * @returns - sorted items
 */
const sortTopRated = (offerA: Offer, offerB: Offer) => {
  const itemsWithNoData = getItemsWithNoData(offerA.rating, offerB.rating);
  return itemsWithNoData ?? offerB.rating - offerA.rating;
};

/**
 * Function that sorts items by sort type
 * @param offers - items with data
 * @param sortType - sort type
 * @returns - sorted items
 */
const getSortedOffers = (offers: Offer[], sortType: string) => {
  let sortedOffers = offers.slice();
  switch (sortType) {
    case SortType.LowToHigh: sortedOffers = sortedOffers.sort(sortLowToHigh);
      break;
    case SortType.HighToLow: sortedOffers = sortedOffers.sort(sortHighToLow);
      break;
    case SortType.TopRated: sortedOffers = sortedOffers.sort(sortTopRated);
      break;
    default: sortedOffers = offers;
  }
  return sortedOffers;
};

/**
 * Function that sorts reviews by date
 * @param reviewA - review item
 * @param reviewB - review item
 * @returns - sorted reviews
 */
const sortReviews = (reviewA: Review, reviewB: Review) => dayjs(reviewB.date).diff(dayjs(reviewA.date));

/**
 * Function that returns random number from specified range value
 * @param min - min range value
 * @param max - max range value
 * @returns  - random number
 */
function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Function that remove current item from items
 * @param offers - items
 * @param currentOffer - curent item
 * @returns items without current item
 */
const removeOffer = (offers: Offer[], currentOffer: Offer) => {
  const currenIndex = offers.findIndex((offer) => offer.id === currentOffer.id);
  const currentOffers = [
    ...offers.slice(0, currenIndex),
    currentOffer,
    ...offers.slice(currenIndex + 1),
  ];

  return currentOffers;
};

export { groupBy, convertRating, humanizeDate, getSortedOffers, sortReviews, getRandomNumber, removeOffer };
