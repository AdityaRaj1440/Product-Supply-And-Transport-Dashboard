import transporter from "../models/transporter.js";
export default {
    get: async (req, res) => {
        const data = await transporter.authenticateTransporters(req.headers['username'], req.headers['password']);
        console.log('controller data:: ', data);
        res.json(data);
    },
    post: async (req, res) => {
        console.log(await transporter.addNewTransporter(req.body));
        res.send('Hello there');
    },
    patch: (req, res) => {
        res.send('Hello there');
    },
    delete: (req, res) => {
    },
    getUsernames: async (req, res) => {
        res.send(await transporter.getTransporterNames());
    }
};
//# sourceMappingURL=TransporterController.js.map