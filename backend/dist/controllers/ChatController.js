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
    }
};
//# sourceMappingURL=ChatController.js.map