import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"

import ChatRoom from "./ChatRoom";

const TransporterDashboard= () => {
    const data= useLocation().state;
    const [orderList, setOrderList]= useState([])
    const [enabled, setEnabled]= useState(false)
    const [selectedOption, setSelectedOption]= useState(-1)
    const [price, setPrice]= useState(0.0)


    useEffect(()=> {
        const config= {headers: {'type': 't_id', 'id': data['t_id']}}
        axios.get('http://localhost:3005/orders/get-all-orders', config).then(response=> {
            if(response.data.length>0)
                setOrderList(response.data)
        })
    },[])

    const updateOrder= (e) => {
        e.preventDefault();
        const patchBody= {
            "id": orderList[selectedOption]['id'],
            "price": price
        }
        axios.patch('http://localhost:3005/orders/update-order-price', patchBody).then(response=> {
            console.log("Order Updated")
            window.location.reload()
        })
    }

    console.log("orders found",orderList)
    return (
        <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <label class="navbar-brand">{data.name}</label>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link"  href="/">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <form id='transportOrders'>
        
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Order Id</label>
                <div class="col-sm-10">
                <select class="form-select" aria-label="Default select example" onChange= {(e)=> setSelectedOption(e.target.value)}>
                    <option >Choose a Transporter</option>
                    {orderList.map((order, index)=> (
                        <option  value={index}>{order['o_id']}</option>
                    ))}
                </select>    
            </div>
            {selectedOption===-1?<></>:<ChatRoom o_id= {"OID"+orderList[selectedOption]['id']} m_id={orderList[selectedOption]['m_id']} t_id={orderList[selectedOption]['t_id']} sender_category={"transporter"}/>}
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" disabled={enabled} onChange={(e)=> setPrice(e.target.value)}/>
                <button onClick={updateOrder} class="btn btn-primary" id="priceUpdate">Update Price</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default TransporterDashboard