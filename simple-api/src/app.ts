import express from "express";

import * as userController from "./controllers/users";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

/**
 * API
 */
app.get("/users", userController.getUsers);

export default app;
