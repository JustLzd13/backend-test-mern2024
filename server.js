import express from "express";
import mongoose from "mongoose";
import cors from "cors";  // Import CORS middleware
import { postsRoutes } from "./routes/postsRoutes.js";
import { usersRoutes } from "./routes/usersRoutes.js";

// Initializing Express app
const app = express();
const port = 4000;

// CORS configuration
const corsOptions = {
  origin: 'https://frontend-test-mern2024.vercel.app', // Allow only this origin (your frontend)
  methods: 'GET,POST,PUT,DELETE', // Allow specific methods
  allowedHeaders: 'Content-Type,Authorization', // Allow these headers
};

// Middleware to handle CORS
app.use(cors(corsOptions));

// Middleware to receive JSON
app.use(express.json());

// Adding the API end-points and the route handlers
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

// Connecting to MongoDB using Mongoose
mongoose.connect("mongodb+srv://admin:admin123@newdatabase.p8tkuzd.mongodb.net/demo_db?retryWrites=true&w=majority&appName=newdatabase")
  .then(() => {
    console.log("connected to DB successfully");
    // Listening to requests if DB connection is successful    
    app.listen(port, () => console.log(`listening to port ${port}`));
  })
  .catch((err) => console.log(err));
