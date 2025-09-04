import * as v from "valibot";

const authorizationSchema = v.object({
  code: v.string(),
  scope: v.string(),
  state: v.string(),
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readValidatedBody(event, (data) => {
      return v.parse(authorizationSchema, data);
    });

    const res = await $fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.TWITCH_CLIENT_ID!,
        client_secret: process.env.TWITCH_CLIENT_SECRET!,
        code: body.code,
        redirect_uri: process.env.TWITCH_REDIRECT_URI!,
        grant_type: "authorization_code",
      }),
    });

    
    
  } catch (error) {
    throw error;
  }
});
