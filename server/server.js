import http from "http";
import path from "path";
import express from "express";
import {ApolloServer} from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import mongoose from "mongoose";
import typeDefs from "./schemas/typeDefs.js";
import resolvers from "./schemas/resolvers.js";



const app = express();
const httpServer = http.createServer(app);

const MONGODB_URI = process.env.MONGODB_URI|| "mongodb://127.0.0.1:27017/gitpayd";

const PORT = process.env.PORT || 3001;
const BUILD_PATH = path.resolve("../client/build");


const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

});

// const User= mongoose.model("User", userSchema);
await server.start();

app.use(express.static(BUILD_PATH));
app.use("/graphql", express.json(), expressMiddleware(server));


httpServer.listen({port: PORT}, () => {
    console.log(`Server ready at  http://localhost:${PORT}/`);
});