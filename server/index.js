import "dotenv/config";
import express from "express";
import cors from "cors";
import { prisma } from "./prismaClient.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/products", async (req, res) => {
  const rows = await prisma.product.findMany();
  res.json(rows);
});

app.post("/api/products", async (req, res) => {
  const created = await prisma.product.create({ data: req.body });
  res.json(created);
});

const port = process.env.PORT || 4242;
app.listen(port, () => console.log("Server running on port", port));
