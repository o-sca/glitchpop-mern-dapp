const http = require('http');

const { App } = require('./src/app.js');


(async () => {
    const server = http.createServer(await App());
    const address = process.env.SERVER_ADDRESS;
    const port = process.env.SERVER_PORT;

    server.listen(port, address, err => {
      if (err) return console.error(err);
    
      console.log(`Server started on ${address}:${port}`);
  
      return null;
    });
  })();