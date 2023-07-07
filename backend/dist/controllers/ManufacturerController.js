import manufacturer from "../models/manufacturer.js";
export default {
    get: async (req, res) => {
        const data = await manufacturer.getManufacturers();
        console.log('controller data:: ', data);
        res.json(data);
    },
    post: (req, res) => {
        res.send('Hello there');
    },
    patch: (req, res) => {
        res.send('Hello there');
    },
    delete: (req, res) => {
    }
};
//# sourceMappingURL=ManufacturerController.js.map