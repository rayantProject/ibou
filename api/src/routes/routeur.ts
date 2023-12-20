import express, { Router } from 'express';
import profilRoute from './profilRoute';
import domaineRoute from './domaineRoute';

const router: Router = express.Router();

router.use('/profil', profilRoute);
router.use('/domaine', domaineRoute);

export default router;
