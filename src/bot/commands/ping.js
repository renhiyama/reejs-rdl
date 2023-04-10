export default {
  name: "ping",
  type: 1,
  description: "Ping me",
};
export async function run(c, msg) {
  let data = {
    type : 4,
    data : {
      content : "Pong!",
    },
  };
  return c.json(data);
}
