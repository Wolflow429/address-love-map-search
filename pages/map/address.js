import React from 'react'
import { GoogleMap, Marker, Icon, useJsApiLoader } from '@react-google-maps/api';

const homes = require('/homes.json');

const containerStyle = { width: '1280px', height: '800px' };

const center = { lat: 36.2048, lng: 138.2529 };

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const markers = homes.map((home) =>
    <Marker
      title={home.title}
      position={
        {
          lat: home.location.latitude,
          lng: home.location.longitude
        }
      }>
    </Marker>
  );

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers}
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)