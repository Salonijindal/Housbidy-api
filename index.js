const express = require("express");
const app = express();
const listingRoutes = require("./routes/listing");

const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log("Incoming request: ", req.path);

  // You have to call next if you want to proceed to next middleware
  next();
});
app.use("/listings", listingRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
