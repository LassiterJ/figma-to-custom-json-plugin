figma.codegen.on('generate', (eventData: CodegenEvent): CodegenResult[] => {
  const node: SceneNode = eventData.node;
  // Get node Type

  const nodeType = node.type;
  console.log('node: ', node);
  console.log('nodeType: ', nodeType);
  return [{ title: 'test', code: '<h1>test</h1>', language: 'JAVASCRIPT' }];
});

// Finds all component and component set nodes
// const nodes = node.findAllWithCriteria({
//   types: ['COMPONENT', 'COMPONENT_SET']
// })

//   // Initialize the array to hold all text strings
//   let textStrings: string[] = [];
//
//   // Initialize the JSON object to hold the text strings
//   let jsonStringsDictionary: {
//     [key: string]: {
//       string: string;
//     };
//   } = {};
//
//   // Convert each string into a JSON entry
//   for (const textString of textStrings) {
//     // Convert the string to a suitable format for a JSON key
//     const jsonKey = createJsonKey(textString);
//
//     // Add the string to the JSON object
//     jsonStringsDictionary[jsonKey] = { string: textString };
//   }
//
//   // Return the codegen result
//   return [
//     {
//       language: 'JSON',
//       code: JSON.stringify(jsonStringsDictionary, null, 2),
//       title: 'i18n Dictionary',
//     },
//   ];
// });
//
// // Function to create a JSON key from a string
// function createJsonKey(inputString: string) {
//   return inputString.toLowerCase().replace(/\s/g, '_');
// }
