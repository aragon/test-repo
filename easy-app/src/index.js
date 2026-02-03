export default {
  async fetch(request, env) {
    const html = `<h1>Cloudflare Worker Test</h1>
<p>Build-time var (BUILD_VAR): ${typeof BUILD_VAR !== "undefined" ? BUILD_VAR : "not set"}</p>
<p>Runtime var (MY_VARIABLE): ${env.MY_VARIABLE ?? "not set"}</p>
<p>Runtime secret (MY_SECRET): ${env.MY_SECRET ?? "not set"}</p>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
  
};
