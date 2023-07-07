import database from '../config/database.js';
import { promisify } from 'util';
const promisedConn = promisify(database.query).bind(database);
export default {
    getOrders: async (t_id) => {
        let query = `Select * from orders where t_id= ${t_id};`;
        return await promisedConn(query);
    },
    addOrder: async (body) => {
        let query = `insert into orders (from_address, to_address, qty, pickup, m_id, t_id) values ("${body.from_address}", "${body.to_address}", ${body.qty}, "${body.pickup}", ${body.m_id}, ${body.t_id});`;
        return await promisedConn(query);
    },
    updatePrice: async (o_id, price) => {
        let query = `update orders set price= ${price} where o_id= "${o_id}";`;
        return await promisedConn(query);
    }
};
//# sourceMappingURL=order.js.map