const sayHi = (name) => {
  console.log(`Hello ${name}`);
};
require(`./mind-grenade`);
const names = require("./4-names");
const other = require("./5-other");
console.log(names);
sayHi(names.Billington);
sayHi(names.bollard);
