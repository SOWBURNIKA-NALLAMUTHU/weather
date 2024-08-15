// // src/App.js
// import React from "react";
// import WeatherReport from "./Components/WeatherReport";

// function App() {
//   return (
//     <div className="App">
//       <h1>Dam Weather Report</h1>
//       <WeatherReport />
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';

import { Box } from "@chakra-ui/react";
import { Loading } from "./Components/Loading";
import { Weather } from "./Components/weather";

function App() {
  return (
    <Box fontFamily="poppins">
      <Weather />
    </Box>
  );
}

export default App;
