/* Module Name: 
   resolvers Book file

   Created By: Farid faridaiman@schinkelgroups.com.my 
   Created: 03/01/2023 
   Framework: Node.js
   1. setup resolvers merge file

   Last Edited: 03/01/2023
   Edited By: Farid faridaiman@schinkelgroups.com.my
   Reason Edited: 
   1- 
*/

export default {
  // Resolvers define how to fetch the types defined in your schema.
  // This resolver retrieves books from the "books" array above.
    Query: {
      books: () => books,
    },
}

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];