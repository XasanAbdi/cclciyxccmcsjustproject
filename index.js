import express from 'express'
import connectDB from './database/db.js'
import dotenv from 'dotenv'
import OrderRouters from "./Router/OrderRouter.js";
import FeedbackRouters from "./Router/FeedbackRouter.js";
import ProductRouters from "./Router/Product_Router.js";
import LeadRouters from "./Router/LeadRouter.js";
import TaskRouters from "./Router/TaskRouter.js";
import MeetRouters from "./Router/MeetRouter.js";
import ContactRouters from "./Router/ContRouter.js";
import LostleadRouters from "./Router/LostleadRouter.js";
import OppertunityRouters from "./Router/OppRouter.js";
import EmpRouters from "./Router/EmpRouter.js";
import CompanyRouters from "./Router/CompanyRouter.js";
import UserRouters from "./Router/UserRouter.js";


dotenv.config();
connectDB();
const app=express();

app.use(express.json());

app.use('/api/lead/',LeadRouters)
app.use('/api/task/',TaskRouters)
app.use('/api/meet/',MeetRouters)
app.use('/api/contact/',ContactRouters)
app.use('/api/lostlead/',LostleadRouters)
app.use('/api/opp/',OppertunityRouters)
app.use('/api/emp/',EmpRouters)
app.use('/api/company/',CompanyRouters)
app.use('/api/user/',UserRouters)
app.use('/api/order/',OrderRouters)
app.use('/api/feedback/',FeedbackRouters)
app.use('/api/product/',ProductRouters)


const prot=process.env.PORT||5000



app.listen(prot,()=>{
    console.log(`Server is runing on port ${prot}`)

})