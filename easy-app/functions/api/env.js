export function onRequestGet(context) {
  return Response.json({
    variable: context.env.MY_VARIABLE || null,
    secret: context.env.MY_SECRET || null,
  });
}
