import database from '../config/database.js'
import { promisify } from 'util';

const promisedConn= promisify(database.query).bind(database);

export default {

    getTransporterNames: async ()=> {
        let query= `select t_id, name from transporter;`
        return await promisedConn(query)
    },

    authenticateTransporters: async (username: string, password: string) => {
        let query= `select t_id, name, username from transporter where username= "${username}" and password= SHA1("${password}");`
        console.log(query);
        return await promisedConn(query)
    },

    addNewTransporter: async (details: any) => {
        let query= `insert into transporter (name, username, password) values ("${details.name}", "${details.username}", SHA1("${details.password}"))`
        console.log(query)
        return await promisedConn(query)
    }
}