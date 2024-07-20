const dbConnect = require('./dbConnectionMethods')

const insert = async () => {
    const db = await dbConnect();
   const result = await db.insertOne(
    {name: 'note 5' , brand : 'vivo', price : 320, category : 'mobile'}
   );
   if(result.acknowledged)
   {
    console.log('inserted successfully')
   }
}
insert(); 


// This following syntax is for insert many 

// const dbConnect = require('./dbConnectionMethods');

// const insertManyDocuments = async () => {
//     const db = await dbConnect();
//     const result = await db.insertMany([
//         { name: 'note 5', brand: 'vivo', price: 320, category: 'mobile' },
//         { name: 'iPhone 12', brand: 'Apple', price: 999, category: 'mobile' },
//         { name: 'Galaxy S21', brand: 'Samsung', price: 799, category: 'mobile' }
//     ]);

//     if (result.acknowledged) {
//         console.log('Documents inserted successfully');
//     } else {
//         console.log('Failed to insert documents');
//     }
// }

// insertManyDocuments();
