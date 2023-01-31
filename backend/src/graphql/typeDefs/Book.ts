/* Module Name: 
   Boook TypeDefs File

   Created By: Farid faridaiman@schinkelgroups.com.my 
   Created: 03/01/2023 
   Framework: Node.js
   1. Schema for Book

   Last Edited: 03/01/2023
   Edited By: Farid faridaiman@schinkelgroups.com.my
   Reason Edited: 
   1- import graphql-tag to use gql tag
*/

import gql from "graphql-tag";
export default gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
