import order from "../models/order.js";

export default {
    getLastOrderId: async (req: any, res: any) => {
        const lastId= await order.getLastOrderId();
        if(lastId.length>0)
            res.json(lastId[0])
        else
            res.json({"max(id)": 0})
    },

    addOrder: async (req: any, res: any) => {
        const data= req.body;
        console.log(await order.addOrder(data))
        res.json({"res": "testing"})
    },

    getAllOrders: async (req: any, res: any) => {
        const result= await order.getOrders(req.headers['t_id'])
        console.log(result)
        res.json(result)
    },

    updateOrderPrice: async (req: any, res: any)=> {
        const body= req.body
        await order.updatePrice(body['id'], body['price'])
        res.json({"res": "updating"})
    }
}