require("./config/database");
const express = require("express");
const cors = require("cors");
const route = require("./routes/route");

const app = express();

const whitelist = ["http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World From Express Server");
});

app.use("/api", route);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
