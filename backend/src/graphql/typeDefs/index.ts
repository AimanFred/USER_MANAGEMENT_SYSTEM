/* Module Name: 
   TypeDefs index file

   Created By: Farid faridaiman@schinkelgroups.com.my 
   Created: 03/01/2023 
   Framework: Node.js
   1. setup typedefs merge file

   Last Edited: 03/01/2023
   Edited By: Farid faridaiman@schinkelgroups.com.my
   Reason Edited: 
   1- 
*/

import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

// joining all typeDefs files in a single file
const typesArray = loadFilesSync(path.join(__dirname, "."), {
  recursive: true,
  ignoreIndex: true,
});

export default mergeTypeDefs(typesArray);
