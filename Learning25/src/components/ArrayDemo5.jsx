import React from "react";

const ArrayDemo5 = () => {
  const players = [
    { id: 1, name: "Alice", score: 120, gender: "F", isActive: true, age: 30 },
    { id: 2, name: "Bob", score: 95, gender: "M", isActive: false, age: 40 },
    { id: 3, name: "Charlie", score: 150, gender: "M", isActive: true, age: 28 },
    { id: 4, name: "David", score: 80, gender: "M", isActive: false, age: 38 },
    { id: 5, name: "Eve", score: 110, gender: "F", isActive: true, age: 25 }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Players</h1>
      <table className="table table-hover table-dark" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Score</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} style={{ backgroundColor: !player.isActive ? "yellow" : "" }}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td style={{ color: player.score >= 100 ? "green" : "black" }}>{player.score}</td>
              <td>{player.gender}</td>
              <td>{player.age}</td>
              <td>{player.age > 35 ? "Please retire.." : player.isActive ? "Active" : "Retired"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArrayDemo5;
