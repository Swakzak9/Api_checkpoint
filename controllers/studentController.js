import Student from '../Models/studentModels.js';

export const createStudent = async(req,res)=> {
    const {first_name,last_name,exam_number} =req.body;
    try{
        const student =await Student.createStudent(first_name, last_name,exam_number);
      res.status(201).json(student);
    } 
    catch(error){
        res.status(400).json({error:error.message})
    }
}
export const getStudents = async (req,res) => {
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
