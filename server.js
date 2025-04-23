import express from "express";
import mongoose from "mongoose";
import { postsRoutes } from "./routes/postsRoutes.js";
import { usersRoutes } from "./routes/usersRoutes.js";

// Initializing Express app
const app = express();
const port = 4000;

// Middleware to receive JSON
app.use(express.json());

// Adding the API end-points and the route handlers
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

// Connecting to MongoDB using Mongoose
mongoose.connect("mongodb+srv://admin:admin123@newdatabase.p8tkuzd.mongodb.net/demo_db?retryWrites=true&w=majority&appName=newdatabase").then(()=> {
    console.log("connected to DB successfully");
    // Listening to requests if DB connection is successful    
    app.listen(port, "localhost", ()=> console.log(`listening to port ${port}`));
})
.catch((err)=> console.log(err));
