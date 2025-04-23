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
mongoose.connect("mongodb+srv://admin:admin123@newdatabase.p8tkuzd.mongodb.net/demo_db?retryWrites=true&w=majority&appName=newdatabase").then(()=> {
    console.log("connected to DB successfully");
    // Listening to requests if DB connection is successful    
    app.listen(4000, "localhost", ()=> console.log("listening to port 4000"));
})
.catch((err)=> console.log(err));
