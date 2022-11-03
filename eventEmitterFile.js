const Event = require("events").EventEmitter

class MyEvents extends Event{
    constructor(){
        super();
        this.eventEmitterOnFunc()
    }
        eventEmitterOnFunc=()=>{
            
            this.on("somthing",()=>{
                console.log(info);
            })
        }
        eventEmitterEmitFunc=()=>{
            
            this.emit("somthing")
        }
}
module.exports= new MyEvents()