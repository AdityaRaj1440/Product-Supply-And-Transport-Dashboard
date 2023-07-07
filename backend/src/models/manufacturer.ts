import database from '../config/database.js'
import { promisify } from 'util';

const promisedConn= promisify(database.query).bind(database);

export default {
    getManufacturers: async () => {
        let query= `select * from orders;`
        console.log(query);
        return await promisedConn(query)
    }
}