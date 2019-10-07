import express from "express";

import * as userController from "./controllers/users";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3001);

/**
 * API
 */
app.get("/users", userController.getUserReq);

export default app;
