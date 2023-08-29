import { Router } from 'express';

// Si queremos cambiar de persistencia - solo descomentar/comentar
//import del service para Students. (Se puede probar con el service del file system o el de mongoose)
import StudentService from '../services/db/students.service.js';
import {studentModel}  from '../services/db/models/students.js';
const router = Router();
const studentService = new StudentService();

router.get('/', async (req, res) => {
    try {
        let students = await studentService.getAll();
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los estudiantes." });
    }

})

router.post('/', async (req, res) => {
    //TODO: Resolver esta ruta POST para poder guardar en la persistencia los estudiantes.
    const {name,lastName,age} = req.body;
    let student = new studentModel(name,lastName,age)
    console.log(student)
    try {
        await studentService.save(student)
        res.status(201).send({status: "Succes", message:"Usuario agregado"})
    } catch (error) {
        console.error(error)
        res.status(400).send({status: "Error", message:error})
    }
})

export default router;