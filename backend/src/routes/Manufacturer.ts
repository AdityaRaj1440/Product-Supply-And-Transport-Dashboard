import express from 'express'
import ManufacturerController from '../controllers/ManufacturerController.js';

const router= express.Router()

router.get('/', ManufacturerController.getCount)
router.get('/get-manufacturer', ManufacturerController.get)
router.post('/add-manufacturer', ManufacturerController.post)
router.patch('/update-manufacturer', ManufacturerController.patch)
router.delete('/delete-manufacturer', ManufacturerController.delete)

router.get('/get-manufacturer-usernames', ManufacturerController.getUsernames)

export default router;