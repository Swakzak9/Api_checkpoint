import {Router} from 'express';
import { createStudent } from '../controllers/studentController.js';


const route = Router()
route.post('/student', createStudent)
export default route