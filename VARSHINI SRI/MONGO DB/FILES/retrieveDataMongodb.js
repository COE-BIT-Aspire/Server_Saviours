const { MongoClient } = require('mongodb'); // MongoClient - Class
const uri = 'mongodb://127.0.0.1:27017/'; // Connection URI 
const client = new MongoClient(uri); // Object - Mongoclient Class

async function connectToMongoDB(){ 
    try{
        await client.connect(); 
        const db = client.db('Aspire');
        const collection = db.collection('Employees');
        const cursor = collection.find({}); 
        console.log("Connected To MongoDB Successfully");
        await cursor.forEach(record=>{
            console.log(record);
        })
        await client.close();
    }
    
    catch(error){
        console.log("Error Connecting To MongoDB: ",error);
    }
}

connectToMongoDB(); 