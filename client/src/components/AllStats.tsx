// @ts-nocheck
import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import { pingAPI } from "../utils/pingAPI";
import "../styles/App.css";

export default function AllStatsComponent(props) {
  const { setPlayerStats, setLoading } = props;

  return (
    <Formik
      initialValues={{}}
      onSubmit={(params, { setSubmitting }) => {
        setSubmitting(true);
        pingAPI(params, setPlayerStats, setLoading);
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
  );
}
