// Express app setup
import express from "express";
import cors from "cors";

// Error handling middleware
import { errorHandler, unknownEndpoint } from "./utils/middleware";

// Routes
import router from "./routes/root.router";
import { morganwrapped } from "./utils/logger";

const app = express();

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());

// request logger middleware
app.use(morganwrapped());

// Routes
app.use(router);

// custom middleware
app.use(unknownEndpoint);
app.use(errorHandler);

export default app;