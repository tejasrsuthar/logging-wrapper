const winston = require("winston");
const morgan = require("morgan");
const bunyan = require("bunyan");

exports.getLoggerWrapper = function() {
  return {
    winston,
    morgan,
    bunyan
  };
};
