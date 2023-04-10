export default {
  name: "eureka",
  type: 1,
  description: "POV: You got a eureka moment",
  options:
      [
        {
          name : "text",
          description : "The text to put in the eureka moment",
          type : 3,
          required : true,
        },
      ],
};
export async function run(c, msg) {
  return c.json({
    type : 4,
    data : {
      content : `POV: You got a eureka moment\n\n${msg.data.options[0].value}`,
    },
  });
}
