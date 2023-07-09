import express from 'express'
import ChatController from '../controllers/ChatController.js';

const router= express.Router()

router.get('/get-all-chats', ChatController.getAllChats)
router.post('/add-chat', ChatController.addChat)
router.get('/get-all-chat-messages', ChatController.getAllChatMessages)
router.get('/get-filtered-chat-messages', ChatController.getFilteredChatMessages)
export default router;