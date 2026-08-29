const fs = require('fs');

let c = fs.readFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', 'utf-8');

// Fix 1: literal \n instead of actual newline
c = c.replace(/visual:\s*"education",\\n\s*website:\s*"https:\/\/edubridge-dashboard-two\.vercel\.app\/grades",/g, 'visual: "education",\n    website: "https://edubridge-dashboard-two.vercel.app/grades",');

// Fix 2: missing comma between objects `  }{` -> `  },\n  {`
c = c.replace(/\}\s*\{\s*slug:\s*"medskai"/g, '},\n  {\n    slug: "medskai"');

fs.writeFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', c);
console.log('Fixed syntax errors');
