let express= require("express")
const {UserModel} = require("./Model/Usermodel");
const userRoute=require("./Controllers/UserRoute");
const cors=require("cors")

let app=express()
app.use(express.json())
const errorMiddleware=require("./Middleware/Error")

app.use(cors({
    origin:'http://localhost:8080',
    credentials:true
}))

app.use("/user",userRoute)

app.use(errorMiddleware)

module.exports={app}