import manufacturer from "../models/manufacturer.js";

export default {

    get : async (req: any, res: any) => {
        const data= await manufacturer.getManufacturers();
        console.log('controller data:: ',data)
        res.json(data);
    },

    post : (req: any, res: any) => {
        res.send('Hello there')
    },

    patch : (req: any, res: any) => {
        res.send('Hello there')
    },

    delete : (req: any, res: any) => {
        
    }
    
};