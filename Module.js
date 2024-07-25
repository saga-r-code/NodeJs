const fs = require("fs");

let text;

text = fs.readFileSync("test.txt", "utf-8");
console.log(text);

fs.appendFile("test.txt", "\nHiii", () => {
  console.log("The file has been saved!");
});

text = text.replace(/Code/g, "aagar");
console.log(text)
console.log("file has been update")
fs.writeFileSync("sagar.txt", text)
console.log("update")