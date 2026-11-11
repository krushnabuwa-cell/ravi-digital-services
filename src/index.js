export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        success: true,
        message: "Ravi Digital Services Backend is running"
      });
    }

    if (url.pathname === "/api/config") {
      return Response.json({
        supabaseUrl: env.SUPABASE_URL || "",
        supabasePublishableKey: env.SUPABASE_PUBLISHABLE_KEY || ""
      });
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Website assets are not configured yet.", {
      status: 503
    });
  }
};
