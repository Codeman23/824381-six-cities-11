import { CityType } from '../../const';
import CityItem from '../city-item/city-item';

function CitiesList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Array.from(Object.values(CityType)).map((city) => <CityItem key={city} city={city} />)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
