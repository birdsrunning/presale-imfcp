import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const dummy = table(
  "dummy",
  {
    id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: t.varchar("dummy_name", { length: 100 }).notNull(),
    email: t.varchar({ length: 50 }).unique().notNull(),
  },
  (table) => [t.uniqueIndex("email_unique_idx").on(table.email)],
);
