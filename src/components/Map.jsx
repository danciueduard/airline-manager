import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const StyledMapContainer = styled(MapContainer)`
  height: 100vh;
  width: var(--initial-width);
  margin: 0;

  .leaflet-control-attribution {
    position: absolute;
    bottom: 5.2rem;
    background: transparent;
  }
`;

function Map() {
  const position = [51.505, -0.09];
  return (
    <StyledMapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </StyledMapContainer>
  );
}

export default Map;
