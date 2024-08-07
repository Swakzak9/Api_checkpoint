import {Router} from 'express'
import {createStudent} from '../Express Node 2/controllers/studentController.js'

const route= Router()
route.get('/' ,(req, res)=>{
    res.send('Welcome to our server')
   })
    
   route.post('/greetings', (req,res)=>{
    const name = req.body.name;
   route.post('/')
    res.json({
       greetings:`Hello ${name}!`
    });
   }
   )

   export default route    