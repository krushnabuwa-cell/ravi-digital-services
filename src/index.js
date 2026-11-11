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
        supabaseUrl: env.SUPABASE_URL || "https://zurjduivdbijdkbxfuqm.supabase.co",
        supabasePublishableKey: env.SUPABASE_PUBLISHABLE_KEY || "sb_publishable_T9_m-r-DPP1SS7Uvw23PUw_U-PWUWrP"
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
