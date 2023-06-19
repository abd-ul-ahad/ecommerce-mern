require("dotenv").config();
const { UserRoutes } = require("./routes/User");
const { Server } = require("./index");

const server = new Server();
server.connectDatabase(process.env.DATABASE_LINK).then(() => {
  server.setupRoutes(["/user/"], [UserRoutes]);
  server.start(8080);
});
