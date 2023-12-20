import express, { Router } from 'express';
import * as userController from '../controllers/userController';

const router: Router = express.Router();

// Route pour la création d'un utilisateur
router.post('/create', userController.createUser);

// Route pour la récupération de tous les utilisateurs
router.get('/all', userController.getAllUsers);

export default router;
