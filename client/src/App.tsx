// @ts-nocheck
import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { Button } from "@material-ui/core";
import "./styles/App.css";
import AllStatsComponent from "./components/AllStats";
import OnePlayerComponent from "./components/FilterByOnePlayer";
import SortPlayersComponent from "./components/SortPlayers";
import TableComponent from "./components/Table";

export default function PlayerStatsComponent() {
  const [playerStats, setPlayerStats] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <header>
        <h1>THE RUSH</h1>
        <div className="title-csv">
          <CSVLink data={playerStats} filename={"therush-playerstats.csv"}>
            {!loading && <Button variant="outlined">Download as CSV</Button>}
          </CSVLink>
        </div>

        <div className="center">
          <AllStatsComponent
            setPlayerStats={setPlayerStats}
            setLoading={setLoading}
          />

          <OnePlayerComponent
            setPlayerStats={setPlayerStats}
            setLoading={setLoading}
          />

          <SortPlayersComponent
            setPlayerStats={setPlayerStats}
            setLoading={setLoading}
          />
        </div>
      </header>

      <main>
        <TableComponent playerStats={playerStats} />
      </main>
    </>
  );
}
