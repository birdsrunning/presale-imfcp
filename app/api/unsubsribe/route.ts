import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const result = await db
      .delete(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email));

    if (result.rowCount === 0) {
      return Response.json({
        success: false,
        message: "The provided email isn't subscribed. check spelling.",
      });
    }

    return Response.json({
      success: true,
      message: "You have successfully unsubscribe from the newsletter.",
    });
  } catch {
    return Response.json({
      success: false,
      message: "Something went wrong.",
    });
  }
}
