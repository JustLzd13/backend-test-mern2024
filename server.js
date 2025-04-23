import express from "express";
import mongoose from "mongoose";
import { postsRoutes } from "./routes/postsRoutes.js";
import { usersRoutes } from "./routes/usersRoutes.js";

// Initializing Express app
const app = express();

// Middleware to receive JSON
app.use(express.json());

// Adding the API end-points and the route handlers
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

// Connecting to MongoDB using Mongoose
mongoose.connect("mongodb://admin:admin123@ac-lmckrfw-shard-00-00.p8tkuzd.mongodb.net:27017,ac-lmckrfw-shard-00-01.p8tkuzd.mongodb.net:27017,ac-lmckrfw-shard-00-02.p8tkuzd.mongodb.net:27017/demo_db?ssl=true&replicaSet=atlas-13q2kr-shard-0&authSource=admin&retryWrites=true&w=majority").then(()=> {
    console.log("connected to DB successfully");
    // Listening to requests if DB connection is successful    
    app.listen(4000, "localhost", ()=> console.log("listening to port 4000"));
})
.catch((err)=> console.log(err));
