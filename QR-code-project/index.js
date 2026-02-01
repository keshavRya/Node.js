/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import  qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "enter url: ", 
        name: "url"
    }, 
    {
        message: "enter url2: ",
        name: "url2"
    }

  ])
  .then((answers) => {
    const url = answers.url;
    const url2 = answers.url2;

    let qr1  = qr.image(url);
    let qr2  = qr.image(url2);



    qr1.pipe(fs.createWriteStream('./qr1.png'));
    qr2.pipe(fs.createWriteStream('./qr2.png'));

    fs.writeFile("./user-input.txt", `url1: ${url}\nurl2: ${url2}`, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        }

  });

})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment

    } else {
      // Something else went wrong
    }
  });

