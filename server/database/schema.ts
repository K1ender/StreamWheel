import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  username: varchar("username", { length: 255 }).notNull(),
});

export const tokensTable = pgTable("tokens", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  accessToken: varchar("access_token", { length: 255 }).notNull(),
  refreshToken: varchar("refresh_token", { length: 255 }).notNull(),
  userID: integer("user_id")
    .references(() => usersTable.id)
    .notNull(),
});

export const statesTable = pgTable("states", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  state: varchar("state", { length: 255 }).notNull(),
});
