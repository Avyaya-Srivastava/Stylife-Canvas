import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import aiRoutes from "./api/ai.routes.js";

dotenv.config();

if (!process.env.RAPID_API_KEY) {
  console.error("Error: RAPID_API_KEY is missing. Please set it in the .env file.");
  process.exit(1); // Exit the application if the API key is missing
}

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration to allow requests from specific domains
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:5173',  // Local development URL
      'https://stylife.onrender.com',  // Production frontend URL (replace with your actual URL)
    ];
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    Credentials: true,
  };

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/ai", aiRoutes);

app.get("/", (req, res) => {
    res.status(200).send({ message: "Hello form Stylife"});
})

app.listen(port, () => console.log(`Server is running on port ${port}`));