import axios from "axios";
import { useState, useEffect } from "react";

import UserForm from "./UserForm";

const UserCategory= () => {

  const [counts, setCounts]= useState([0,0])

  useEffect(()=> {
    axios.get('http://localhost:3005/').then(response=> {
      console.log(response.data)
      setCounts(response.data)
  })
  }, [])
  
  console.log('countManufacturer', counts)
    const [category, setCategory]= useState("");
    return (
      <>
        <center>
          <h1>PRODUCT SUPPLY</h1>
          <h2>Dashboard</h2>
      </center>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">MANUFACTURER</h5>
            <p class="card-text">Develop products and supplies it to the market.</p>
            <p class="card-text"><small class="text-body-secondary">Number of Manufacturers= {counts[0]}</small></p>
          </div>
          <button onClick={(e)=> setCategory('manufacturer')}>Click to join as a Manufacturer</button>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">TRANSPORTER</h5>
            <p class="card-text">Transport and distribute products between manufacturers and customers.</p>
            <p class="card-text"><small class="text-body-secondary">Number of Transporters= {counts[1]}</small></p>
          </div>
          <button onClick= {(e)=> setCategory('transporter')}>Click to join as a Manufacturer</button>
        </div>
      </div>
      {category!==""?<UserForm category={category}/>:<></>}
    </>
  )
}

export default UserCategory