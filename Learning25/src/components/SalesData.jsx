import React from "react";

const SalesData = () => {
  const sales = [
    {
      id: 45,
      day: "Monday",
      sales: 5000,
      discount: 10,
      profit: 1500,
    },
    {
      id: 60,
      day: "Tuesday",
      sales: 7000,
      discount: 15,
      profit: 2500,
    },
    {
      id: 30,
      day: "Wednesday",
      sales: 4000,
      discount: 8,
      profit: 1000,
    },
    {
      id: 75,
      day: "Thursday",
      sales: 9000,
      discount: 20,
      profit: 3000,
    },
    {
      id: 55,
      day: "Friday",
      sales: 6500,
      discount: 12,
      profit: 2200,
    },
  ];

  return (
    <div  style={{textAlign: "center"}}>
      <h1>Sales Data</h1>
      <table  class="table table-hover table-dark" border="1">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Day</th>
            <th>Sales</th>
            <th>Discount (%)</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((item) => (
            <tr key={item.id}>
              <td style={{ color: item.id > 50 ? "green" : "yellow" }}>{item.id}</td>
              <td>{item.day}</td>
              <td>{item.sales}</td>
              <td>{item.discount}%</td>
              <td>{item.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesData;
