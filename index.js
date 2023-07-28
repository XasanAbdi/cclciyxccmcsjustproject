import express from 'express'
import connectDB from './database/db.js'
import dotenv from 'dotenv'
import CompanyRouter from './Router/CompanyRouter.js'
import LeadRouter from './Router/LeadRouter.js'
import TaskRouter from './Router/TaskRouter.js'
import MeetRouter from './Router/MeetRouter.js'
import ContRouter from './Router/ContRouter.js'
import LostleadRouter from './Router/LostleadRouter.js'
import OppRouter from './Router/OppRouter.js'
import EmpRouter from './Router/EmpRouter.js'
import UserRouter from './Router/UserRouter.js'
import OrderRouter from './Router/OrderRouter.js'
import FeedbackRouter from './Router/FeedbackRouter.js'
import Product_Router from './Router/Product_Router.js'


dotenv.config();
connectDB();
const app=express();

app.use(express.json());

app.use('/api/company/',CompanyRouter)
app.use('/api/lead/',LeadRouter)
app.use('/api/task/',TaskRouter)
app.use('/api/meet/',MeetRouter)
app.use('/api/contact/',ContRouter)
app.use('/api/lostlead/',LostleadRouter)
app.use('/api/opp/',OppRouter)
app.use('/api/emp/',EmpRouter)
app.use('/api/user/',UserRouter)
app.use('/api/order/',OrderRouter)
app.use('/api/feedback/',FeedbackRouter)
app.use('/api/product/',Product_Router)


const prot=process.env.PORT||5000



app.listen(prot,()=>{
    console.log(`Server is runing on port ${prot}`)

})