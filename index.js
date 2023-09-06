const jsf = require("json-schema-faker");
const schema = require("./CPR.schema");
const fs = require("fs");
RandExp = require("randexp");
const { faker } = require('@faker-js/faker');


jsf.extend('faker', () => faker);
jsf.format("cpr", () => new RandExp("^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])\\d{2}\\d{4}$").gen());
jsf.resolve(schema).then((sample) => {
  fs.writeFile(`${__dirname}/data/CPR.json`, JSON.stringify(sample, null, 2), function (err) {
    if (err) {
      console.error(err);
    }
  });
});
