import mongoose from 'mongoose';

const Schema= mongoose.Schema;

const studentSchema = new Schema({
    first_name: {
        type: String,
        required :true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    department:{
        type:Number,
        required: true
    },
    exam_number: {
        type: String,
        unique: true,
        required: true
    }
})




    studentSchema.static.createStudent = async function(first_name,last_name,age,exam_number){
   try{
if(!first_name || !last_name  ||!age ||!exam_number){
     throw new Error("All fields are required")};
    
    const exist= await this.findOne({exam_number});
     throw new Error("Student with this exam number aready exists")

     const student = new this({first_name,last_name,exam_number,age});
     return student.save();
   }catch(error){
    throw new Error(error.message);
   }
}

  const Student = mongoose.model('student' , studentSchema )

    export default Student