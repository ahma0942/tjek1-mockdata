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
  if (reqUrl === "/CPR/CprPersonFullComplete/1/rest/PersonFullCurrentListComplete" && parsed.query["pnr.personnummer.eq"]) {
    const cpr = parsed.query["pnr.personnummer.eq"];
    const json = JSON.parse(fs.readFileSync("data/CPR.json"));
    const person = json.Personer.find((p) => p.Person.Personnumre.find((pnr) => pnr.Personnummer.personnummer === cpr));
    if (person) {
      res.write(JSON.stringify({ Personer: [person] }));
    } else {
      res.writeHead(404);
    }
  }

  if (reqUrl === "/CVR") {
    res.write(fs.readFileSync("data/CVR.json"));
  }
  if (reqUrl.toLowerCase() === "/cvr/n" && parsed.query["pnr.cvr.eq"]) {
    const cvr = parsed.query["pnr.cvr.eq"].toString();
    const json = JSON.parse(fs.readFileSync("data/CVR.json"));
    const filteredObjects = json.filter((item) => item.virksomhed.CVRNummer.toString() === cvr);

    if (filteredObjects.length > 0) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(filteredObjects));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("Not Found");
    }
    res.end();
  }
  res.end();
});
server.listen(9000);
