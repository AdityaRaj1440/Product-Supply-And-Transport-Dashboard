import chat from "../models/chat.js";
export default {
    addChat: async (req, res) => {
        const data = req.body;
        console.log("yo:", await chat.addChat(data));
        res.json({ "res": "testing" });
    },
    getAllChats: async (req, res) => {
        const result = await chat.getChats(req.headers['id']);
        console.log(result);
        res.json(result);
    },
    getAllChatMessages: async (req, res) => {
        const result = await chat.getAllChats(req.headers['category'], req.headers['id']);
        console.log(result);
        res.json(result);
    },
    getFilteredChatMessages: async (req, res) => {
        const result = await chat.filterChats(req.headers['category'], req.headers['id'], req.headers['column'], req.headers['value']);
        res.json(result);
    }
};
//# sourceMappingURL=ChatController.js.map