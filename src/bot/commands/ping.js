export default {
  name: "ping",
  type: 1,
  description: "Ping the bot",
};
export async function run(c, msg) {
  return c.json({
    "type" : 4,
    "data" : {
      "tts" : false,
      "content" : "Congrats on sending your command!",
      flags : 64,
    }
  });
}
