import {coursesModel}  from "./models/courses.js";

export default class CourseService {
    constructor() {
        console.log("Working courses with Database persistence in mongodb");
    }

    getAll = async () => {
        let courses = await coursesModel.find();
        return courses.map(course => course.toObject());
    }
    save = async (course) => {
        try {
            await coursesModel.create(course)   
        } catch (error) {
            console.error(error)
        }
    }
}
