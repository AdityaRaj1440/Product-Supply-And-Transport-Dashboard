import database from '../config/database.js'
import { promisify } from 'util';

const promisedConn= promisify(database.query).bind(database);

export default {

    getOrders: async (t_id: number) => {
        let query= `Select * from orders where t_id= ${t_id};`
        return await promisedConn(query);
    },

    addOrder: async (body: any) => {
        let query= `insert into orders (o_id, from_address, to_address, qty, pickup, m_id, t_id) values ("${body.o_id}","${body.from_address}", "${body.to_address}", ${body.qty}, "${body.pickup}", ${body.m_id}, ${body.t_id});`
        return await promisedConn(query);
    },

    updatePrice: async (id: number, price: number) => {
        let query= `update orders set price= ${price} where id= ${id};`
        console.log(query)
        return await promisedConn(query);
    },

    getLastOrderId: async () => {
        let query= `select max(id) from orders;`
        return await promisedConn(query);
    }
}