const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();

        const db=client.db('aspire')
        const collection=db.collection('employees');

        const cursor=collection.find({});
        const ackresult= await collection.insertMany([{
            _id:2,
  firstName: 'Naresh',
  lastName: 'Veerapandiyan',
  gender: 'male',
  email: 'Naresh.veerapandiyan@abc.com',
  salary: 60000,
  department: { name: 'Developer' }


        },
        {
            _id:3,
  firstName: 'Siva',
  lastName: 'kathirasan',
  gender: 'male',
  email: 'Siva.Kathirasan@abc.com',
  salary: 20000,
  department: { name: 'HR' }


        }])
        console.log("the record inserted into the colection with "+ ackresult.insertedId)

        await cursor.forEach(record=>{
            console.log(record)
        })
        await client.close()
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();