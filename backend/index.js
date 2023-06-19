const express = require("express");
const mongoose = require("mongoose");

exports.Server = class {
  constructor() {
    this.server = express();
    this.server.use(express.json());
  }

  start(port) {
    this.server.listen(port, () => {
      console.log(`[+] - Server is running on port ${port}`);
    });
  }
};
