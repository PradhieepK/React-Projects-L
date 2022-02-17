import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function User() {
  const userData = useSelector((state) => state.users);
  const [users, setUsers] = useState(userData);

  const handleDelete = (id) => {
    setUsers(
      users.characters.results.filter((user) => {
        return user.id !== id;
      })
    );
  };

  return (
    <div>
      <table>
        <table
          border="2"
          bgcolor="white"
          class="table table-bordered table-hover"
        >
          <thead>
            <tr>
              <th>
                <span>
                  <strong>Id</strong>
                </span>
              </th>
              <th>Name</th>
              <th>gender</th>
              
            </tr>
          </thead>
          <tbody>
            {users.characters.results.map((user) => {
              const { id, name, gender } = user;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{gender}</td>
            
                  {/* <td>
                    <h5>update</h5>
                    <buttons
                        className="btn btn-warning btn-1"
                        onClick={() => {
                          setShowEditForm(true);
                          setSelectedID(id);
                        }}
                      >
                        Update
                      </button>
                  </td> */}
                  <td>
                    <button
                      className="btn btn-danger btn-1"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </table>
    </div>
  );
}
