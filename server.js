const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb://localhost:27017/admissions", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  message: String,
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

app.use(cors());
app.use(express.json());

app.post("/api/enquiries", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(200).send("Enquiry saved!");
  } catch (err) {
    res.status(500).send("Error saving enquiry.");
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
