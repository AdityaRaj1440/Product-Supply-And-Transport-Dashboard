import manufacturer from "../models/manufacturer.js";
export default {
    get: async (req, res) => {
        const data = await manufacturer.authenticateManufacturers(req.headers['username'], req.headers['password']);
        console.log('controller data:: ', data);
        res.json(data);
    },
    post: async (req, res) => {
        console.log(await manufacturer.addNewManufacturer(req.body));
        res.send('Hello there');
    },
    patch: (req, res) => {
        res.send('Hello there');
    },
    delete: (req, res) => {
    },
    getUsernames: async (req, res) => {
        res.send(await manufacturer.getManufacturerNames());
    },
    getCount: async (req, res) => {
        const countList = await manufacturer.findCount();
        res.send([countList[0][0]['count(*)'], countList[1][0]['count(*)']]);
    }
};
//# sourceMappingURL=ManufacturerController.js.map