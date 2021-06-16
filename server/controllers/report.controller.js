const { reports } = require("../models");
const db = require("../models");
const report = db.reports;
const Op = db.Sequelize.Op;

// Create and Save a new report
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a report
  const report = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
    status: req.body.status
    
  };
  msg ="we are in report.controller_1";
  console.log(msg);
  // Save report in the database
  reports.create(report)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the report."
      });
    });
};
msg1 ="we are in report.controller_2";
  console.log(msg1);
// Retrieve all reports from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  report.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reports."
      });
    });
};

// Find a single report with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  report.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving report with id=" + id
      });
    });
};

// Update a report by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  report.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "report was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update report with id=${id}. Maybe report was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating report with id=" + id
      });
    });
};

// Delete a report with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  report.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "report was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete report with id=${id}. Maybe report was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete report with id=" + id
      });
    });
};

// Delete all reports from the database.
exports.deleteAll = (req, res) => {
  report.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} reports were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all reports."
      });
    });
};

// find all published report
exports.findAllPublished = (req, res) => {
  report.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reports."
      });
    });
};
