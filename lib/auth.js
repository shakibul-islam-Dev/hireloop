import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db("hireloop");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  user: {
    additionalFields: {
      role: {
        defaultValue: "seeker",
        type: "String",
        input: true,
      },
    },
  },
  emailAndPassword: { enabled: true },
});
