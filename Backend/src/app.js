import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// major configurations for middlewares 
app.use(express.json({limit: "200kb"}));
app.use(express.urlencoded({extended: true, limit: "100kb"}));
app.use(express.static("public"))

//routes import
import dummyRouter from './routes/dummy.routes.js';


//routes declarations
app.use("/api/user", dummyRouter);



export {app} 