import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import OrderForm from "./OrderForm";
import ChatRoom from "./ChatRoom";
import MessageList from "./MessageList";

const ManufacturerDashboard= () => {
    const data= useLocation().state;
    console.log("data found",data)
    console.log(useLocation().state)

    const [showChats, setShowChats]= useState(0)
    const [orderList, setOrderList]= useState([])
    const [selectedOrder, setSelectedOrder]= useState(-1)
    const [filterChoice, setFilterChoice]= useState("")
    const [filterParameter, setFilterParameter]= useState("")
    const [filterDetail, setFilterDetail]= useState(['None'])

    useEffect(()=> {
        const config= {headers: {'type': 'm_id', 'id': data['m_id']}}
        axios.get('http://localhost:3005/orders/get-all-orders', config).then(response=> {
            if(response.data.length>0)
                setOrderList(response.data)
        })
    },[])

    const handleFilteredSearch= () => {
        const detail= [filterChoice, filterParameter]
        setFilterDetail(detail)
    }

    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-brand" onClick={(e)=> setShowChats(0)}>{data.name}</button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <button class="nav-link active" aria-current="page" onClick={(e)=> setShowChats(1)}>New Order</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" href="#" onClick={(e)=> setShowChats(2)}>Chats</button>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="/">Logout</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter Choice
          </a>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" onClick={e=> setFilterChoice('o_id')}>Order ID</button></li>
            <li><button class="dropdown-item" onClick={e=> setFilterChoice('to_address')}>To</button></li>
            <li><button class="dropdown-item" onClick={e=> setFilterChoice('from_address')}>From</button></li>
          </ul>
        </li>
      </ul>
      {/* <form class="d-flex" role="search"> */}
        <input class="form-control me-2" type="search" placeholder= {filterChoice===""?"Search...":filterChoice} aria-label="Search" onChange={e=> setFilterParameter(e.target.value)}/>
        <button class="btn btn-outline-success" onClick={handleFilteredSearch}>Search</button>
        <button class="btn btn-outline-success" onClick={e=> setFilterDetail(['None'])}>Clear filter</button>
      {/* </form> */}
    </div>
  </div>
</nav>
{showChats===2?<div class="row mb-3">
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
            </div>:showChats===1?<OrderForm state= {data}/>:<MessageList category="manufacturer" id={data.m_id} filterDetail= {filterDetail}/>}
        </>
    )
}

export default ManufacturerDashboard