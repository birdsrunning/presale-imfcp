import { resend } from "@/lib/resend";
import { db } from "@/db";
import { newsletterSubscribers, presaleTable } from "@/db/schema";
import { eq } from "drizzle-orm";

