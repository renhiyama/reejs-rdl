export default async function sendMessage(data, channel) {
  const res = await fetch(
      `https://discord.com/api/v10/channels/${channel}/messages`,
      {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          Authorization : `Bot ${Deno.env.get("TOKEN")}`,
        },
        body : JSON.stringify(data),
      },
  );
  return res;
}
