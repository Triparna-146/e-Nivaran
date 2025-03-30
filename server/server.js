import express from "express";
import cors from 'cors'
import 'dotenv/config'
import adminRouter from "./routes/adminRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
