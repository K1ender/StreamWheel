import db from "~~/server/database";
import { statesTable } from "~~/server/database/schema";
import { nanoid } from "nanoid";

export default defineEventHandler(async (event) => {
  try {
    const url = new URL("https://id.twitch.tv/oauth2/authorize");
    const state = nanoid();
    await db.insert(statesTable).values({
      state,
    });

    url.searchParams.append("client_id", process.env.TWITCH_CLIENT_ID!);
    url.searchParams.append("redirect_uri", process.env.TWITCH_REDIRECT_URI!);
    url.searchParams.append("response_type", "code");
    url.searchParams.append("scope", "user:read:email");
    url.searchParams.append("state", state);

    return sendRedirect(event, url.toString(), 303)
  } catch (error) {
    return error;
  }
});
