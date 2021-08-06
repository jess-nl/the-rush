import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import "./App.css";

export default function PlayerStats() {
  const [playerStats, setPlayerStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const pingAPI = (params) => {
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

  return (
    <>
      <header>
        <Formik
          initialValues={{ playerName: "", sorting: "" }}
          onSubmit={(params, { setSubmitting }) => {
            setSubmitting(true);
            pingAPI(params);
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <Field name="playerName" type="input" placeholder="Player name" />
              <ErrorMessage name="playerName" component="div" />
              OR
              {1}
              <Field name="sorting" type="radio" value="1" />
              {2}
              <Field name="sorting" type="radio" value="2" />
              {3}
              <Field name="sorting" type="radio" value="3" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </header>
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
