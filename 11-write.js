// const _ = require("lodash");
// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("hello fool!");
const { readFile, writeFile } = require("fs").promises;
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `Hi Bob. Here: ${first}${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
