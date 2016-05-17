'use strict';
const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const ExtendableError = require('es6-error');
const _ = require('lodash');

class e404 extends ExtendableError {
    constructor(message = 'not found') {
        super(message);
    }

    handler(req, res) {
        if (!res.headersSent) res.status(404).send();
    }
}

module.exports = (cms) => {
    cms.data.errors.e404 = e404;
    const e = new cms.data.errors.e404();
    cms.data.handlers.push((req, res, e) => {
        console.warn(e.stack);
        if (!res.headersSent) res.status(500).send();
    })
}