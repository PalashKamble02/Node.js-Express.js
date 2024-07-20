//Connecting database file , which we have created a database connection in , mongodb folder file name is dbConnectionMethods  and below code is reading the database 
// import dbConnect from './mongodb/dbConnectionMethods';
const dbConnect = require('./dbConnectionMethods')

const main = async () => {
	let data = await dbConnect();
	data = await data.find().toArray();
	console.warn(data);
}

main();