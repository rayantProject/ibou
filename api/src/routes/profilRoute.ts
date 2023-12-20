import express, { Router, Request, Response } from 'express';
import * as profilController from '../controllers/profilController';

const router: Router = express.Router();

// Route pour la création d'un profil
router.get('/', (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello World Ibou' });
});

router.post('/create', profilController.createProfil);
router.get('/:id', profilController.getProfil);

export default router;
