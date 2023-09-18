const jsf = require("json-schema-faker");
const schemaCPR = require("./schemas/CPR.schema");
const schemaCVR = require("./schemas/CVR.schema");
const fs = require("fs");
RandExp = require("randexp");
const { faker } = require('@faker-js/faker');


jsf.extend('faker', () => faker);
jsf.format("cpr", () => new RandExp("^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])\\d{2}\\d{4}$").gen());
jsf.format("cvr", () => new RandExp("^[0-9]{8}$").gen());

fs.writeFile(`${__dirname}/data/CPR.json`, JSON.stringify(jsf(schemaCPR), null, 2), function (err) {
  if (err) {
    console.error(err);
  }
});

fs.writeFile(`${__dirname}/data/CVR.json`, JSON.stringify(jsf(schemaCVR), null, 2), function (err) {
  if (err) {
    console.error(err);
  }
});
