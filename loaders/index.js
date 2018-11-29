/**
 *  @desc loader entry
 */

/* eslint-disable */

const path = require('path');
const fs = require('fs');
const loaderUtils = require('loader-utils');
const SVGO = require('svgo');
const svgo = new SVGO();

const getOptions = loaderUtils.getOptions;

module.exports = function loader(source, map, meta) {
    const callback = this.async();

    svgo.optimize(source).then(result => {
        result.data = result.data.replace(/"/g, "'");
        callback(null, encodeURI(JSON.stringify(result)), map, meta);
        console.log(JSON.stringify(result));
    });
};
