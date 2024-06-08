const { dir } = require('console');
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;



// This below line of code creates file 
// fs.writeFileSync(filePath,'This is a simple text file');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// });



// // This below line of code Updates file
//  fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err)console.log("file is updated");
//  });


// //This below line of code Renames files 
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//        if(!err)console.log("file  name is updated");

// })


 //This below line of code simply deleting the File We have Created
 fs.unlinkSync(`${dirPath}/fruit.txt`);