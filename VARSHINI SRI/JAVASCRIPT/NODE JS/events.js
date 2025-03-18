var event = require("events"); // Importing events module

var emitter = new event.EventEmitter(); // Object of event emitter class

emitter.on("trackdelivery",()=>{ // Registering listeners 
    console.log("Order out for delivery");
})

function deliveryStatus(){
    console.log("Please wait for the delivery status. We are loadin.");
    console.log("Final status");
    emitter.emit("trackdelivery"); // Trigger event
}

deliveryStatus();