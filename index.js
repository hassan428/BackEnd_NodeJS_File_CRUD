const fs = require('fs');



// xxxxxxxxxxxxxxxxxxxxxxxx----Create Folder----xxxxxxxxxxxxxxxxxxxxxxxx


// fs.mkdirSync("newFolder");


// fs.mkdir("newFolder1", () => {
//     console.log("Folder Created");
// });





// xxxxxxxxxxxxxxxxxxxxxxxx----Create File----xxxxxxxxxxxxxxxxxxxxxxxx


// fs.writeFileSync("newFolder/index.html", "<h1>hello world writeFileSync</h1>");


// fs.writeFile("newFolder1/index`.html", "<h1>hello world writeFile</h1>", () => {
//     console.log("Create File")
// });





// xxxxxxxxxxxxxxxxxxxxxxxx---- Read File----xxxxxxxxxxxxxxxxxxxxxxxx




// const read_file_sync = fs.readFileSync("newFolder/index.html", "utf-8");

// console.log("read_file_sync", read_file_sync);


// fs.readFile("newFolder1/index.html", "utf-8", (readFile) => {
//     console.log("readFile", readFile)
// })






// xxxxxxxxxxxxxxxxxxxxxxx----- Append File -------xxxxxxxxxxxxxxxxxxx


// fs.appendFileSync("newFolder/index.html", "\n<p>I am appending to the file.</p>")



// fs.appendFile("newFolder1/index.html",
//     `\n<ul>
// <li>Pakistan</li>
// <li>China</li>
// <li>Turkey</li>
// </ul>`,
//     () => {
//         console.log('The data was appended to file!');
//     });



// fs.appendFile("text.txt", "Abc", () => {
//     console.log("Create text.txt");
// })




// xxxxxxxxxxxxxxxxxxxxx-- Remove File & Directory ---xxxxxxxxxxxxxxxxxxxxxx


// fs.rm("text.txt", () => {
//     console.log("delete text.txt success!");
// });


// fs.rmSync("text.txt");



// fs.rm("newFolder/index.html", () => {
//     console.log("delete newFolder/index.html succes!")
// })


// fs.rmSync("newFolder1/index.html");



// fs.rmdir("newFolder", () => {
//     console.log("delete newFolder success!")
// });


// fs.rmdirSync("newFolder1");








