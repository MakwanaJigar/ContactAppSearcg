import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  
const [username,usernameupdate]=useState('');
const [password,passwordupdate]=useState('');

// use navigate  for redirect the page
   
const usenavigate =useNavigate();

useEffect(() => {
  sessionStorage.clear();
},[]);


const ProceedLogin=(e) => {
  e.preventDefault();

  if(validate()){
    // console.log('Login Successfully');
    fetch(" http://localhost:5000/user/"+username).then((res) => {
      return res.json();
    }).then((resp) => {
      console.log(resp)
      if(Object.keys(resp).length === 0){
        alert("Please Enter Valid User Name"); 
      }else{
        if(resp.password === password){
              alert('Login Successfully');
              sessionStorage.setItem('username',username);
              usenavigate('/Mycontact');
        }else{
          alert("Password is incorrect");
        }
      }

    }).catch((error) => {
       alert('Login Failed'+error.message); 
    });
  }
}

const validate=() => {
  let result=true;

  if(username ==='' || username === null){
    return false;
    // alert('Please Enter User Name');
  }

  
  if(password ==='' || password === null){
    return false;
    // alert('Please Enter Password');
  }
  return result;
}

  return (
   <div className="row mt-5" >
    <div className="offset-lg-3 col-lg-6">
      <form onSubmit={ProceedLogin}>
        <div className="card">
          <div className="card-header">
                <h2 className="fw-bold text-success">Login</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
                  <label className="fw-bold">USER NAME</label>
                  <input className="form-control" value={username} onChange={e =>usernameupdate(e.target.value)} type="text" placeholder="User Name" name="username" required/>
            </div>

            <div className="form-group">
                  <label className="fw-bold">PASSWORD</label>
                  <input className="form-control" value={password} onChange={e =>passwordupdate(e.target.value)} type="password" placeholder="Password" name="password" required/>
            </div>

          </div>


          <div className="card-footer">
                    <button className="btn btn-primary m-3 fw-bold">Login</button>
                    <Link className="btn btn-dark" to='/createuser'>Create User</Link>
          </div>
        </div>

      </form>
    </div>
   </div>
  );
};

export default Login;
