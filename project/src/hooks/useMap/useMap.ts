import { useRef, useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { instanceLayer, layerAttribution } from '../../const';
import { City } from '../../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const { latitude, longitude, zoom } = city.location;
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: zoom
      });

      /**
       * Toggle mouse wheel scroll for map zooming by click
       */
      instance.scrollWheelZoom.disable();
      instance.on('click', () => instance.scrollWheelZoom.enabled() ? instance.scrollWheelZoom.disable() : instance.scrollWheelZoom.enable());

      const layer = new TileLayer(
        instanceLayer,
        {
          attribution:
            layerAttribution
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;

    }
  }, [mapRef, map, latitude, longitude, zoom]);

  return map;
}

export default useMap;
