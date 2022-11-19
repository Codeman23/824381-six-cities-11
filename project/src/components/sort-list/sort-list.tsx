import { useState } from 'react';
import { SortType } from '../../const';
import SortItem from '../sort-item/sort-item';

type SortListProps = {
  activeSortItem: string;
  setActiveSortItem: (sortType: string) => void;
}

function SortList( {activeSortItem, setActiveSortItem}: SortListProps ): JSX.Element {
  const [isActive, setActive] = useState<boolean>(false);
  const selectSortType = (sortType: string) => {
    setActiveSortItem(sortType);
    setActive(!isActive);
  };

  return (
    <div className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        onMouseDown={() => setActive(!isActive)}
        tabIndex={0}
      >
        {activeSortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isActive ? 'places__options--opened' : ''}`}>
        {Array.from(Object.values(SortType)).map((item) => <SortItem key={item} sortType={item} activeSortItem={activeSortItem} selectSortType={selectSortType} />)}
      </ul>
    </div>
  );
}

export default SortList;
