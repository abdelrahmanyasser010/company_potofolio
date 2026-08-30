const fs = require('fs');
const content = fs.readFileSync('lib/data/initialData.ts', 'utf-8');

// Extract the INITIAL_PORTFOLIO array text roughly
const start = content.indexOf('export const INITIAL_PORTFOLIO');
const subset = content.substring(start, start + 30000);

const deliverIt = subset.indexOf('slug: "deliver-it"');
const edu1 = subset.indexOf('slug: "edubridge"');
const edu2 = subset.indexOf('slug: "edubridge"', edu1 + 10);

console.log("DeliverIt starting at:", deliverIt);
console.log(subset.substring(deliverIt, deliverIt + 1000));
console.log("-----------------------");
console.log("Edu1 starting at:", edu1);
console.log(subset.substring(edu1, edu1 + 1000));
console.log("-----------------------");
console.log("Edu2 starting at:", edu2);
console.log(subset.substring(edu2, edu2 + 1000));
