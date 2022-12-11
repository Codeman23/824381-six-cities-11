import { memo, useMemo } from 'react';
import { Offer } from '../../types/offer';
import { getSortedOffers } from '../../util';
import Card from '../card/card';

type CardsListProps = {
  offers: Offer[];
  activeSortItem?: string;
  pageType: string;
  setActiveCard?: ((offer: Offer | undefined) => void) | undefined;
}

function CardsList({ offers, activeSortItem, pageType, setActiveCard }: CardsListProps): JSX.Element {
  const sortedOffers = useMemo(() => getSortedOffers(offers, activeSortItem || ''), [offers, activeSortItem]);

  return (
    <>
      {sortedOffers.map((offer: Offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} pageType={pageType} />)}
    </>
  );
}

export default memo(CardsList);
