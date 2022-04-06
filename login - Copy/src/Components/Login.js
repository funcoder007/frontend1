import React from 'react'
import loginService from '../service/login-service';
import {useState} from "react";

function Login() {

  const[myAccount , setMyAccount]=useState(
   
    {
    
      "userName": "",
      "password": "",
      "mobileNumber": "",
      "email": "",
      "customer": {
        "customerId": " "
       }
   }


  );

  const changeHandle = (e)=>{
    setMyAccount((oldAccount)=>({...oldAccount,[e.target.name]: e.target.value}));
};

const submitHandler = (e)=>{
  
  e.preventDefault();
  console.log(myAccount);
  loginService.create(myAccount)
  .then((r)=>{console.log(r.data)})
  .catch((e)=>{console.log(e.response.data)})
 

};



  return (
    <div>
        <form onSubmit={submitHandler}>
        
        User Name:
        <input type="text" name="userName" value={myAccount.userName} onChange={changeHandle} required/><br/><br/>
        
        Password:
        <input type="password" name= "password" value={myAccount.password} onChange={changeHandle} required/><br/><br/>
        
        Mobile Number:
        <input type="number" name= "mobileNumber" value={myAccount.mobileNumber} onChange={changeHandle} required/><br/><br/>
       
        Email:
        <input type="email" name="email" value={myAccount.email}  onChange={changeHandle}required/><br/><br/>
        
         Please Enter Customer Id To Proceed Further :<br/>
        <input type="number" name="customerId" value={myAccount.customerId}  onChange={changeHandle}required/><br/><br/>

        <input type="submit" value="submit" className="btn btn-info"/>

        </form>
    </div>
  )
}

export default Login