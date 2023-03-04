export default {
    Query:{
        when(){
            return{
                message: "now",
                timestamp: new Date().toISOString(),
            };
        },
    },};

    const { MongoClient } = require('mongodb');

    const uri = 'mongodb://127.0.0.1:27017/gitpayd';
    const client = new MongoClient(uri);
    
    async function getTransactions() {
      try {
        await client.connect();
        const database = client.db('gitpayd'); // our database name
        const collection = database.collection('transactions'); // our collection name
        const transactions = await collection.find().toArray();
        return transactions;
      } catch (err) {
        console.log(err);
      } finally {
        await client.close();
      }
    };
    
    const resolvers = {
      Query: {
        transactions: async () => {
          const transactions = await getTransactions();
          return transactions;
        },
      },
    };
    
    module.exports = resolvers;
    