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
};
//# sourceMappingURL=chat.js.map