const { Router } = require("express");

const mainController = require("../controllers/mainController.js");

exports.mainRouter = () => {
  const router = Router();

  router.get("/*", mainController.getHomePage);

  return router;
};
