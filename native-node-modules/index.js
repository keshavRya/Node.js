console.log("learning node.js");

const fs = require("fs");


fs.writeFile("./sample.txt", "this is keshav arya. i repeat this is keshav arya", (err) => {
    if (err) throw err;

    fs.readFile("./sample.txt", "utf-8", (err, data) =>{
        if (err) throw err;

        console.log(data);
    });
});