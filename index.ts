import express from "express";
import axios from "axios";

const router = express();
router.use(express.json());
const port = 3000;
require("dotenv/config");

router.listen(port, () => {
  console.log(`Listening at ${port}`);
});
