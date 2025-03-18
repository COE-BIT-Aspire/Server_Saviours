const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

async function connectToMongoDB(){
    try{
        await client.connect();
        const db = client.db('Aspire');
        const collection = db.collection('Employees');
        const cursor = collection.find({}); 
        const ackresult1 = await collection.deleteOne({department: {name: "CEO"}});
        const ackresult2 = await collection.deleteMany({department: {name: "SL"}});
        await cursor.forEach(record=>{
            console.log(record);
        })
        await client.close();
    }

    catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();