import Card from '../card/card';
import { Offer } from '../../types/offer';

type CardsListProps = {
  offers: Offer[];
  cardClassName: string;
  getActiveCard?: ((offer: Offer | undefined) => void) | undefined;
}

function CardsList( {offers, cardClassName, getActiveCard }: CardsListProps ): JSX.Element {

  return (
    <>
      {offers.map((offer: Offer) => <Card key={offer.id} offer={offer} getActiveCard={getActiveCard} cardClassName={cardClassName} />)}
    </>
  );
}

export default CardsList;
