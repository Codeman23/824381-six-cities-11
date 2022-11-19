type SortItemProps = {
  sortType: string;
  activeSortItem: string;
  selectSortType: (sortItem: string) => void;
}

function SortItem({ sortType, activeSortItem, selectSortType }: SortItemProps): JSX.Element {
  return (
    <li className={`places__option ${sortType === activeSortItem ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => selectSortType(sortType)}
    >
      {sortType}
    </li>
  );
}

export default SortItem;
