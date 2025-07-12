require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const path = require("path");

const connectDB = require("./config/db");

function createApp() {
  const app = express();

  // Connect DB (each invocation in serverless, or once locally)
  connectDB();

  // Sessions
  app.use(
    session({
      secret: "note-ejs-app",
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
      }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(methodOverride("_method"));

  // Static files
 app.use(express.static(path.join(__dirname, "../public")));

  // EJS
  app.use(expressLayouts);
  app.set("layout", "./layouts/main");
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  // Routes
  app.use("/", require("./routes/auth"));
  app.use("/", require("./routes/index"));
  app.use("/", require("./routes/dashboard"));

  // 404
  app.get("*", (req, res) => {
    res.status(404).render("404");
  });

  return app;
}

module.exports = createApp;
