const config = require("config");
const path = require("path");

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");

const { mainRouter } = require('./routes/main.js');
const { apiRouter } = require("./routes/api.js");

exports.ExpressInstance = async () => {
  const app = express();
	
  try {
    mongoose.connect(config.get("mongo"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB Connected");

    app.use(express.static(path.join(__dirname, "build")));
    app.use(cors());
    app.use(morgan("combined"));
    app.use(express.json());
    app.use(
      session({
        secret: config.get("secret"),
        resave: false,
        saveUninitialized: true,
      })
    );
		
    app.use("/", mainRouter());
		app.use("/api/", apiRouter());

    return app;
  } catch (e) {
    console.error(e);
    return;
  }
};
