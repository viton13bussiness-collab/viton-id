import {
  generateAccessToken,
  generateRefreshToken,
} from "./auth.service.js";

/**
 * LOGIN (Apple-style)
 * POST /auth/login
 */
export function login(req, res) {
  const { userId, email } = req.body;

  // ⛔️ пока без БД — заглушка (нормально на этом этапе)
  if (!userId || !email) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const payload = { userId, email };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // 🍏 Apple-style: refresh token в httpOnly cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "true",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
  });

  return res.json({
    accessToken,
    user: payload,
  });
}

/**
 * LOGOUT
 * POST /auth/logout
 */
export function logout(req, res) {
  res.clearCookie("refreshToken");
  res.json({ status: "logged_out" });
}
