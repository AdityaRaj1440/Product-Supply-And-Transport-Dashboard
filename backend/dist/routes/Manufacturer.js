import express from 'express';
import ManufacturerController from '../controllers/ManufacturerController.js';
const router = express.Router();
router.get('/get_manufacturer', ManufacturerController.get);
router.post('/add_manufacturer', ManufacturerController.post);
router.patch('/update_manufacturer', ManufacturerController.patch);
router.delete('/delete_manufacturer', ManufacturerController.delete);
export default router;
//# sourceMappingURL=Manufacturer.js.map