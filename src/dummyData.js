export const dummyFleet = [
  {
    model: "Boeing 737",
    maxRange: 2000,
    maxCapacity: "183",
    status: "Parked",
    condition: "81%",
    planeImg:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/South_African_Airlink_Boeing_737-200_Advanced_Smith.jpg",
    id: 10,
  },

  {
    model: "Airbus 320",
    maxRange: 1900,
    maxCapacity: "183",
    status: "Parked",
    condition: "91%",
    planeImg:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/American_Airlines_A319_N751UW_Photo_2.jpg",
    id: 11,
  },
  {
    model: "Airbus 330",
    maxRange: 1900,
    maxCapacity: "183",
    status: "Parked",
    condition: "91%",
    planeImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg/1920px-Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg",
    id: 12,
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dummyAirport = {
  LROP: {
    icao: "LROP",
    iata: "OTP",
    name: "Henri Coanda International Airport",
    city: "Bucharest",
    state: "Ilfov",
    country: "RO",
    elevation: 314,
    lat: 44.5722007751,
    lon: 26.1021995544,
    tz: "Europe/Bucharest",
  },
  LRIA: {
    icao: "LRIA",
    iata: "IAS",
    name: "Iasi Airport",
    city: "Iasi",
    state: "Ia\u015fi",
    country: "RO",
    elevation: 397,
    lat: 47.1785011292,
    lon: 27.6205997467,
    tz: "Europe/Bucharest",
  },
  "00CA": {
    icao: "00CA",
    iata: "",
    name: "Goldstone /Gts/ Airport",
    city: "Barstow",
    state: "California",
    country: "US",
    elevation: 3038,
    lat: 35.3504981995,
    lon: -116.888000488,
    tz: "America/Los_Angeles",
  },
  "00CO": {
    icao: "00CO",
    iata: "",
    name: "Cass Field",
    city: "Briggsdale",
    state: "Colorado",
    country: "US",
    elevation: 4830,
    lat: 40.6222000122,
    lon: -104.34400177,
    tz: "America/Denver",
  },
};

export const routes = [
  [dummyAirport["LROP"], dummyAirport["LRIA"]],
  [dummyAirport["00CA"], dummyAirport["00CO"]],
];
