import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

/* ================= MIDDLEWARE ================= */
app.use(express.json());

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.json({
    service: "VITON ID",
    status: "running",
    version: "0.1.0",
  });
});

/* ================= SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 VITON ID backend running on port ${PORT}`);
});
