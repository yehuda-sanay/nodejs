const fs = require("fs");
class MyClass{
    writeFile=()=>{

        fs.writeFile("./new-file", "petah tikva", (error) => {if (error) return console.log(error);});
    }
    readFile=()=>{
        fs.readFile("./new-file",{encoding:'utf8'},(error,data)=>{
            if(error) return console.log(error);
            console.log(data);
        })
    }
}
module.exports={MyClass}