/* Module Name: 
   Apollo main file

   Created By: Farid faridaiman@schinkelgroups.com.my 
   Created: 12/12/2022 
   Framework: Node.js
   1. Setup apollo server

   Last Edited: 03/01/2023
   Edited By: Farid faridaiman@schinkelgroups.com.my
   Reason Edited: 
   1- add types to typeDefs and resolvers
*/

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { IResolvers } from "@graphql-tools/utils";
import { DocumentNode } from "graphql";

async function startApolloServer(
  typeDefs: DocumentNode,
  resolvers: IResolvers<unknown, unknown, Record<string, any>, any>
) {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use("/graphql", bodyParser.json(), expressMiddleware(server));

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  // const { url } = await startStandaloneServer(server, {
  //   listen: { port: 4000, path: "/adham" },
  // });
  console.log(`🚀  Server ready at http://localhost:4000/graphql `);
}
startApolloServer(typeDefs, resolvers);
