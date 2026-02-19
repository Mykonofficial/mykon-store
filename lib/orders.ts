import fs from "fs/promises";
import path from "path";

const dataDir = path.resolve(process.cwd(), "data");
const dataFile = path.join(dataDir, "orders.json");

export async function saveOrder(order: any) {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    let existing: any[] = [];
    try {
      const raw = await fs.readFile(dataFile, "utf8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }
    existing.push(order);
    await fs.writeFile(dataFile, JSON.stringify(existing, null, 2), "utf8");
  } catch (err) {
    console.error("saveOrder error", err);
    throw err;
  }
}
