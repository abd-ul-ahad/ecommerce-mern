require("dotenv").config();
const { UserRoutes } = require("./routes/User");
const { AuthRoutes } = require("./routes/Auth");
const { Server } = require("./index");

const server = new Server();
server.connectDatabase(process.env.DATABASE_LINK).then(() => {
  server.setupRoutes(["/api/users/", "/api/auth"], [UserRoutes, AuthRoutes]);
  server.start(8080);
});
