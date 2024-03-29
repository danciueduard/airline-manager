import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Map from "./pages/map/Map";
import Airports from "./pages/airport/Airports";
import Fleet from "./pages/fleet/Fleet";
import Staff from "./pages/staff/Staff";
import Services from "./pages/servicesPage/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="map" element={<Map />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="airports" element={<Airports />} />
            <Route path="staff" element={<Staff />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
