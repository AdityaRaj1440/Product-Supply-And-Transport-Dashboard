import database from '../config/database.js';
import { promisify } from 'util';
const promisedConn = promisify(database.query).bind(database);
export default {
    getChats: async (o_id) => {
        let query = `Select * from chats where o_id= ${o_id};`;
        return await promisedConn(query);
    },
    addChat: async (body) => {
        let query = `insert into chats (message, o_id, sender_category) values ("${body.message}",${body.o_id}, "${body.sender_category}");`;
        return await promisedConn(query);
    },
    getAllChats: async (category, id) => {
        let idCat = "";
        let senderCategory = "";
        if (category === 'manufacturer') {
            idCat = "m_id";
            senderCategory = "transporter";
        }
        else {
            idCat = "t_id";
            senderCategory = "manufacturer";
        }
        let query = `Select O.o_id, to_address, from_address, message from chats C , orders O  where C.o_id=O.id and O.${idCat}= ${id} and sender_category="${senderCategory}";`;
        return await promisedConn(query);
    },
    filterChats: async (category, id, column, value) => {
        let idCat = "";
        let senderCategory = "";
        if (category === 'manufacturer') {
            idCat = "m_id";
            senderCategory = "transporter";
        }
        else {
            idCat = "t_id";
            senderCategory = "manufacturer";
        }
        let newColumn = column;
        if (column === "o_id") {
            newColumn = "O.o_id";
        }
        let query = `Select O.o_id, to_address, from_address, message from chats C , orders O  where C.o_id=O.id and O.${idCat}= ${id} and sender_category="${senderCategory}" and ${newColumn}="${value}";`;
        return await promisedConn(query);
    }
};
//# sourceMappingURL=chat.js.map