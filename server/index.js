// require("dotenv").config();
const http = require('http');
const config = require("config");


const { ExpressInstance } = require('./server.js');


(async () => {
    const server = http.createServer(await ExpressInstance());
    const address = config.get("server.host");
    const port = config.get("server.port");

    server.listen(port, address, err => {
      if (err) return console.error(err);
    
      console.log(`Server started on ${address}:${port}`);
  
      return;
    });
  })();