import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { email } = await req.json();

  const result = await db
    .delete(newsletterSubscribers)
    .where(eq(newsletterSubscribers.email, email));

  if (result.rowCount === 0) {
    return Response.json({ success: false });
  }

  return Response.json({ success: true });
}