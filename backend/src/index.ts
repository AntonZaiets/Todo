import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);

app.get("/", (_req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
