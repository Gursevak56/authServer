import express from "express";
import auth from "./auth";
const route = express.Router()
route.use('/v1/auth',auth)
export default route
