const fs = require('fs');
const lines = fs.readFileSync('lib/data/initialData.ts', 'utf-8').split('\n');
lines.forEach((l, i) => { 
  if (l.includes('slug: "edubridge"')) console.log(i + 1, l); 
  if (l.includes('title_en: "Deliver It"')) console.log(i + 1, l); 
  if (l.includes('coverImage') && (l.includes('deliver') || l.includes('edubridge'))) console.log(i + 1, l);
});
