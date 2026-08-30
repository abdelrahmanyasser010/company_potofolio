const fs = require('fs');
let content = fs.readFileSync('lib/data/initialData.ts', 'utf-8');

const strToFind = `  {
    slug: "edubridge",
    title_ar: "EduBridge",
    title_en: "EduBridge",
    eyebrow_ar: "Backend لمنصة المدارس",`;

// We'll just do a more robust string replacement
const startIndex = content.indexOf('slug: "edubridge"'); // this is the first one
const startBrace = content.lastIndexOf('{', startIndex);

// Find the matching closing brace
let openCount = 0;
let endIndex = -1;
for (let i = startBrace; i < content.length; i++) {
  if (content[i] === '{') openCount++;
  if (content[i] === '}') {
    openCount--;
    if (openCount === 0) {
      endIndex = i;
      break;
    }
  }
}

if (endIndex !== -1) {
  // also remove trailing comma
  let nextChar = content.indexOf(',', endIndex);
  if (nextChar !== -1 && nextChar < endIndex + 10) {
     endIndex = nextChar;
  }
  
  const toRemove = content.substring(startBrace, endIndex + 1);
  console.log("Removing:");
  console.log(toRemove);
  
  content = content.replace(toRemove, '');
  fs.writeFileSync('lib/data/initialData.ts', content, 'utf-8');
  console.log("Removed successfully.");
} else {
  console.log("Could not find end of object.");
}
