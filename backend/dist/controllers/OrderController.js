import order from "../models/order.js";
export default {
    getLastOrderId: async (req, res) => {
        const lastId = await order.getLastOrderId();
        if (lastId.length > 0)
            res.json(lastId[0]);
        else
            res.json({ "max(id)": 0 });
    },
    addOrder: async (req, res) => {
        const data = req.body;
        console.log(await order.addOrder(data));
        res.json({ "res": "testing" });
    },
    getAllOrders: async (req, res) => {
        const result = await order.getOrders(req.headers['t_id']);
        console.log(result);
        res.json(result);
    },
    updateOrderPrice: async (req, res) => {
        const body = req.body;
        await order.updatePrice(body['id'], body['price']);
        res.json({ "res": "updating" });
    }
};
//# sourceMappingURL=OrderController.js.map