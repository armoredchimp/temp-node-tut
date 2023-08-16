const EventEmitter = require("events");

const customEmittter = new EventEmitter();

customEmittter.on("response", (name, id) => {
  console.log(`data received ${name} ${id}`);
});
customEmittter.on("response", () => {
  console.log(`second message `);
});

customEmittter.emit("response", "person", 24);
