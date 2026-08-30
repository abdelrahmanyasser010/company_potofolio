const fs = require('fs');
const content = fs.readFileSync('lib/data/initialData.ts', 'utf-8');
const slugs = content.match(/slug:\s*['"](.*?)['"]/g);
console.log(slugs);
