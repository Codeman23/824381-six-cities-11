import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer, City } from '../../types/offer';
import { urlMarkerDefault, urlMarkerCurrent, MapIconSize, MapIconPosition } from '../../const';

type MapProps = {
  offers: Offer[];
  activeCard?: Offer | undefined;
  city: City;
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

function Map({ offers, activeCard, city }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeCard !== undefined && activeCard === offer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [offers, activeCard, map]);

  return (
    <div style={{ height: '100%' }} ref={mapRef}></div>
  );
}

export default Map;
