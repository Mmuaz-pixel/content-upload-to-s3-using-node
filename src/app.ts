const express = require('express'); 
const fileUpload = require('express-fileupload'); 
import route from './routes/route'; 
import { connectDb } from './utils/functions';

const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(fileUpload()); 

connectDb(); 
app.use('/', route); 


export default app; 