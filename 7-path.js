const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");

const base = path.basename(filePath);
console.log(filePath);
console.log(base);
const resolve = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(resolve);
