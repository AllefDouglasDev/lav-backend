module.exports = {
  connect() {
    return require('amqplib')
      .connect(process.env.RABBITMQ_URL)
      .then(conn => conn.createChannel());
  },

  createQueue(channel, queue) {
    return new Promise((resolve, reject) => {
      try{
        channel.assertQueue(queue, { durable: true });
        resolve(channel);
      } catch(err) {
        reject(err);
      }
    });
  },

  sendToQueue(queue, message) {
    this.connect()
      .then(channel => this.createQueue(channel, queue))
      .then(channel => channel.sendToQueue(queue, Buffer.from(JSON.stringify(message))))
      .catch(err => console.log(err));
  },

  consume(queue, callback) {
    this.connect()
      .then(channel => this.createQueue(channel, queue))
      .then(channel => channel.consume(queue, callback, { noAck: true }))
      .catch(err => console.log(err));
  },
};
