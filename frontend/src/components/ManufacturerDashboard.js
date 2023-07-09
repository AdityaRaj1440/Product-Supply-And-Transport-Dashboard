import { useLocation } from "react-router-dom"
import OrderForm from "./OrderForm";

const ManufacturerDashboard= () => {
    const data= useLocation().state;
    console.log("data found",data)
    return (
        <>
            <OrderForm state= {data}/>
        </>
    )
}

export default ManufacturerDashboard