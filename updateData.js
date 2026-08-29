const fs = require('fs');

let content = fs.readFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', 'utf-8');

// 1. Delete CV Generator
const cvStart = content.indexOf('{\\n    slug: "cv-generator"');
if (cvStart !== -1) {
  // Find the end of the object. We'll search for the next `,\n  {`
  let cvEnd = content.indexOf(',\\n  {\\n    slug: "medskai"', cvStart);
  if (cvEnd === -1) {
    cvEnd = content.indexOf(',\\r\\n  {\\r\\n    slug: "medskai"', cvStart);
  }
  if (cvEnd !== -1) {
    // Delete the whole block
    content = content.substring(0, cvStart) + content.substring(cvEnd + (content.includes('\\r\\n') ? 4 : 3) + 2);
  }
}

// 2. Add website link to edubridge
// The first edubridge was removed, so there's only one.
const eduIndex = content.indexOf('slug: "edubridge",');
if (eduIndex !== -1) {
  // insert website after visual: "education",
  const visualIndex = content.indexOf('visual: "education",', eduIndex);
  if (visualIndex !== -1) {
    const insertPos = visualIndex + 'visual: "education",'.length;
    content = content.substring(0, insertPos) + '\\n    website: "https://edubridge-dashboard-two.vercel.app/grades",' + content.substring(insertPos);
  }
}

// 3. Add the 5 new images to edubridge gallery
const eduGalleryEnd = content.indexOf(']\\n  }\\n];', eduIndex);
let targetEnd = eduGalleryEnd !== -1 ? eduGalleryEnd : content.indexOf(']\\r\\n  }\\r\\n];', eduIndex);

if (targetEnd !== -1) {
  const newGalleryItems = `,
      { src: "/projects/edubridge/edubridge-6.webp", title_ar: "الفصول والمواد الدراسية", title_en: "Classes and Subjects", caption_ar: "دليل المقررات والمواد التعليمية والفصول والشعب الدراسية وتوزيعها.", caption_en: "Guide for academic subjects, classes, and their distribution." },
      { src: "/projects/edubridge/edubridge-7.webp", title_ar: "الجداول وحصص الانتظار", title_en: "Schedules and Substitutions", caption_ar: "جداول حصص الفصول الأسبوعية وتكليف معلمي الانتظار لتغطية غياب زملائهم.", caption_en: "Weekly class schedules and assigning substitute teachers." },
      { src: "/projects/edubridge/edubridge-8.webp", title_ar: "السلوك والمواظبة", title_en: "Behavior and Attendance", caption_ar: "الملاحظات السلوكية المرصودة واعتمادها لإشعار ولي الأمر بالتدخل التربوي.", caption_en: "Monitored behavioral notes and approvals for parent notifications." },
      { src: "/projects/edubridge/edubridge-9.webp", title_ar: "الحضور والغياب", title_en: "Attendance and Absence", caption_ar: "رصد غياب الطلاب اليومي وقائمة الإنذار المبكر للمتجاوزين للحد المسموح.", caption_en: "Daily student absence tracking and early warning list for limit exceeders." },
      { src: "/projects/edubridge/edubridge-10.webp", title_ar: "الدرجات والاختبارات", title_en: "Grades and Exams", caption_ar: "كنترول الدرجات الأكاديمي، قوالب التقييم، واعتماد نتائج منتصف ونهاية الفصل.", caption_en: "Academic grade control, evaluation templates, and term results approval." }
    `;
  content = content.substring(0, targetEnd) + newGalleryItems + content.substring(targetEnd);
}

fs.writeFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', content);
console.log('Update complete');
