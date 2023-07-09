import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import OrderForm from "./OrderForm";
import ChatRoom from "./ChatRoom";

const ManufacturerDashboard= () => {
    const data= useLocation().state;
    console.log("data found",data)
    console.log(useLocation().state)

    const [showChats, setShowChats]= useState(true)
    const [orderList, setOrderList]= useState([])
    const [selectedOrder, setSelectedOrder]= useState(-1)

    useEffect(()=> {
        const config= {headers: {'type': 'm_id', 'id': data['m_id']}}
        axios.get('http://localhost:3005/orders/get-all-orders', config).then(response=> {
            if(response.data.length>0)
                setOrderList(response.data)
        })
    },[])
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
          <button class="nav-link active" aria-current="page" onClick={(e)=> setShowChats(false)}>New Order</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" href="#" onClick={(e)=> setShowChats(true)}>Chats</button>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="/">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{showChats?<div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Order Id</label>
                <div class="col-sm-10">
                <select class="form-select" aria-label="Default select example" onChange= {(e)=> setSelectedOrder(e.target.value)}>
                    <option >Choose an Order</option>
                    {orderList.map((order, index)=> (
                        <option  value={index}>{order['o_id']}</option>
                    ))}
                </select>    
            </div>
            {selectedOrder===-1?<></>:<ChatRoom o_id= {"OID"+orderList[selectedOrder]['id']} m_id={orderList[selectedOrder]['m_id']} t_id={orderList[selectedOrder]['t_id']} sender_category={"manufacturer"}/>}
            </div>:<OrderForm state= {data}/>}
        </>
    )
}

export default ManufacturerDashboard