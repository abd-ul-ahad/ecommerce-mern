const express = require("express");
const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const routes = express.Router();

const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../Private.key"),
  "utf-8"
);

routes.post("/register", async (req, res) => {
  try {
    let { firstName, lastName, email, password } = req.body;
    password = await EncPassword(password);

    const instance = new User({
      firstName,
      lastName,
      email,
      password,
    });
    await instance.save();

    res.json({ done: true, user: instance });
  } catch (error) {
    res.json({ done: false, error });
  }
});

routes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const instance = await User.findOne({ email });

    if (instance && (await DecPassword(instance.password, password))) {
      const token = jwt.sign({ email }, privateKey, { algorithm: "RS256" });

      instance.token = token;
      await instance.save();
      res.json({ done: true, instance });
    } else {
      res.json({ done: false });
    }
  } catch (error) {
    res.json({ error });
  }
});

const EncPassword = (_password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(_password, salt, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });
  });
};

const DecPassword = (_hash, _password) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(_password, _hash, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

exports.AuthRoutes = routes;
