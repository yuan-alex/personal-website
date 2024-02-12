import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

app.use("*", serveStatic({ root: "dist" }));

serve({
  fetch: app.fetch,
  hostname: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
});
