import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = 3001;

const env = process.env.NODE_ENV || "development";
console.log(`Running in ${env} mode`);

app.use(cors());
app.use(express.json());

// API Routes
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello, world!" });
});

if (env === "production") {
  app.use(express.static(path.join(__dirname, "../../dist")));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
