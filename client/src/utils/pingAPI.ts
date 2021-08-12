import axios from "axios";
import PlayerStats from "../interfaces/PlayerStats";

export const pingAPI = (
  params: PlayerStats[],
  setPlayerStats: any,
  setLoading: any
) => {
  axios
    .get(`http://localhost:3001/api/v1/therush`, { params })
    .then((res) => {
      setPlayerStats(res.data);
      setLoading(false);
    })
    .catch((e) => {
      console.log(e);
    });
};
