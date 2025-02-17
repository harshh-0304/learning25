// import axios from "axios";
// import React, { useState } from "react";

// export const ApiDemo1 = () => {
//   const [message, setMessage] = useState("");
//   const [users, setUsers] = useState([]);

//   const getUserData = async () => {
//     try {
//       const res = await axios.get("https://node5.onrender.com/user/user");
//       console.log(res.data);
//       setMessage(res.data.message);
//       setUsers(res.data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", margin: "20px" }}>
//       <h1>API DEMO 1</h1>
//       <button onClick={getUserData} style={{ marginBottom: "10px" }}>
//         GET
//       </button>
//       <p>{message}</p>
      
//       {users.length > 0 ? (
//         <table border="1" style={{ margin: "0 auto", width: "50%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ backgroundColor: "#f2f2f2" }}>
//               <th style={{ padding: "10px" }}>Name</th>
//               <th style={{ padding: "10px" }}>Age</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.name}</td>
//                 <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.age}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// };
import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export const ApiDemo1 = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    try {
      const res = await axios.get("https://node5.onrender.com/user/user");
      console.log(res.data);
      setMessage(res.data.message);
      setUsers(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container text-center mt-4">
      <h1>API DEMO 1</h1>
      <button className="btn btn-primary mb-3" onClick={getUserData}>
        GET DATA
      </button>
      <p>{message}</p>

      {users.length > 0 ? (
        <>
          {/* Dark Themed Table */}
          <table className="table table-dark table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>

        
        </>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

