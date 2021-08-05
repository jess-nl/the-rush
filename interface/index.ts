export interface PlayerStats {
  Player: string;
  Team: string;
  Pos: string;
  Att: number;
  ["Att/G"]: number;
  Yds: string | number;
  Avg: number;
  ["Yds/G"]: number;
  TD: string | number;
  Lng: string | number;
  ["1st"]: number;
  ["1st%"]: number;
  ["20+"]: number;
  ["40+"]: number;
  FUM: number;
}
