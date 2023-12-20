import User from '../models/userModel';
import { Request, Response } from 'express';

// Contrôleur pour la création d'un utilisateur
export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        // Création d'une nouvelle instance d'utilisateur
        const newUser = new User({
            username,
            email,
            password,
        });

        // Enregistrement de l'utilisateur dans la base de données
        const savedUser = await newUser.save();

        res.status(201).json(savedUser); // Réponse avec l'utilisateur créé
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur." });
    }
};

// Contrôleur pour la récupération de tous les utilisateurs
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs.' });
    }
};
