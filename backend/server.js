const app=require("./app");
const {connectDatabase}=require("./config/database");
//const port=process.env.PORT || 3000;

connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
}); 

// ,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useUnifiedTopology:true
// }