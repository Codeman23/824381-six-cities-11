import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';
import { urlMarkerDefault, urlMarkerCurrent, MapIconSize, MapIconPosition } from '../../const';

type MapProps = {
  offers: Offer[];
  activeCard: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: urlMarkerDefault,
  iconSize: [MapIconSize.Width, MapIconSize.Height],
  iconAnchor: [MapIconPosition.X, MapIconPosition.Y]
});

const currentCustomIcon = new Icon({
  iconUrl: urlMarkerCurrent,
  iconSize: [MapIconSize.Width, MapIconSize.Height],
  iconAnchor: [MapIconPosition.X, MapIconPosition.Y]
});

function Map({ offers, activeCard }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeCard === offer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  });

  return (
    <div style={{ height: '100%' }} ref={mapRef}></div>
  );
}

export default Map;
