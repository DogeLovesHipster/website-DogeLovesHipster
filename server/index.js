import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "public/build")));

// Catch-all route to serve index.html for client-side routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
