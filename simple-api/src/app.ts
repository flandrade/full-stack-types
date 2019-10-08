import express from "express";
import cors from "cors";

import * as userController from "./controllers/users";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3001);

// CORS
app.use(cors());

/**
 * API
 */
app.get("/users", userController.getUsersReq);

export default app;
