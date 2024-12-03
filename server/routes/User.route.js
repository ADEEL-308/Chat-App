import express from 'express';
import { getUserProfile, login, logout, signup } from '../controller/User.controller.js';
import SecureRoute from '../middleware/SecureRoute.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout)
router.get('/getAllUsers',SecureRoute,getUserProfile)

export default router;