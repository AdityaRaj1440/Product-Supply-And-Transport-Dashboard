import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"

import ChatRoom from "./ChatRoom";
import MessageList from "./MessageList";

const TransporterDashboard= () => {
    const data= useLocation().state;
    const [orderList, setOrderList]= useState([])
    const [enabled, setEnabled]= useState(false)
    const [selectedOption, setSelectedOption]= useState(-1)
    const [price, setPrice]= useState(0.0)

    const [showChats, setShowChats]= useState(0)
    const [filterChoice, setFilterChoice]= useState("")
    const [filterParameter, setFilterParameter]= useState("")
    const [filterDetail, setFilterDetail]= useState(['None'])


    useEffect(()=> {
        const config= {headers: {'type': 't_id', 'id': data['t_id']}}
        axios.get('http://localhost:3005/orders/get-all-orders', config).then(response=> {
            if(response.data.length>0)
                setOrderList(response.data)
        })
    },[])

    const updateOrder= (e) => {
        e.preventDefault();
        if(selectedOption===-1){
          alert("Please select an order!!")
          setPrice(0)
        }
        else {
          const patchBody= {
            "id": orderList[selectedOption]['id'],
            "price": price
        }
        axios.patch('http://localhost:3005/orders/update-order-price', patchBody).then(response=> {
            console.log("Order Updated")
            alert('Price updated succesfully!')
            const orderMessage= "HI. Estimated Price for the Given order will be "+ price+"."
        const chatBody= {
            "message": orderMessage,
            "o_id": orderList[selectedOption]['id'],
            "sender_category": "transporter"
        }
            axios.post('http://localhost:3005/chats/add-chat', chatBody).then(resp=> {
              window.location.reload()
            })
        })
        }
    }

    const handleFilteredSearch= () => {
      const detail= [filterChoice, filterParameter]
      setFilterDetail(detail)
  }

    console.log("orders found",orderList)
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
          <button class="nav-link" href="#" onClick={(e)=> setShowChats(1)}>Chats</button>
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
      <input class="form-control me-2" type="search" placeholder= {filterChoice===""?"Search...":filterChoice} aria-label="Search" onChange={e=> setFilterParameter(e.target.value)}/>
        <button class="btn btn-outline-success" onClick={handleFilteredSearch}>Search</button>
        <button class="btn btn-outline-success" onClick={e=> setFilterDetail(['None'])}>Clear filter</button>
    </div>
  </div>
</nav>
 {showChats===0?<MessageList category="transporter" id={data.t_id} filterDetail= {filterDetail}/>:
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
                <input type="text" class="form-control" id="inputEmail3" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                <button onClick={updateOrder} class="btn btn-primary" id="priceUpdate">Update Price</button>
                </div>
            </div>
        </form>}
        </>
    )
}

export default TransporterDashboard