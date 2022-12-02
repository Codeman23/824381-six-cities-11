import { memo } from 'react';
import { getSortedOffers } from '../../util';
import { Offer } from '../../types/offer';
import Card from '../card/card';

type CardsListProps = {
  offers: Offer[];
  activeSortItem?: string;
  pageType: string;
  setActiveCard?: ((offer: Offer | undefined) => void) | undefined;
}

function CardsList({ offers, activeSortItem, pageType, setActiveCard }: CardsListProps): JSX.Element {
  const currentOffers = activeSortItem ? getSortedOffers(offers, activeSortItem) : offers;

  return (
    <>
      {currentOffers.map((offer: Offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} pageType={pageType} />)}
    </>
  );
}

export default memo(CardsList);
