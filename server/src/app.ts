import express from "express"
import errorHandler from "./middleware/error.handler";
require('dotenv').config();
import cors from "cors"
import { connectDb } from "./config/db.config";
import passport from 'passport'
import session  from "express-session";
import { deserializeUser, googleStrategy, SerializeUser } from "./auth/google.oauth";
import MongoStore from 'connect-mongo'
import googleRoute from './router/google.route'

const app = express();

connectDb();
app.use(cors());
passport.use(googleStrategy);
passport.serializeUser(SerializeUser);
passport.deserializeUser(deserializeUser);
app.use (session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTION_STRING
    })
}));
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', googleRoute)
const port = Number(process.env.PORT || 5000)
app.listen(port, () =>{
    console.log ('App listening to PORT:', port)
})

app.use(errorHandler)
