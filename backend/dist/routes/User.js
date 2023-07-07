import express from 'express';
import UserController from '../controllers/UserController.js';
const router = express.Router();
router.get('/', UserController.get);
export default router;
//# sourceMappingURL=User.js.map