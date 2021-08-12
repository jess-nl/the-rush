// @ts-nocheck
import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { pingAPI } from "../utils/pingAPI";
import "../styles/App.css";

export default function SortPlayersComponent(props) {
  const { setPlayerStats, setLoading } = props;

  return (
    <Formik
      initialValues={{ sorting: "" }}
      onSubmit={(params, { setSubmitting }) => {
        setSubmitting(true);
        pingAPI(params, setPlayerStats, setLoading);
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
          <Button type="submit" disabled={isSubmitting} variant="outlined">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
