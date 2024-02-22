import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { dummyAirport } from "../dummyData";
import "leaflet.animatedmarker/src/AnimatedMarker";
import L from "leaflet";

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
const { lat, lon, name } = data;
console.log(data);

const data2 = dummyAirport[Object.keys(dummyAirport)[1]];
const { lat: lat2, lon: lon2, name: name2 } = data2;
console.log(data2);

const airplaneIcon = new L.Icon({
  iconUrl: "img/plane-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

function interpolateCoordinates(start, end, t) {
  const lat = start[0] + (end[0] - start[0]) * t;
  const lon = start[1] + (end[1] - start[1]) * t;
  return [lat, lon];
}

function Map() {
  const position1 = [lat, lon];
  const position2 = [lat2, lon2];

  return (
    <StyledMapContainer
      center={position1}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position1}>
        <Popup>{name}</Popup>
      </Marker>
      <Marker position={position2}>
        <Popup>{name2}</Popup>
      </Marker>
      <Marker
        position={interpolateCoordinates(position1, position2, 1)}
        icon={airplaneIcon}
      >
        <Popup>Airplane</Popup>
      </Marker>

      <Polyline
        positions={[position1, position2]}
        color="blue"
        weight={3}
        smoothFactor={1}
        noClip={true}
      />
    </StyledMapContainer>
  );
}

export default Map;
