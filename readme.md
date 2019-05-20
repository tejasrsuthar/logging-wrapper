[![npm version](https://img.shields.io/npm/v/logging-wrapper.svg?style=flat)](https://www.npmjs.com/package/logging-wrapper)
[![Build Status](https://travis-ci.org/tejasrsuthar/logging-wrapper.svg?branch=master)](https://travis-ci.org/tejasrsuthar/logging-wrapper)

### 🔥🔥Logging Wrapper 🔥🔥

Have you ever tired installing the most common logging modules for your project over and over again? If yes, then this module is for you. Its just a wrapper around the most commonly used logging modules in node.js

Logging wrapper is just providing single object that will consists of all three logging modules **Winston**, **Bunyan**, and **Morgan**.

### Usage

###### Winston usage

```javascript
// Winston usage
const loggingWrapper = require("logging-wrapper");

// Only destructure the logging lib you want
const { winston, bunyan, morgan } = loggingWrapper.getLoggerWrapper();

// Winston usage
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" })
  ]
});

// if we're not in a production then log to the `console` with below format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}
```

###### Morgan usage

```javascript
morgan("tiny");
// For more info, please see: https://www.npmjs.com/package/morgan)
```

###### Bunyan usage

```javascript
var log = bunyan.createLogger({ name: "MyApplication" });
log.info("Hello bunyan");
// For more info, please see: https://www.npmjs.com/package/bunyan
```
