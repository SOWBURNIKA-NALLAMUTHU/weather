// // src/components/WeatherReport.js
// import React, { useState } from "react";
// import axios from "axios";
// import "./WeatherReport.css";

// const damsInTamilNadu = [
//   { name: "Mettur Dam", location: "Mettur" },
//   { name: "Bhavani Sagar Dam", location: "Sathyamangalam" },
//   { name: "Vaigai Dam", location: "Theni" },
//   { name: "Papanasam Dam", location: "Tirunelveli" },
//   { name: "Periyar Dam", location: "Thekkady" },
//   { name: "Amaravathi Dam", location: "Udumalpet" },
//   { name: "Sathanur Dam", location: "Tiruvannamalai" },
//   { name: "Aliyar Dam", location: "Pollachi" },
//   { name: "Sholayar Dam", location: "Valparai" },
//   { name: "Parambikulam Dam", location: "Pollachi" },
// ];

// const WeatherReport = () => {
//   const [selectedDam, setSelectedDam] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);
//   const apiKey = "6bec9ab1f67371564106bb83a5b4b8a6"; // Replace with your weather API key

//   const fetchWeather = () => {
//     if (!selectedDam) return;

//     const damLocation = damsInTamilNadu.find(
//       (dam) => dam.name === selectedDam
//     ).location;
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${damLocation}&appid=${apiKey}&units=metric`;

//     axios
//       .get(apiUrl)
//       .then((response) => {
//         setWeather(response.data);
//         setError(null);
//       })
//       .catch((error) => {
//         setWeather(null);
//         setError("Could not fetch weather data for the specified dam.");
//       });
//   };

//   return (
//     <div className="weather-report">
//       <select
//         value={selectedDam}
//         onChange={(e) => setSelectedDam(e.target.value)}
//         className="dam-select"
//       >
//         <option value="" disabled>
//           Select a dam in Tamil Nadu
//         </option>
//         {damsInTamilNadu.map((dam) => (
//           <option key={dam.name} value={dam.name}>
//             {dam.name}
//           </option>
//         ))}
//       </select>
//       <button onClick={fetchWeather} className="fetch-button">
//         Get Weather
//       </button>

//       {error && <p className="error-message">{error}</p>}

//       {weather ? (
//         <div className="weather-card">
//           <h2>Weather Report for {selectedDam}</h2>
//           <p>
//             <strong>Temperature:</strong> {weather.main.temp}°C
//           </p>
//           <p>
//             <strong>Humidity:</strong> {weather.main.humidity}%
//           </p>
//           <p>
//             <strong>Condition:</strong> {weather.weather[0].description}
//           </p>
//           <p>
//             <strong>Wind Speed:</strong> {weather.wind.speed} m/s
//           </p>
//         </div>
//       ) : (
//         !error && <p>Select a dam and click "Get Weather" to see the report.</p>
//       )}
//     </div>
//   );
// };

// export default WeatherReport;
