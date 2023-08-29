//TODO: Completar Modelo con Mongoose:
import mongoose from "mongoose";
const collectionName = 'courses';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};



const courseSchema = new mongoose.Schema({
    titulo: stringTypeSchemaNonUniqueRequired,
    description: stringTypeSchemaNonUniqueRequired,
    teacherName: stringTypeSchemaNonUniqueRequired,
    students: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default:[],
        required: true
    }
});


// exportar
export const coursesModel = mongoose.model(collectionName,courseSchema)