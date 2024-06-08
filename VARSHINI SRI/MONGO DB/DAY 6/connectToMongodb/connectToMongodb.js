const { MongoClient } = require('mongodb'); // MongoClient - Class
const uri = 'mongodb://127.0.0.1:27017/Aspire'; // Connection URI 
const client = new MongoClient(uri); // Object - Mongoclient Class

async function connectToMongoDB(){ 
    try{
        await client.connect(); 
        console.log("Connected To MongoDB Successfully");
    }
    
    catch(error){
        console.log("Error Connecting To MongoDB: ",error);
    }
}

connectToMongoDB(); 