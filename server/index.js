require("dotenv").config({ path: "../.env" });

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const Razorpay = require("razorpay");

const app = express();
app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.json());

const DB_PATH = path.join(__dirname, "enrollments.json");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

function readEnrollments() {
  if (!fs.existsSync(DB_PATH)) return [];
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeEnrollments(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Create a Razorpay order
app.post("/api/create-order", async (req, res) => {
  const { amount, projectId, projectTitle, email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "name and email are required" });
  }

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: { email, name, projectId, projectTitle },
    });

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error("Razorpay order error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Verify payment and store enrollment
app.post("/api/verify-payment", (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    email,
    name,
    projectId,
    projectTitle,
    amount,
  } = req.body;

  const expectedSig = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expectedSig !== razorpay_signature) {
    return res.status(400).json({ error: "Payment verification failed" });
  }

  const enrollments = readEnrollments();

  const record = {
    id: razorpay_payment_id,
    orderId: razorpay_order_id,
    email,
    name,
    projectId,
    projectTitle,
    amount,
    enrolledAt: new Date().toISOString(),
    status: "enrolled",
  };

  enrollments.push(record);
  writeEnrollments(enrollments);

  console.log(`✓ Enrolled: ${name} (${email}) — ${projectTitle}`);
  res.json({ success: true, enrollment: record });
});

// List enrollments (for admin)
app.get("/api/enrollments", (req, res) => {
  res.json(readEnrollments());
});

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => console.log(`WorkXD server running on :${PORT}`));
