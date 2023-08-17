figma.showUI(__html__, {
  width: 500,
  height: 809,
  title: 'Generate JSON',
});
figma.ui.onmessage = (msg) => {
  console.log('controller.ts onmessage| msg: ', msg);
  if (msg.type === 'create-json') {
    // const node: SceneNode = figma.currentPage.selection[0];
    // const nodeType = node.type;
    // console.log('node: ', node);
    console.log('controller.ts| msg: ', msg);
    figma.ui.postMessage({
      type: 'create-json',
      message: `${msg.type}: ${msg.message}`,
    });
  }
  // figma.closePlugin();
};

// figma.ui.onmessage = (msg) => {
//   console.log('msg: ', msg);
//   if (msg.type === 'create-rectangles') {
//     const nodes = [];
//
//     for (let i = 0; i < msg.count; i++) {
//       const rect = figma.createRectangle();
//       rect.x = i * 150;
//       rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
//       figma.currentPage.appendChild(rect);
//       nodes.push(rect);
//     }
//
//     figma.currentPage.selection = nodes;
//     figma.viewport.scrollAndZoomIntoView(nodes);
//
//     // This is how figma responds back to the ui
//     figma.ui.postMessage({
//       type: 'create-rectangles',
//       message: `Created ${msg.count} Rectangles`,
//     });
//   }
//
//   figma.closePlugin();
// };
