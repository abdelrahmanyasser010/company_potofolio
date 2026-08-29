const fs = require('fs');

let c = fs.readFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', 'utf-8');

// 1. Delete CV Generator
// Match from: { slug: "cv-generator" ... up to the next { slug: "..."
c = c.replace(/\{\s*slug:\s*"cv-generator"[\s\S]*?(?=\{\s*slug:\s*")/g, '');

// Clean up trailing comma before the next { if it exists
c = c.replace(/,\s*(?=\{\s*slug:\s*"medskai")/g, '');

// 2. Add website to edubridge
// Find edubridge object that has coverImage
c = c.replace(/coverImage:\s*"\/projects\/edubridge\/edubridge-1.webp",/g, 'coverImage: "/projects/edubridge/edubridge-1.webp",\n    website: "https://edubridge-dashboard-two.vercel.app/grades",');

// 3. Append to gallery array of edubridge
const galleryStr = `
      { src: "/projects/edubridge/edubridge-5.webp", title_ar: "شؤون الموظفين والمعلمين", title_en: "Staff and Teachers", caption_ar: "نظام لإدارة شؤون المعلمين والموظفين والجداول الزمنية.", caption_en: "A system for managing teacher and staff affairs and schedules." },
      { src: "/projects/edubridge/edubridge-6.webp", title_ar: "الفصول والمواد الدراسية", title_en: "Classes and Subjects", caption_ar: "دليل المقررات والمواد التعليمية والفصول والشعب الدراسية وتوزيعها.", caption_en: "Guide for academic subjects, classes, and their distribution." },
      { src: "/projects/edubridge/edubridge-7.webp", title_ar: "الجداول وحصص الانتظار", title_en: "Schedules and Substitutions", caption_ar: "جداول حصص الفصول الأسبوعية وتكليف معلمي الانتظار لتغطية غياب زملائهم.", caption_en: "Weekly class schedules and assigning substitute teachers." },
      { src: "/projects/edubridge/edubridge-8.webp", title_ar: "السلوك والمواظبة", title_en: "Behavior and Attendance", caption_ar: "الملاحظات السلوكية المرصودة واعتمادها لإشعار ولي الأمر بالتدخل التربوي.", caption_en: "Monitored behavioral notes and approvals for parent notifications." },
      { src: "/projects/edubridge/edubridge-9.webp", title_ar: "الحضور والغياب", title_en: "Attendance and Absence", caption_ar: "رصد غياب الطلاب اليومي وقائمة الإنذار المبكر للمتجاوزين للحد المسموح.", caption_en: "Daily student absence tracking and early warning list for limit exceeders." },
      { src: "/projects/edubridge/edubridge-10.webp", title_ar: "الدرجات والاختبارات", title_en: "Grades and Exams", caption_ar: "كنترول الدرجات الأكاديمي، قوالب التقييم، واعتماد نتائج منتصف ونهاية الفصل.", caption_en: "Academic grade control, evaluation templates, and term results approval." }
`;
// Replace the exact last gallery item to include the new ones
c = c.replace(/\{\s*src:\s*"\/projects\/edubridge\/edubridge-5\.webp"[\s\S]*?\}\s*(?=\])/g, galleryStr);

fs.writeFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', c);
console.log('Update complete');
