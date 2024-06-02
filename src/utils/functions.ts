import {S3} from "aws-sdk";
import config from "../config";
const mongoose = require('mongoose'); 

export const uploadToS3 = async (file: any, bucketName: string) => {
  try {
    const s3 = new S3({
      credentials: {
        accessKeyId: config.AWS_ACCESS_KEY,
        secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
      },
    }); // creating a s3 object of aws

    const newFileName = `pic_${Date.now().toString()}.${
      file.mimetype.split("/")[1]
    }`;

    const params = {
      Bucket: bucketName,
      Key: newFileName,
      Body: file.data,
    };

	s3.upload(params, {}, (err: Error, data: S3.ManagedUpload.SendData) => {
      if (err) {
        return err;
      }
	  else 
	  {
		return data; 
	  }
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const connectDb = async() => {
	try 
	{
		await mongoose.connect(config.MONGO_URI)
		console.log('Db connected'); 
	}
	catch(error)
	{
		console.log(error); 
	}
}
