import manufacturer from "../models/manufacturer.js";
import order from "../models/order.js";

export default {

    get : async (req: any, res: any) => {
        const data= await manufacturer.authenticateManufacturers(req.headers['username'], req.headers['password']);
        console.log('controller data:: ',data)
        res.json(data);
    },

    post : async (req: any, res: any) => {
        console.log(await manufacturer.addNewManufacturer(req.body));
        res.send('Hello there')
    },

    patch : (req: any, res: any) => {
        res.send('Hello there')
    },

    delete : (req: any, res: any) => {
        
    },

    getUsernames: async (req: any, res: any) => {
        res.send(await manufacturer.getManufacturerNames());
    },
    
    getCount: async (req: any, res: any) => {
        const countList= await manufacturer.findCount();
        res.send([countList[0][0]['count(*)'],countList[1][0]['count(*)']])
    }
};