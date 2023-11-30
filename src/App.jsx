import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./assets/AppLayout";
import Map from "./assets/components/Map";
import FleetContainer from "./pages/fleet/FleetContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="map" element={<Map />} />
            <Route path="fleet" element={<FleetContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
