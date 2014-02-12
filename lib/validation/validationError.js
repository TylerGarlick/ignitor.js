var util = require('util')
    ;


function ValidationErrors(errors, msg) {
    this.name = "ValidationError";
    this.message = msg;
    ValidationErrors.super_.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);

    Object.defineProperties(this, {
        validationErrors: { enumerable: true, configurable: false, value: errors }
    });
}

util.inherits(ValidationErrors, Error);
module.exports = ValidationErrors;