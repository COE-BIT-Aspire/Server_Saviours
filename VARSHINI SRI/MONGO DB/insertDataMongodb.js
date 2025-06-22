const { MongoClient } = require('mongodb'); // MongoClient - Class
const uri = 'mongodb://127.0.0.1:27017/'; // Connection URI 
const client = new MongoClient(uri); // Object - Mongoclient Class

async function connectToMongoDB(){ 
    try{
        await client.connect(); 
        const db = client.db('Aspire');
        const collection = db.collection('Employees');
        const cursor = collection.find({}); 
        const ackresult = await collection.insertMany([{
            _id: 11,
            firstName: 'Naveen',
            lastName: 'Subramaniam',
            gender: 'male',
            email: 'naveen.subramaniam@aspiresys.com',
            salary: 36000,
            department: { name: 'TN' }
        },
        {
            _id: 12,
            firstName: 'Gowri',
            lastName: 'Shankar',
            gender: 'male',
            email: 'gowri.shankar@aspiresys.com',
            salary: 100000,
            department: { name: 'COE' }
        }])
        console.log("The Records Are Inserted Into The Collection With " + ackresult.insertedIds);
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