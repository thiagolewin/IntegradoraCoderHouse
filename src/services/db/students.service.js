import {studentModel}  from "./models/students.js";

export default class StudentService {
    constructor() {
        console.log("Working courses with Database persistence in mongodb");
    }

    getAll = async () => {
        let students = await studentModel.find();
        return students.map(student => student.toObject());
    }
    save = async (student) => {
        try {
            await studentModel.create(student)   
        } catch (error) {
            console.error(error)
        }
    }
}
