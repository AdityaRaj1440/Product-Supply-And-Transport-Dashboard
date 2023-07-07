import express from 'express';
import TransporterController from '../controllers/TransporterController.js';
const router = express.Router();
router.get('/get_manufacturer', TransporterController.get);
router.post('/add_manufacturer', TransporterController.post);
router.patch('/update_manufacturer', TransporterController.patch);
router.delete('/delete_manufacturer', TransporterController.delete);
export default router;
//# sourceMappingURL=Transporter.js.map