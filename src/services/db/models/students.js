//TODO: Completar Modelo con Mongoose:
import mongoose from "mongoose";
const collectionName = 'student';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};



const studenSchema = new mongoose.Schema({
    name: stringTypeSchemaNonUniqueRequired,
    lastName: stringTypeSchemaNonUniqueRequired,
    age: {
        type: Number,
        required:true
    },
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default:[]
    }
});


// exportar
export const studentModel = mongoose.model(collectionName,studenSchema)