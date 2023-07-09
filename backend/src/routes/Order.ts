import express from 'express'
import OrderController from '../controllers/OrderController.js';

const router= express.Router()

router.get('/get-last-order-id', OrderController.getLastOrderId)
router.get('/get-all-orders', OrderController.getAllOrders)
router.post('/add-order', OrderController.addOrder)
router.patch('/update-order-price', OrderController.updateOrderPrice)

export default router;
