import { memo } from 'react';
import { getSortedOffers } from '../../util';
import { Offer } from '../../types/offer';
import Card from '../card/card';


type CardsListProps = {
  offers: Offer[];
  activeSortItem?: string;
  cardClassName: string;
  getActiveCard?: ((offer: Offer | undefined) => void) | undefined;
}

function CardsList({ offers, activeSortItem, cardClassName, getActiveCard }: CardsListProps): JSX.Element {
  const currentOffers = activeSortItem ? getSortedOffers(offers, activeSortItem) : offers;

  return (
    <>
      {currentOffers.map((offer: Offer) => <Card key={offer.id} offer={offer} getActiveCard={getActiveCard} cardClassName={cardClassName} />)}
    </>
  );
}

export default memo(CardsList);
