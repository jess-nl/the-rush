import express from "express";
import axios from "axios";
import {
  filterByPlayer,
  sortPlayerByLng,
  sortPlayerByTD,
  sortPlayerByYds,
} from "../repositories";

const router = express();
require("dotenv").config({ path: require("find-config")(".env") });

router.get(`/api/v1/therush`, async (req, res) => {
  const { playerName, sorting } = req.query;
  const selectedSort = Number(sorting);

  try {
    await axios.get(process.env.THERUSH_URL as string).then((resp) => {
      const { data } = resp;

      if (playerName) {
        res.send(filterByPlayer(data, playerName as string));
        return;
      }

      if (selectedSort === 1) {
        res.send(sortPlayerByYds(data));
      } else if (selectedSort === 2) {
        res.send(sortPlayerByLng(data));
      } else if (selectedSort === 3) {
        res.send(sortPlayerByTD(data));
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

export = router;
