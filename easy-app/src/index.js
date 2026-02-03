export default {
  async fetch(request, env) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cloudflare Worker Test</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 80px auto; padding: 0 20px; }
    .card { border: 1px solid #ddd; border-radius: 8px; padding: 24px; margin-top: 24px; }
    .label { font-weight: bold; color: #555; }
    .value { font-family: monospace; background: #f4f4f4; padding: 4px 8px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Cloudflare Worker Test</h1>
  <div class="card">
    <p><span class="label">Build-time var (BUILD_VAR):</span> <span class="value">${typeof BUILD_VAR !== "undefined" ? BUILD_VAR : "not set"}</span></p>
    <p><span class="label">Runtime var (MY_VARIABLE):</span> <span class="value">${env.MY_VARIABLE ?? "not set"}</span></p>
    <p><span class="label">Runtime secret (MY_SECRET):</span> <span class="value">${env.MY_SECRET ?? "not set"}</span></p>
  </div>
</body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
