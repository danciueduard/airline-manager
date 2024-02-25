import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { dummyAirport } from "../../dummyData";
import "leaflet.animatedmarker/src/AnimatedMarker";
import { routes } from "../../dummyData";
import FlyRoute from "./FlyRoute";

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

const data = dummyAirport[Object.keys(dummyAirport)[0]];
const { lat, lon } = data;

function Map() {
  const position1 = [lat, lon];

  return (
    <StyledMapContainer
      center={position1}
      zoom={10}
      maxZoom={10}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {routes.map((item, i) => {
        return <FlyRoute key={i} startAirport={item[0]} endAirport={item[1]} />;
      })}
    </StyledMapContainer>
  );
}

export default Map;
