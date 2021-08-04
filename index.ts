import express from "express";
import axios from "axios";

const router = express();
router.use(express.json());
const port = 3000;
require("dotenv/config");

router.listen(port, () => {
  console.log(`Listening at ${port}`);
});

router.get(`/api/v1/therush`, async (req, res) => {
  try {
    await axios.get(process.env.THERUSH_URL as string).then((resp) => {
      const { data } = resp;

      res.send(data);
      return;
    });
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).send({ ...e, message: e?.message });
  }
});
