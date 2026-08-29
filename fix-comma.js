const fs = require('fs');
let c = fs.readFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', 'utf-8');
c = c.replace(/\],\s*\},\s*,\s*\{\s*slug: "edubridge"/g, '],\n  },\n  {\n    slug: "edubridge"');
fs.writeFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', c);
console.log('done');
