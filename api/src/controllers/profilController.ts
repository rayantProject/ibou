import Profil from '../models/profilModel';
import { Request, Response } from 'express';

export const createProfil = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, competences, experiences, education, domaine } = req.body;

        // Création d'une nouvelle instance de Profil
        const newProfil = new Profil({
            firstname,
            lastname,
            competences,
            experiences,
            education,
            domaine,
        });

        // Enregistrement du profil dans la base de données
        const savedProfil = await newProfil.save();

        res.status(201).json(savedProfil); // Réponse avec le profil créé
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création du profil.' });
    }
};

export const getProfil = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const profil = Profil.findById(id).exec();
        res.status(200).json(getProfil);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du profil.' });
    }
};
