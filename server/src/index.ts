import express, { NextFunction, Request, Response } from "express";
import createError, { HttpError } from "http-errors";
import cors from "cors";

const app = express();
const port = 3001;
require("dotenv/config");
const theRushApi = require("./routes/index");

app.use(express.json());
app.use(cors());
app.use("/", theRushApi);

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
