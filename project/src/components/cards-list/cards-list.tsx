import { memo } from 'react';
import { Offer } from '../../types/offer';
import Card from '../card/card';

type CardsListProps = {
  offers: Offer[];
  pageType: string;
  setActiveCard?: ((offer: Offer | undefined) => void) | undefined;
}

function CardsList({ offers, pageType, setActiveCard }: CardsListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: Offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} pageType={pageType} />)}
    </>
  );
}

export default memo(CardsList);
