import React, { useState } from 'react'

const AddUsers = () => {

    const[user,setUser]=useState({
        "name":"",
        "username":"",
        "email":"",
        "phone":""
    })

    const onInputChange = (e) =>{
        console.log(e.target.value);
    }
    const {name, username,email,phone} = user;
  return (
    <div className="container">
      <div className="w-80 m-20 shadow p-10">
        <h2 className="text-center m-4">Add A User</h2>
        <form>
          <div className="form-group m-5">
            <input 
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={ e => onInputChange(e)}
              
            />
          </div>
          <div className="form-group m-5">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={ e => onInputChange(e)}
            />
          </div>
          <div className="form-group m-5">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={ e => onInputChange(e)}
            />
          </div>
          <div className="form-group m-5">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={ e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block" >Add User</button>
        </form>
      </div>
    </div>
  );
}

export default AddUsers