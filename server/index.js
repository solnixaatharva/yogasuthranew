import "dotenv/config";
import express from "express";
import cors from "cors";
import { db } from "./db.js";
import { products } from "./drizzle/schema.js";
import { desc, eq } from "drizzle-orm";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true }));

// GET all
app.get("/api/products", async (req, res) => {
  const rows = await db.select().from(products).orderBy(desc(products.id));
  res.json(rows);
});

// POST create
app.post("/api/products", async (req, res) => {
  const { name } = req.body;
  const [created] = await db.insert(products).values({ name }).returning();
  res.status(201).json(created);
});

// DELETE by id
app.delete("/api/products/:id", async (req, res) => {
  const id = Number(req.params.id);
  const [deleted] = await db.delete(products).where(eq(products.id, id)).returning();
  res.json(deleted ?? null);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`API on ${process.env.PORT || 5000}`);
});
