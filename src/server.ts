import express from 'express'
import mongoose from 'mongoose'
import router from './route/route.manger'
const app = express()
app.use('/',router)
app.listen(4000,()=>{
    console.log("server started on port 4000")
})