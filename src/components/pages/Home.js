import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const[users,setUsers]=useState([]);

  useEffect(() =>{
   console.log("hello everyone");
   loadUsers();
  },[]);
   
  const loadUsers = async () =>{
    const result = await Axios.get("http://localhost:3003/users")
    console.log(result);
    setUsers(result.data);
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1> Home</h1>

        <table className="table border shadow ">
  <thead className="table-dark">
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((users,index) => (
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{users.name}</td>
        <td>{users.username}</td>
        <td>{users.email}</td>
        <td>
          <Link className="btn btn-primary mr-2">View</Link>
          <Link className="btn btn-outline-primary mr-2">Edit</Link>
          <Link className="btn btn-danger mr-2">Delete</Link>
        </td>
        </tr>
      ))
    }
  </tbody>
</table>
      </div>
    </div>
  );
};

export default Home;
