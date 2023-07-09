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
    },

    getAllChatMessages: async (req: any, res: any) => {
        const result= await chat.getAllChats(req.headers['category'], req.headers['id'])
        console.log(result)
        res.json(result)
    },

    getFilteredChatMessages: async (req: any, res: any)=> {
        const result= await chat.filterChats(req.headers['category'], req.headers['id'], req.headers['column'], req.headers['value'])
        res.json(result)
    }
}