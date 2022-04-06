import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import loginService from '../service/login-service';

function MyInformation() {

     const [myInformation , setMyInformation]= useState({

  "userId": "",
  "userName": " ",
  "password": " ",
  "mobileNumber": " ",
  "email": "string",
  "customer": {
    "customerId": "",
    "userName": " ",
    "mobileNumber": "",
    "email": " ",
    "aadharCard": " ",
    "address": " ",
    "city": " ",
    "connectionStatus": " "
  }
     });
     const[userId,setId]= useState("");
     

    //  useEffect(()=>
    //  {
    //      loginService.get(userId);
    //  },[]);


     const changeHandler = (event) => {
        setId(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();// prevents page reload
        loginService.get(userId)
        .then((response)=>{setMyInformation(response.data);console.log(response.data)})
        .catch((error)=>{console.log(error)})

    }


  return (
    myInformation.userId !=undefined &&
    <div>MyInformation

            <form onSubmit={submitHandler}>
                Id:
                <input type="text" value={userId} onChange={changeHandler} required></input>
                <input type="submit" value="Submit"></input>
            </form>

          

       <table className='table'>
           <thead>
               <tr>
                   <th>
                       <td>userName</td>
                   </th>
               </tr>
           </thead>

           <tbody>
               <tr>
                   <td>
                       {myInformation.userName}
                   </td>
               </tr>
           </tbody>
       </table>





    </div>
  )
}

export default MyInformation