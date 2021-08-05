import express from "express";
import axios from "axios";
import { PlayerStats } from "./interface";

const router = express();
router.use(express.json());
const port = 3000;
require("dotenv/config");

router.listen(port, () => {
  console.log(`Listening at ${port}`);
});

router.get(`/api/v1/therush`, async (req, res) => {
  const { playerName } = req.query;

  try {
    await axios.get(process.env.THERUSH_URL as string).then((resp) => {
      const { data } = resp;

      if (playerName) {
        const playerStats = data.filter(
          (x: PlayerStats) => x.Player === playerName
        );
        res.send(playerStats);
        return;
      }

      res.send(data);
      return;
    });
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).send({ ...e, message: e?.message });
  }
});
