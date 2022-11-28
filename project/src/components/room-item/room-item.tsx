type RoomItemProps = {
  roomItem: string;
}

function RoomItem({ roomItem }: RoomItemProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {roomItem}
    </li>
  );
}

export default RoomItem;
