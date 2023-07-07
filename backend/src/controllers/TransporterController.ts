import transporter from "../models/transporter.js";

export default {

    get : async (req: any, res: any) => {
        const data= await transporter.authenticateTransporters(req.headers['username'], req.headers['password']);
        console.log('controller data:: ',data)
        res.json(data);
    },

    post : async (req: any, res: any) => {
        console.log(await transporter.addNewTransporter(req.body));
        res.send('Hello there')
    },

    patch : (req: any, res: any) => {
        res.send('Hello there')
    },

    delete : (req: any, res: any) => {
        
    },

    getUsernames: async (req: any, res: any) => {
        res.send(await transporter.getTransporterNames());
    }
    
};