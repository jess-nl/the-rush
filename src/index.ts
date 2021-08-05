import express from "express";
import axios from "axios";
import { PlayerStats } from "./interfaces";
import { trim } from "./utils/trim";

const router = express();
router.use(express.json());
const port = 3000;
require("dotenv/config");

router.listen(port, () => {
  console.log(`Listening at ${port}`);
});

router.get(`/api/v1/therush`, async (req, res) => {
  const { playerName, sorting } = req.query;
  const selectedSort = Number(sorting);

  try {
    await axios.get(process.env.THERUSH_URL as string).then((resp) => {
      const { data } = resp;

      if (playerName) {
        const singlePlayer = data.filter(
          (x: PlayerStats) => x.Player === playerName
        );
        res.send(singlePlayer);
        return;
      }

      if (selectedSort === 1) {
        res.send(
          data.sort(
            (a: PlayerStats, b: PlayerStats) => trim(a.Yds) - trim(b.Yds)
          )
        );
      } else if (selectedSort === 2) {
        res.send(
          data.sort(
            (a: PlayerStats, b: PlayerStats) => trim(a.Lng) - trim(b.Lng)
          )
        );
      } else if (selectedSort === 3) {
        res.send(
          data.sort((a: PlayerStats, b: PlayerStats) => trim(a.TD) - trim(b.TD))
        );
      } else {
        res.send(data);
        return;
      }
    });
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).send({ ...e, message: e?.message });
  }
});
