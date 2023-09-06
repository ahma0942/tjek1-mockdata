const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const parsed = url.parse(req.url, true);
  const reqUrl = parsed.pathname;

  if (reqUrl === "/CPR") {
    res.write(fs.readFileSync("data/CPR.json"));
  }
  if (reqUrl === "/CPR/CprPersonFullSimple/1/rest/PersonFullListSimple" && parsed.query["pnr.personnummer.eq"]) {
    const cpr = parsed.query["pnr.personnummer.eq"];
    const json = JSON.parse(fs.readFileSync("data/CPR.json"));
    const person = json.Personer.find((p) => p.Person.Personnumre.find((pnr) => pnr.Personnummer.personnummer === cpr));
    if (person) {
      res.write(JSON.stringify(person));
    } else {
      res.writeHead(404);
    }
  }
  res.end();
});
server.listen(9000);
