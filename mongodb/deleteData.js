const dbConnect = require('./dbConnectionMethods');

const deleteData = async  () => {
   const data = await dbConnect();
   const result = await data.deleteOne({name:'note 5'})
   console.warn(result);
}


deleteData();

// for delete many 
// const dbConnect = require('./dbConnectionMethods');

// const deleteData = async  () => {
//    const data = await dbConnect();
//    const result = await data.deleteMany({name:'note 5'})
//    console.warn(result);
//    if (result.acknowledged) {
//     console.log("record deleted")
//    }
// }


// deleteData();