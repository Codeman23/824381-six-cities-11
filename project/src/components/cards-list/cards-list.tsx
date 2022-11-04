import { useState } from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offer';

type CardsListProps = {
  offers: Offer[];
  cardClassName: string;
}

function CardsList( {offers, cardClassName }: CardsListProps ): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);

  return (
    <>
      {offers.map((offer: Offer) => <Card key={offer.id} offer={offer} activeCardId={activeCardId} setActiveCard={setActiveCardId} cardClassName={cardClassName} />)}
    </>
  );
}

export default CardsList;
