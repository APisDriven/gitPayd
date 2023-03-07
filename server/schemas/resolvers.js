const { AuthenticationError } = require("apollo-server-errors");

const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Please login again");
    },
  },
Mutation: {
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError("Invalid credentials");
    }

    const correctPassword = await user.isCorrectPassword(password);
    if (!correctPassword) {
      throw new AuthenticationError("Invalid credentials");
    }
    const token = signToken(user);

    return { token, user };
  },
  addUser: async (parent, args) => {
    console.log(args)
      const user = await User.create(args);

  
    console.log(user)
    const token = signToken(user);

    return { token, user };
  },
  saveReceipt: async (parent, { input }, context) => {
    if (context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { receipts: input } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    }
    throw new AuthenticationError("You need to be logged in!");
  },
  removeReceipt: async (parent, { receiptNumber }, context) => {
    if (context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { receipts: { receiptNumber: receiptNumber } } },
        { new: true }
      );
      return updatedUser;
    }
    throw new AuthenticationError("You need to be logged in!");
  },
}
};


// async function getTransactions() {
//   try {
//     await client.connect();
//     const database = client.db('gitpayd'); // our database name
//     const collection = database.collection('transactions'); // our collection name
//     const transactions = await collection.find().toArray();
//     return transactions;
//   } catch (err) {
//     console.log(err);
//   } finally {
//     await client.close();
//   }
// };

// const resolvers = {
//   Query: {
//     transactions: async () => {
//       const transactions = await getTransactions();
//       return transactions;
//     },
//   },
// };

module.exports = resolvers;

