import { Router } from "express";

const router = Router();

/**
 * AUTH HEALTH CHECK
 * GET /auth/health
 */
router.get("/health", (req, res) => {
  res.json({
    module: "auth",
    status: "ok",
    service: "VITON ID",
  });
});

export default router;
