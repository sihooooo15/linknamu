import { getClient } from "./mongodb";

type ClickDoc = { _id: string; count: number };

async function collection() {
  const client = getClient();
  if (!client) return null;
  return (await client).db("linknamu").collection<ClickDoc>("clicks");
}

// DB가 없거나 실패해도 페이지는 뜨도록 빈 값을 돌려준다.
export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const col = await collection();
    if (!col) return {};
    const docs = await col.find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch (e) {
    console.error("getClickCounts failed", e);
    return {};
  }
}

export async function incrementClick(id: string): Promise<number | null> {
  const col = await collection();
  if (!col) return null;
  const res = await col.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return res?.count ?? null;
}
