/* Module Name: 
   resolvers index file

   Created By: Farid faridaiman@schinkelgroups.com.my 
   Created: 03/01/2023 
   Framework: Node.js
   1. setup resolvers merge file

   Last Edited: 03/01/2023
   Edited By: Farid faridaiman@schinkelgroups.com.my
   Reason Edited: 
   1- 
*/

import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

// joining all resolvers files in a single file
const resolversArray = loadFilesSync(path.join(__dirname, "."), {
  ignoreIndex: true,
});

export default mergeResolvers(resolversArray);
