import { PlayerStats } from "../interfaces";
import { trim } from "../utils/trim";

export const filterByPlayer = (data: PlayerStats[], playerName: string) => {
  return data.filter(
    (x: PlayerStats) =>
      x.Player.toLowerCase() === playerName.toString().toLowerCase()
  );
};

export const sortPlayerByYds = (data: PlayerStats[]) => {
  return data.sort(
    (a: PlayerStats, b: PlayerStats) => trim(b.Yds) - trim(a.Yds)
  );
};

export const sortPlayerByLng = (data: PlayerStats[]) => {
  return data.sort(
    (a: PlayerStats, b: PlayerStats) => trim(b.Lng) - trim(a.Lng)
  );
};

export const sortPlayerByTD = (data: PlayerStats[]) => {
  return data.sort((a: PlayerStats, b: PlayerStats) => trim(b.TD) - trim(a.TD));
};
