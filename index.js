import fs from "fs";
import qr from 'qr-image';
import inquirer from "inquirer";

inquirer
.prompt([
  {
    message: "Type in your URL: ",
    name: "URL",
  }
])

.then((answer)=>{
  const url = answer.URL;
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('qr_img.png'));

  fs.writeFile("URL.txt", url, (err)=>{
    if(err) throw err;
    console.log('The file has been saved!')
  });
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});