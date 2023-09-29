let express = require("express");
let cors=require("cors");
 let app = express();
app.use(cors());

 app.get("/newFashion",(req,res)=>{
let newFashionArr=["gents,ladies,childerns,graceeeeeee,oooooo"];
res.json(newFashionArr);

 });

//  app.get("/oldFashion",(req,res)=>{
//     let oldFashionArr=["gents,ladies,childerns,others"];
//     res.json(oldFashionArr)
//  });

// app.get("actors",(req,res)=>{
//     let ntr={
// name:"NTR",
// pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/NT_Rama_Rao_2000_stamp_of_India.jpg/330px-NT_Rama_Rao_2000_stamp_of_India.jpg",

//     }
//     let actorsArr=[ntr];
//     res.json(actorsArr);
// });


 app.listen(5555,()=>{
    console.log("Listening to port 5555");
 });