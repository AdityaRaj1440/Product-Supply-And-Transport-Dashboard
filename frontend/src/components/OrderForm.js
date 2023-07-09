import { useState, useEffect } from "react"
import axios from "axios"

const OrderForm= ({state}) => {
    
    const [newOrderId, setNewOrderId]= useState(0);
    const [from, setFrom]= useState("");
    const [to, setTo]= useState("");
    const [quantity, setQuantity]= useState(0);
    const [selectedOption, setSelectedOption]= useState(-1);
    const [list, setList]= useState([]);
    useEffect(()=> {
        axios.get('http://localhost:3005/orders/get-last-order-id').then(response=> {
            if(response.data)
            setNewOrderId(response.data['max(id)']+1)
        })
    }, [])
    if(list.length===0)
    axios.get('http://localhost:3005/transporter/get-transporter-names').then(response=> {
        setList(response.data)
    })
    // console.log("data::",newOrderId, state, list)
    // console.log("t-id::",selectedOption)

    const createOrder = (e) => {
        e.preventDefault()
        const orderDetails= {
            "o_id": "OID"+newOrderId,
            "from_address": from,
            "to_address": to,
            "qty": quantity,
            "pickup": state['address'],
            "m_id": state['m_id'],
            "t_id": selectedOption
        }
        const orderMessage= "Hello. This is "+state.name+". I would like to request your services for the following order:-\nOrder ID: "+orderDetails.o_id+"\n Pickup Address: "+orderDetails.pickup+"\nFrom: "+orderDetails.from_address+"\nTo: "+orderDetails.to_address+"\n Quantity: "+orderDetails.qty;
        const chatBody= {
            "message": orderMessage,
            "o_id": newOrderId,
            "sender_category": "manufacturer"
        }
        console.log(orderDetails)
        axios.post('http://localhost:3005/orders/add-order', orderDetails).then(response=> {
            console.log("Order Added")
            axios.post('http://localhost:3005/chats/add-chat', chatBody).then(resp=> {
            })
            window.location.reload()
        })
    }
    
    return (
        <form onSubmit={createOrder}>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Order ID</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" value={"OID"+newOrderId} disabled="true"/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">From</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" onChange={(e)=> setFrom(e.target.value)}/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">To</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" onChange={(e)=> setTo(e.target.value)}/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Quantity</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" onChange={(e)=> setQuantity(e.target.value)}/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Pickup</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" value={state.address} disabled="true"/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Transporter</label>
                <div class="col-sm-10">
                <select class="form-select" aria-label="Default select example" onChange= {(e)=> setSelectedOption(e.target.value)}>
                    <option >Choose a Transporter</option>
                    {list.map((li, index)=> (
                        <option  value={li['t_id']}>{li['name']}</option>
                    ))}
                </select>    
            </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
    )
}

export default OrderForm