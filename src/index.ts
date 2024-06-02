import app from './app'
import config from './config'

app.listen(config.APP_PORT, ()=>{
	console.log(`App running on port ${config.APP_PORT}`); 
}); 