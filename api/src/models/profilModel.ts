import { Schema, model } from 'mongoose';

const profilSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    competences: {
        type: [String],
        required: true,
    },
    experiences: {
        type: [
            {
                nomEtablissement: String,
                posteOccupe: String,
                periodedEmploi: {
                    type: Date,
                },
            },
        ],
        required: true,
    },
    education: {
        type: [
            {
                nom: String,
                diplome: String,
                domainedEtude: String,
                annee: {
                    type: Date,
                },
            },
        ],
        required: true,
    },

    avatar: {
        type: String,
    },

    domaine: { type: Schema.Types.ObjectId, ref: 'Domaine', required: true },
});

export default model('profil', profilSchema);
