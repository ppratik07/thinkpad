import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
const zoomRoutes = require('./routes/zoom');

app.use(express.json());

app.use('/api/zoom', zoomRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
