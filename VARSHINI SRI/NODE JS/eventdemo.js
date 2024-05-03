var event = require("events");

var emitter = new event.EventEmitter();

emitter.on("trackdelivery",()=>{
    console.log("Order out for delivery");
})

function deliveryStatus(){
    console.log("Please wait for the delivery status. We are loadin.");
    console.log("Final status");
    emitter.emit("trackdelivery");
}

deliveryStatus();