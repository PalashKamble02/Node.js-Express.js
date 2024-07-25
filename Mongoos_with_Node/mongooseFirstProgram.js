const mongoose = require('mongoose');

const main= async ()=>{
    await mongoose.connect("mongodb://adminUser:password@localhost:27017/e-comm", {
        authSource:"admin"
    });
    const ProductSchema = new mongoose.Schema({
        name: String,
        brand:String,
        price:Number,
        category:String
    });
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({name:"m 10", brand:"MMMMM", price:150 , category:"Mobile"});
    let result = await data.save();
    console.log(result);
}
main();