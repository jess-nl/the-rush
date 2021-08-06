// @ts-nocheck
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { CSVLink } from "react-csv";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import "./styles/App.css";
import { PlayerStats, Params } from "./interfaces";

export default function PlayerStatsComponent() {
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
        <h1>THE RUSH</h1>
        <div className="title-csv">
          <CSVLink data={playerStats} filename={"therush-playerstats.csv"}>
            {!loading && <Button variant="outlined">Download as CSV</Button>}
          </CSVLink>
        </div>

        <div className="center">
          <Formik
            initialValues={{}}
            onSubmit={(params, { setSubmitting }) => {
              setSubmitting(true);
              pingAPI(params);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="outlined"
                  size="large"
                >
                  Display all players stats
                </Button>
              </Form>
            )}
          </Formik>

          <Formik
            initialValues={{ playerName: "" }}
            onSubmit={(params, { setSubmitting }) => {
              setSubmitting(true);
              pingAPI(params);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="playerName"
                  type="input"
                  placeholder="Display a player stats"
                  as={TextField}
                />
                <ErrorMessage name="playerName" component="div" />{" "}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="outlined"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>

          <Formik
            initialValues={{ sorting: "" }}
            onSubmit={(params, { setSubmitting }) => {
              setSubmitting(true);
              pingAPI(params);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormLabel component="legend">Sort by</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    control={
                      <Field name="sorting" type="radio" value="1" as={Radio} />
                    }
                    label="Total Rushing Yards"
                  />
                  <FormControlLabel
                    control={
                      <Field name="sorting" type="radio" value="2" as={Radio} />
                    }
                    label="Longest Rush"
                  />
                  <FormControlLabel
                    control={
                      <Field name="sorting" type="radio" value="3" as={Radio} />
                    }
                    label="Total Rushing Touchdowns"
                  />
                </RadioGroup>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="outlined"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </header>

      <main>
        {playerStats.map((x: PlayerStats, index) => (
          <div className="grid-container" key={index}>
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
