const fs = require('fs');
let content = fs.readFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', 'utf-8');
const newEntry = `  {
    slug: "edubridge",
    title_ar: "EduBridge",
    title_en: "EduBridge",
    eyebrow_ar: "نظام إدارة المدارس المتكامل",
    eyebrow_en: "Integrated School Management System",
    category: "business",
    summary_ar: "نظام سحابي متكامل لإدارة المدارس والعمليات التعليمية، يربط بين الإدارة، المعلمين، الطلاب، وأولياء الأمور في بيئة رقمية موحدة لتبسيط المهام اليومية ومتابعة الأداء التعليمي.",
    summary_en: "An integrated cloud-based school management system that connects administration, teachers, students, and parents in a unified digital environment to streamline daily operations and track educational performance.",
    challenge_ar: "تعدد الأنظمة وتشتت البيانات بين الإدارة المدرسية وشؤون الطلاب والمعلمين والمالية يؤدي إلى إهدار الوقت وصعوبة اتخاذ القرارات. المدارس بحاجة لنظام مركزي يربط كافة الأطراف بفعالية.",
    challenge_en: "Scattered data across school administration, student affairs, teachers, and finance leads to wasted time and poor decision-making. Schools need a centralized system that effectively connects all parties.",
    solution_ar: "تم تطوير EduBridge ليكون لوحة تحكم وتشغيل متكاملة للمدارس، تشمل إدارة الفصول، الطلاب، الحضور، الدرجات، والمصروفات، مع واجهات مخصصة تضمن سهولة الوصول للمعلومات لكل دور من أدوار النظام.",
    solution_en: "EduBridge was developed as a comprehensive dashboard and operating system for schools, covering class management, students, attendance, grades, and fees, with tailored interfaces ensuring easy access to information for every role.",
    highlights_ar: [
      "لوحة تحكم إدارية شاملة",
      "إدارة شؤون الطلاب والمعلمين",
      "متابعة الحضور والانصراف والدرجات",
      "إدارة الجداول الدراسية والامتحانات",
      "نظام تواصل بين الإدارة وأولياء الأمور"
    ],
    highlights_en: [
      "Comprehensive admin dashboard",
      "Student and teacher affairs management",
      "Attendance and grading tracking",
      "Class schedules and exam management",
      "Communication system between admin and parents"
    ],
    technologies: ["Web Dashboard", "Cloud Platform", "Role-Based Access", "Reporting"],
    accent: "sky",
    visual: "education",
    coverImage: "/projects/edubridge/edubridge-1.webp",
    galleryTitle_ar: "واجهات نظام EduBridge",
    galleryTitle_en: "EduBridge System Interfaces",
    galleryIntro_ar: "نظرة على واجهات النظام المختلفة التي تغطي لوحات المعلومات، إعدادات النظام، ومتابعة الأنشطة المدرسية اليومية.",
    galleryIntro_en: "A look at the various system interfaces covering dashboards, system configurations, and daily school activity monitoring.",
    gallery: [
      { src: "/projects/edubridge/edubridge-1.webp", title_ar: "لوحة المعلومات والتقارير", title_en: "Dashboard and Reports", caption_ar: "واجهة تحكم تستعرض إحصائيات عامة للمدرسة ومؤشرات الأداء الأساسية.", caption_en: "A dashboard displaying general school statistics and key performance indicators." },
      { src: "/projects/edubridge/edubridge-2.webp", title_ar: "إدارة الإعدادات والتهيئات", title_en: "Settings and Configuration", caption_ar: "شاشة لضبط إعدادات النظام وتخصيص الصلاحيات وإدارة البيانات الأساسية.", caption_en: "A screen to configure system settings, permissions, and manage core data." },
      { src: "/projects/edubridge/edubridge-3.webp", title_ar: "العمليات اليومية", title_en: "Daily Operations", caption_ar: "متابعة المهام اليومية والأنشطة المدرسية ضمن بيئة عمل منظمة.", caption_en: "Monitoring daily tasks and school activities within an organized workspace." },
      { src: "/projects/edubridge/edubridge-4.webp", title_ar: "إدارة الفصول والشؤون", title_en: "Classes and Affairs", caption_ar: "واجهة مخصصة لإدارة بيانات الفصول والطلاب والمتابعة الأكاديمية.", caption_en: "A dedicated interface for managing class data, students, and academic tracking." },
      { src: "/projects/edubridge/edubridge-5.webp", title_ar: "شؤون الموظفين والمعلمين", title_en: "Staff and Teachers", caption_ar: "نظام لإدارة شؤون المعلمين والموظفين والجداول الزمنية.", caption_en: "A system for managing teacher and staff affairs and schedules." }
    ]
  }
];`;
content = content.replace('];\r\n\r\nexport const COMPANY_INFO', ',\r\n' + newEntry + '\r\n\r\nexport const COMPANY_INFO');
content = content.replace('];\n\nexport const COMPANY_INFO', ',\n' + newEntry + '\n\nexport const COMPANY_INFO');
fs.writeFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', content);
console.log('done');
