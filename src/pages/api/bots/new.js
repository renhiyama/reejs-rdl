export const method = "POST";
export default async function Route(c) {
  try {
    let body = await c.req.body();
    let data = JSON.parse(body);

  } catch (e) {
    console.log(e);
  }
}
