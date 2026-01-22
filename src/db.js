// src/db.js
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Render DB
});

// Optional: Test connection immediately
pool.query("SELECT NOW()")
  .then(res => console.log("✅ Connected to Render DB! Server time:", res.rows[0].now))
  .catch(err => console.error("❌ DB connection error:", err.message));
