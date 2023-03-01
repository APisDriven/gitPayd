import http from "http";
import path from "path";
import express from "express";
import {ApolloServer} from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import typeDefs from "./schemas/typeDefs.js";
import resolvers from "./schemas/resolvers.js";



const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3001;
const BUILD_PATH = path.resolve("../client/build");





const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

});
await server.start();

app.use(express.static(BUILD_PATH));
app.use("/graphql", express.json(), expressMiddleware(server));


app.get("/where", (req, res)=> {res.send("here!");
});

httpServer.listen({port: PORT}, () => {
    console.log(`Server ready at  http://localhost:${PORT}/`);
});