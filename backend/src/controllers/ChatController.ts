import chat from "../models/chat.js";

export default {

    addChat: async (req: any, res: any) => {
        const data= req.body;
        console.log("yo:",await chat.addChat(data))
        res.json({"res": "testing"})
    },

    getAllChats: async (req: any, res: any) => {
        const result= await chat.getChats(req.headers['id'])
        console.log(result)
        res.json(result)
    }
}