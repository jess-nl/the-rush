import { PlayerStats } from "../interfaces";
import { trim } from "../utils/trim";

export const filterByPlayer = (data: PlayerStats[], playerName: string) => {
  const selectedName = playerName.toString().toLowerCase();

  return data.filter((x: PlayerStats) => {
    if (selectedName.split(" ").length > 1) {
      return x.Player.toLowerCase() === selectedName;
    } else {
      return x.Player.toLowerCase().split(" ").includes(selectedName);
    }
  });
};

export const sortPlayer = (data: PlayerStats[], index: keyof PlayerStats) => {
  return data.sort(
    (a: PlayerStats, b: PlayerStats) => trim(b[index]) - trim(a[index])
  );
};
