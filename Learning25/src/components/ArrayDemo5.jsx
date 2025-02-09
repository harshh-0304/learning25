import React from "react";

const ArrayDemo5 = () => {
  const cities = [
    {
      id: 101,
      cityname: "Ahmedabad",
      aqi: 250,
      population: 250000,
    },
    {
      id: 102,
      cityname: "Surat",
      aqi: 300,
      population: 275000,
    },
    {
      id: 103,
      cityname: "Vadodara",
      aqi: 300,
      population: 300000,
    },
    {
      id: 104,
      cityname: "Rajkot",
      aqi: 220,
      population: 180000,
    },
    {
      id: 105,
      cityname: "Gandhinagar",
      aqi: 350,
      population: 150000,
    },
  ];

  return (
    <div style={{textAlign: "center"}}>
      <h1>CITIES</h1>
      <table class="table table-hover table-dark" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>City Name</th>
            <th>AQI</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>
                <span style={{ color: city.population > 200000 ? "red" : "yellow" }}>
                  {city.cityname}
                </span>
              </td>
              <td>
                <span
                  style={{
                    color: city.aqi > 300 ? "red" : city.aqi > 200 ? "green" : "black",
                  }}
                >
                  {city.aqi}
                </span>
              </td>
              <td>{city.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArrayDemo5;
