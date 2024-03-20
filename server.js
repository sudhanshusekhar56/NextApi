const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const blogRouter = require("./blogRouter");

const app = express();
const uri =
  "mongodb+srv://sudhanshusekhar56:Abhi.10021995@bytegalaxy.v98a8hm.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=ByteGalaxy";

app.use(cors());
// Middleware to parse JSON data
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("I'm running perfectly...");
});

app.use("/blog", blogRouter);

connectDB(uri);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
