import { NextResponse } from "next/server";
import { db } from "@/db"; // your drizzle instance
import { presaleTable } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const data = await db
      .select()
      .from(presaleTable)
      .orderBy(desc(presaleTable.createdAt));

    return NextResponse.json(data);
  } catch (error) {
    console.error("PRESALE FETCH ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch presale data" },
      { status: 500 }
    );
  }
}