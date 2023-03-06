import http from "http";
import path from "path";
import express from "express";
import {ApolloServer} from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import mongoose from "mongoose";
import{ PORT, MONGODB_URI } from "./config.js";

import typeDefs from "./schemas/typeDefs.js";
import resolvers from "./schemas/resolvers.js";

const app = express();
const httpServer = http.createServer(app);

const BUILD_PATH = path.resolve("../client/build");


const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await mongoose.connect(MONGODB_URI);
await server.start();
app.use(express.static(BUILD_PATH));
app.use("/graphql", express.json(), expressMiddleware(server));
httpServer.listen({port: PORT}, () => {
    console.log(`Server ready at  http://localhost:${PORT}/`);
});









// const express = require("express");
// const path = require("path");
// const db = require("./config/connection");
// const { ApolloServer } = require("apollo-server-express");

// const { typeDefs, resolvers } = require("./schemas");
// const { authMiddleware } = require("./utils/auth");

// const app = express();


// const PORT = process.env.PORT || 3001;

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// db.once("open", () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
