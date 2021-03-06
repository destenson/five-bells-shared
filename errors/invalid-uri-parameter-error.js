'use strict'

const InvalidUriError = require('./invalid-uri-error')

class InvalidUriParameterError extends InvalidUriError {
  constructor (message, validationErrors) {
    super(message)
    this.validationErrors = validationErrors
  }

  * handler (ctx, log) {
    log.warn('Invalid URI parameter: ' + this.message)
    ctx.status = 400
    ctx.body = {
      id: this.name,
      message: this.message,
      validationErrors: this.validationErrors
    }
  }
}

module.exports = InvalidUriParameterError
