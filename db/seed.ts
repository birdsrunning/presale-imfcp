import { db } from ".";
import { dummy } from "./schema";

const mails = [
  "birdsrunningmedia@gmail.com",
  "connectwithyekini@gmail.com",
  "connectyekini@gmail.com",
  "connectwithfirebird@gmail.com",
  "imageforcreatives@gmail.com",
];

async function seedDummy() {
  console.log("🌱 Seeding dummy table...");

  try {
    await db
      .insert(dummy)
      .values(
        mails.map((email, index) => ({
          name: `User ${index + 1}`,
          email,
        })),
      )
      .onConflictDoNothing(); // 👈 avoids crashing on duplicates

    console.log("✅ Dummy data inserted");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    process.exit(0);
  }
}

seedDummy();
