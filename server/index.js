require("dotenv").config();
const http = require('http');

const { ExpressInstance } = require('./server.js');


(async () => {
    const server = http.createServer(await ExpressInstance());
    const address = process.env.ADDRESS;
    const port = process.env.PORT;
    server.listen(port, address, err => {
      if (err) return console.error(err);
    
      console.log(`Server started on ${address}:${port}`);
  
      return;
    });
  })();