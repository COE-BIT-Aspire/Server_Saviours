const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);
async function connectToMongoDB(){
    try{
        await client.connect();
        const db = client.db('Aspire');
        const collection = db.collection('Employees');
        const cursor = collection.find({});
        /* const ackresult1 = await collection.insertOne({
            _id: 3,
            fname: 'Dinesh',
            lname: 'Kumar',
            gender: 'male',
            email: 'dinesh.kumar@aspiresys.com',
            salary: 50000,
            department: { name: 'TA' }
        }) */
        /* const ackresult2 = await collection.insertMany([
            {
                _id: 5,
                fname: 'Sarawathi',
                lname: 'Sathiah',
                gender: 'female',
                email: 'sarawathi.sathiah@aspiresys.com',
                salary: 30000,
                department: { name: 'TN' }
              },
              {
                _id: 6,
                fname: 'Savitha',
                lname: 'Ragunathan',
                gender: 'female',
                email: 'savitha.ragunathan@aspiresys.com',
                salary: 30000,
                department: { name: 'TN' }
              }
        ]) */ 
        // const ackresult3 = await collection.updateOne({email: "dinesh.kumar@aspiresys.com"}, {$set: {salary: 60000}});
        // const ackresult4 = await collection.updateMany({department: {name:" TN"}},{$set: {salary: 40000}});
       // const ackresult5 = await collection.deleteOne({salary: 50000});
       const ackresult6 = await collection.deleteMany({department: {name: "TN"}});
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