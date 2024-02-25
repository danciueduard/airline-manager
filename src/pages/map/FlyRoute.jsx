import { Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";

function calculateRemainingTimePercentage(
  departureTime,
  landingTime,
  currentTime
) {
  const departureTimestamp = new Date(departureTime).getTime();
  const landingTimestamp = new Date(landingTime).getTime();
  const currentTimestamp = new Date(currentTime).getTime();

  const totalFlightTime = landingTimestamp - departureTimestamp;
  const elapsedTime = currentTimestamp - departureTimestamp;

  const remainingTime = Math.max(0, totalFlightTime - elapsedTime);

  // Calculate the percentage of time remaining
  const percentageRemaining = (remainingTime / totalFlightTime) * 100;

  return percentageRemaining;
}

// Example usage:
const departureTime = "2023-12-01T12:00:00"; // Replace with your actual departure time
const landingTime = "2023-12-01T18:00:00"; // Replace with your actual landing time
const currentTime = new Date(); // Use the current time

const percentageRemaining = calculateRemainingTimePercentage(
  departureTime,
  landingTime,
  currentTime
);

////////////////////////////////////////////////////////////////////////////////////////

const airplaneIcon = new L.Icon({
  iconUrl: "img/plane-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

function currentPlanePosition(flyFrom, flyTo, progress) {
  const lat = flyFrom[0] + (flyTo[0] - flyFrom[0]) * (progress / 100);
  const lon = flyFrom[1] + (flyTo[1] - flyFrom[1]) * (progress / 100);
  return [lat, lon];
}

function FlyRoute({ startAirport, endAirport }) {
  const startAirportCoords = [startAirport.lat, startAirport.lon];
  const endAirportCoords = [endAirport.lat, endAirport.lon];

  return (
    <div>
      <Marker position={startAirportCoords}>
        <Popup>{startAirport.name}</Popup>
      </Marker>
      <Marker position={endAirportCoords}>
        <Popup>{endAirport.name}</Popup>
      </Marker>
      <Marker
        position={currentPlanePosition(
          startAirportCoords,
          endAirportCoords,
          20
        )}
        icon={airplaneIcon}
      >
        <Popup>Airplane</Popup>
      </Marker>

      <Polyline
        positions={[startAirportCoords, endAirportCoords]}
        color="blue"
        weight={3}
        smoothFactor={1}
        noClip={true}
      />
    </div>
  );
}

export default FlyRoute;
