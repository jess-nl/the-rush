import React, { useEffect, useState } from "react";
import "./App.css";

export default function PlayerStats() {
  const [playerStats, setPlayerStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/therush`)
      .then((res) => res.json())
      .then((data) => {
        setPlayerStats(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <header></header>
      <main>
        {loading && <p>Player stats loading . . .</p>}
        {playerStats.map((x, index) => (
          <div class="grid-container" key={index}>
            <div>
              <h1>{x.Player}</h1>
            </div>
            <div></div>

            <div>Team</div>
            <div>{x.Team}</div>

            <div>Pos</div>
            <div>{x.Pos}</div>

            <div>Att</div>
            <div>{x.Att}</div>

            <div>Att/G</div>
            <div>{x["Att/G"]}</div>

            <div>Yds</div>
            <div>{x.Yds}</div>

            <div>Avg</div>
            <div>{x.Avg}</div>

            <div>Yds/G</div>
            <div>{x["Yds/G"]}</div>

            <div>TD</div>
            <div>{x.TD}</div>

            <div>Lng</div>
            <div>{x.Lng}</div>

            <div>1st</div>
            <div>{x["1st"]}</div>

            <div>1st%</div>
            <div>{x["1st%"]}</div>

            <div>20+</div>
            <div>{x["20+"]}</div>

            <div>40+</div>
            <div>{x["40+"]}</div>

            <div>FUM</div>
            <div>{x.FUM}</div>
          </div>
        ))}
      </main>
    </>
  );
}
