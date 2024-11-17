import React, { useEffect, useState } from "react";
import { db } from "./firestore";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

const ShowData = () => {
  const [emp, updateEmp] = useState({ id: '', first: '', last: '', email: '', number: '', query: '' });
  const [users, setUsers] = useState([]);

  // Fetch data from Firebase
  const getUsers = async () => {
    const data = await getDocs(collection(db, "emps"));
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    updateEmp({ ...emp, [e.target.name]: e.target.value });
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const empCollection = collection(db, "emps");

    if (emp.id === '') {
      const createUser = async () => {
        await addDoc(empCollection, emp);
        alert('Employee added successfully');
        getUsers();
      };
      createUser();
    } else {
      const updateUser = async () => {
        const userDoc = doc(db, "emps", emp.id);
        await updateDoc(userDoc, emp);
        alert('Employee updated successfully');
        getUsers();
      };
      updateUser();
    }
    updateEmp({ id: '', first: '', last: '', email: '', number: '', query: '' });
  };

  // Handle delete action
  const handleDelete = async (id) => {
    const userDoc = doc(db, "emps", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary mb-4">User's Detail Management</h2>

      {/* Employee Table */}
      <div className="table-responsive mb-4">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Query</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.first}</td>
                <td>{user.last}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.query}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => updateEmp(user)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Employee Form */}
      <div className="form-section p-4 rounded shadow-sm">
        <h3 className="text-primary mb-3">{emp.id ? "Update User" : "Add New User"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                name="first"
                className="form-control"
                placeholder="First Name"
                value={emp.first}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="last"
                className="form-control"
                placeholder="Last Name"
                value={emp.last}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email (e.g., example@gmail.com)"
              value={emp.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Your Contact Number (e.g., +91-555-555-5555)"
              value={emp.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="query"
              className="form-control"
              placeholder="Tell us how we can assist you with your financial journey"
              value={emp.query}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            {emp.id ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShowData;
