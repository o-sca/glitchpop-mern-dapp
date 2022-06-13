const path = require('path');

const root = path.join(__dirname, "..", "build")

exports.getHomePage = (req, res) => {
  res.sendFile(root, "index.html")
};
