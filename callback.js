let fs= require('fs');
let data= fs.readFileSync('path.txt','utf8');

//non callback
console.log(data.toString);

//with callback
fs.readFile('path.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
});
console.log("This is the end");
