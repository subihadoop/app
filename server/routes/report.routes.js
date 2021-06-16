module.exports = app => {
  const report = require("../controllers/report.controller.js");

  var router = require("express").Router();

  // Create a new report
  router.post("/", report.create);

  // Retrieve all reports
  router.get("/", report.findAll);

  // Retrieve all published reports
  router.get("/published", report.findAllPublished);

  // Retrieve a single report with id
  router.get("/:id", report.findOne);

  // Update a report with id
  router.put("/:id", report.update);

  // Delete a report with id
  router.delete("/:id", report.delete);

  // Delete all reports
  router.delete("/", report.deleteAll);

  app.use('/api/report', router);
};
