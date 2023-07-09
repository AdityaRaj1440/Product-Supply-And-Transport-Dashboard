import express from 'express'
import TransporterController from '../controllers/TransporterController.js';

const router= express.Router()

router.get('/get-transporter', TransporterController.get)
router.get('/get-transporter-names', TransporterController.getUsernames)
router.post('/add-transporter', TransporterController.post)
router.patch('/update-transporter', TransporterController.patch)
router.delete('/delete-transporter', TransporterController.delete)

export default router;