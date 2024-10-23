const express = require("express");
const { connectDB } = require("./config/db");
const cors = require("cors");
const route = require("./routes/routes");

const PORT = 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database connection
connectDB();

// routes
app.use("/api", route);

app.listen(PORT, () => {
  console.log(`Server is started on Port ${PORT}`);
});
