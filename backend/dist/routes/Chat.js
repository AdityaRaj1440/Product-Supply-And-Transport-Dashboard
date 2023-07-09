import express from 'express';
import ChatController from '../controllers/ChatController.js';
const router = express.Router();
router.get('/get-all-chats', ChatController.getAllChats);
router.post('/add-chat', ChatController.addChat);
export default router;
//# sourceMappingURL=Chat.js.map