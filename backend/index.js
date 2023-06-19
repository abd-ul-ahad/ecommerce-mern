const express = require("express");
const mongoose = require("mongoose");

exports.Server = class {
  constructor() {
    this.server = express();
    this.server.use(express.json());
  }

  async connectDatabase(conString) {
    try {
      await mongoose.connect(conString);
      console.log("[+] - Connected to MongoDB");
    } catch (error) {
      console.log("[+] - Error connecting to MongoDB:", error);
    }
  }

  setupRoutes(names, routers) {
    names.forEach((item, i) => {
      this.server.use(item, routers[i]);
    });
  }

  start(port) {
    this.server.listen(port, () => {
      console.log(`[+] - Server is running on port ${port}`);
    });
  }
};
