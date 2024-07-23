//below code is for update one record

const dbConnect = require ('./dbConnectionMethods');


const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'redmi 10 A'},{
            $set:{name:'redmi 1000 Z', price:500}
        }
    )
    console.warn(result);
}

updateData();

//Below code is for update All record with same name or with same match

// const dbConnect = require ('./dbConnectionMethods');


// const updateData = async () => {
//     let data = await dbConnect();
//     let result = await data.update(
//         {name:'redmi 10 A'},{
//             $set:{name:'redmi 1000 Z', price:500}
//         }
//     )
//     console.warn(result);
// }

// updateData();