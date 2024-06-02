const express  = require('express'); 
import { UploadPic } from '../controllers/dummy';

const route = express.Router(); 

route.post('/upload-pic', UploadPic); 

export default route; 