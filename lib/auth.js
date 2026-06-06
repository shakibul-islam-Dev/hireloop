import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// Ensure variables are defined
const mongoUri = process.env.MONGO_DB_URI;
const authSecret = process.env.BETTER_AUTH_SECRET;
const authUrl =
  process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL;

if (!mongoUri || !authSecret) {
  throw new Error(
    "Missing required environment variables: MONGO_DB_URI or BETTER_AUTH_SECRET",
  );
}

const client = new MongoClient(mongoUri);
const db = client.db("hireloop");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: { enabled: true },
  secret: authSecret,
  baseURL: authUrl, // Explicitly pass the URL
});
