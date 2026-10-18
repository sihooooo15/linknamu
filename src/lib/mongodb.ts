import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

// 개발 중 핫리로드마다 연결이 늘어나지 않도록 전역에 캐시한다.
const globalForMongo = globalThis as unknown as {
  _mongoClient?: Promise<MongoClient>;
};

export function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!globalForMongo._mongoClient) {
    globalForMongo._mongoClient = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClient;
}
