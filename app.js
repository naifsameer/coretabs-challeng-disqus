const path = require("path");
// eslint-disable-next-line no-unused-vars
const createError = require("http-errors");
const express = require("express");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

const indexRouter = require("./routes/index");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(expressSession({
  secret: "secretKeyHere",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// // error handler
// app.use((err, req, res) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
