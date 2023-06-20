const express = require("express");
const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

let publicKey;
fs.readFile(
  path.resolve(__dirname, "./Public.key"),
  "utf-8",
  (err, data) => (publicKey = data)
);

class Server {
  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.server.use(cors());
  }

  async connectDatabase(conString) {
    try {
      await mongoose.connect(conString);
      console.log("[+] - Connected to MongoDB");
    } catch (error) {
      console.log("[+] - Error connecting to MongoDB:", error);
    }
  }

  static checkAuth = (req, res, next) => {
    const token = req.get("Authorization").split(" ")[1];
    console.log(token);
    var decoded = jwt.verify(token, publicKey);
    if (decoded.email) {
      next();
      return;
    }
    res.json({ done: false });
  };

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
}

exports.Server = Server;
