import * as redis from "redis";

export const client = redis.createClient({
  url: process.env.REDIS_URL, // "redis://localhost:6379"
  // redis4 버전부터 host, port에서 url로 변경.
});
