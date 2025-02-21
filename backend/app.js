let express= require("express")
const {UserModel} = require("./Model/Usermodel");
const userRoute=require("./Controllers/UserRoute");

let app=express()
app.use(express.json())
const errorMiddleware=require("./Middleware/Error")

app.use("/user",userRoute)

app.use(errorMiddleware)

module.exports={app}