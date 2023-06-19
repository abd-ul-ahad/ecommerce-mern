const express = require("express");
const { User } = require("../models/User");

const routes = express.Router();

routes
  .post("/", async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
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
  })
  .get("/", async (req, res) => {
    const instances = await User.find();
    res.json(instances);
  });

exports.UserRoutes = routes;
