const fs = require('fs')
const EventEmitter=require('events').EventEmitter

class SpiderMen extends EventEmitter{
    constructor(){
        super()
        this.onSomfunc()
        this.onSomfunc()
        this.writeFileFunc()
        this.readFileFunc()
    }
    writeFileFunc=()=>{
        fs.writeFile('./spiderMenInfo','Peter Parker" and "Spidey" redirect here. For other people, see Peter Parker (disambiguation). For the comic book series, see Spidey (comic book). For subsequent versions of the character, see List of incarnations of Spider-Man. For other uses, see Spider-Man (disambiguation)')
    }

    readFileFunc=()=>{
        fs.readFile('./spiderMenInfo',{ encoding: "utf8" }, (error,data) => {
              if (error) return console.log(error)
              emit("som")
              writeFileOnUpperCaseFunc=()=>{
                  fs.writeFile("./newSpiderManeFile",data.toUpperCase(),(error)=>{
                      if(error) return console.log(error);
                      emit("new massege")
                  })
              }

    })
    onSomfunc=()=>{
        
        this.on("som",()=>{console.log("seccsses")})
    }
    }
    onNewMassegefunc=()=>{

        this.on("new massege",()=>{
            console.log("new massege seccsses");
        })
    }


}

module.exports= new SpiderMen()