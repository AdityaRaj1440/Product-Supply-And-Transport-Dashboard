import database from '../config/database.js';
import { promisify } from 'util';
const promisedConn = promisify(database.query).bind(database);
export default {
    getManufacturerNames: async () => {
        let query = `select username from manufacturer;`;
        return await promisedConn(query);
    },
    authenticateManufacturers: async (username, password) => {
        let query = `select m_id, name, username, address from manufacturer where username= ${username} and password= SHA1(${password});`;
        console.log(query);
        return await promisedConn(query);
    },
    addNewManufacturer: async (details) => {
        let query = `insert into manufacturer (name, address, username, password) values ("${details.name}", "${details.address}", "${details.username}", SHA1("${details.password}"))`;
        console.log(query);
        return await promisedConn(query);
    }
};
//# sourceMappingURL=manufacturer.js.map