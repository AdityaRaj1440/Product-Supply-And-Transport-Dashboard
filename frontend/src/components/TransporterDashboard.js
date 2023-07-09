import { useState, useEffect } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom"

const TransporterDashboard= () => {
    const data= useLocation().state;
    const [orderList, setOrderList]= useState([])
    const [enabled, setEnabled]= useState(false)
    const [selectedOption, setSelectedOption]= useState(-1)
    const [price, setPrice]= useState(0.0)

    useEffect(()=> {
        const config= {headers: { 't_id': data['t_id']}}
        axios.get('http://localhost:3005/orders/get-all-orders', config).then(response=> {
            if(response.data.length>0)
                setOrderList(response.data)
        })
    },[])

    const updateOrder= (e) => {
        e.preventDefault();
        const patchBody= {
            "id": selectedOption,
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
        <form onSubmit={updateOrder}>
        
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Order Id</label>
                <div class="col-sm-10">
                <select class="form-select" aria-label="Default select example" onChange= {(e)=> setSelectedOption(e.target.value)}>
                    <option >Choose a Transporter</option>
                    {orderList.map((order, index)=> (
                        <option  value={order['id']}>{order['o_id']}</option>
                    ))}
                </select>    
            </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" disabled={enabled} onChange={(e)=> setPrice(e.target.value)}/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Update Price</button>
        </form>
        </>
    )
}

export default TransporterDashboard