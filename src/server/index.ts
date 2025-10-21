import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = 3001;

const env = process.env.NODE_ENV || "development";
console.log(`Running in ${env} mode`);

app.use(cors());
app.use(express.json());

const spaHandler = (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
};

if (env === "production") {
  app.use(express.static(path.join(__dirname, "../../dist")));

  /*
   * We connect directly instead of using app.get("*")
   *The error when using "*" in Express routes occurs due to an internal conflict in the "path-to-regexp" library,
   * which Express uses for route parsing.
   * The * character is treated as a special route parameter. The library expects a parameter in the :param format, but receives *
   * const regexp = pathToRegexp('*'); // A pattern like '/:foo' is expected
   */
  app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
      return spaHandler(req, res);
    }
    next();
  });
}

// API Routes
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
