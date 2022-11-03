// const fs = require("fs");

// fs.writeFile("./my-file.txt", "hello Yehuda", () => {});

// fs.appendFileSync("./my-file.txt", "sanay", (error) => {
//     if(error) return console.log(error);
// });

// for (let i = 0; i < 101; i++) {
//   fs.appendFileSync("./my-file.txt", `,${i}`, () => {});
// }

// fs.readFile("./my-file.txt",{encoding:'usf8'},(error,data)=>{
//     if(error) return console.log(error);
//     console.log(data);
// })

// fs.writeFile("./new-text.txt","greatest players ever and is often compared to Michael Jordan in debates over the greatest basketball player of all time James has won four NBA championships, four NBA MVP awards, four NBA Finals MVP awards, three All-Star MVP awards",
// (error)=>{
//     if(error) return console.log(error);
// })

// fs.readFile("./new-text.txt",{encoding:'utf8'},(error,data)=>{
//     if(error) return console.log(error);
//     console.log(data);
// })

// fs.readFile("./new-text.txt",(error,data)=>{
//     if(error) return console.log(error);
//     if(data.length>50)return console.log("seccses");
// })

// fs.readFile("./new-text.txt", { encoding: "utf8" }, (error, data) => {
//   if (error) return console.log(error);
//   fs.writeFile("./my-new-file.txt", `${data}`, (error) => {
//     if (error) return console.log(error);
//     console.log(data.toUpperCase());
//   });
// });

// const {writeFile,readFile}=require("./newClass")
// writeFile()
// readFile()

// const Event = require("events").EventEmitter

// const eventEmitter = new Event()

// eventEmitter.on("somthing",()=>{
//   console.log("somthing");
// })

// eventEmitter.emit("somthing")
// const app = require("./eventEmitterFile");
// app.eventEmitterEmitFunc()

const app = require("./SpiderMen")