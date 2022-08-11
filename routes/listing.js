const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

//create function to read warehouses file
const readListing = () => {
  const listingDataFile = fs.readFileSync("./data/listings.json");
  const listingData = JSON.parse(listingDataFile);
  return listingData;
};

router.get("/", (req, res) => {
  const { Results } = readListing();
  res.status(200).json(Results);
});

// //GET /warehouses/:id
router.get("/:id", (req, res) => {
  const { Results } = readListing();
  console.log(typeof Results);
  const selectedlist = Results.find((list) => list.Id === req.params.id);
  if (!selectedlist) {
    res.status(404).send("Listing not found");
    return;
  }

  res.status(200).json(selectedlist);
});
module.exports = router;
