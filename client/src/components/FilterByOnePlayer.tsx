// @ts-nocheck
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, TextField } from "@material-ui/core";
import { pingAPI } from "../utils/pingAPI";
import "../styles/App.css";

export default function OnePlayerComponent(props) {
  const { setPlayerStats, setLoading } = props;

  return (
    <Formik
      initialValues={{ playerName: "" }}
      onSubmit={(params, { setSubmitting }) => {
        setSubmitting(true);
        pingAPI(params, setPlayerStats, setLoading);
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
          <Button type="submit" disabled={isSubmitting} variant="outlined">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
