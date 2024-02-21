import { Router } from "express";
import userRouter from "./user.routes";

const router = Router();

// Healthcheck endpoint
router.get("/", (req, res) => {
  res.status(200).send({ status: "ok" });
});

// User routes
router.use("/user", userRouter);

export default router;