import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useDataState } from '../DataContext';

const Map = () => {
  const { data } = useDataState();

  return (
    <MapContainer
      center={[data.lang | 0, data.lat | 0]}
      zoom={1}
      style={{ height: '70vh', zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[data.lat || 0, data.lang || 0]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
