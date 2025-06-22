const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

async function connectToMongoDB(){
    try{
        await client.connect();
        const db = client.db('Aspire');
        const collection = db.collection('Employees');
        const cursor = collection.find({}); 
        const ackresult1 = await collection.updateOne({email: "subbu.sambandam@aspiresys.com"},{$set: {salary: 80000}});
        const ackresult2 = await collection.updateMany({department: {name: "HR"}},{$set: {salary: 60000}});
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