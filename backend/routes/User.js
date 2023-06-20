const express = require("express");
const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const { Server } = require("../index");

const routes = express.Router();

routes.get("/", Server.checkAuth, async (req, res) => {
  const instances = await User.find();
  res.json(instances);
});

exports.UserRoutes = routes;
