console.log("worker started");
const Queue = require("./config/queue");

module.exports = (api) => {
  Queue.consume("proccess-payment", message => {
    const data = JSON.parse(message.content.toString());
    console.log(data);
    return [{ success: true }];
  });
}
