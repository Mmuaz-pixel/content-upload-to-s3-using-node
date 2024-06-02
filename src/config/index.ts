const dotenv = require('dotenv'); 
dotenv.config(); 

const config = {
	APP_PORT: process.env.PORT as string, 
	MONGO_URI: process.env.MONGO_URI as string, 
	S3_BUCKET_NAME: process.env.S3_BUCKET_NAME as string, 
	S3_BUCKET_REGION: process.env.S3_BUCKET_REGION as string, 
	AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY as string, 
	AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY as string
}

export default config; 