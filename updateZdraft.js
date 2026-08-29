const fs = require('fs');

let c = fs.readFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', 'utf-8');

const newZdraft = `  {
    slug: "zdraft",
    title_ar: "Z DRAFT",
    title_en: "Z DRAFT",
    eyebrow_ar: "منصة ذكية للعقود القانونية",
    eyebrow_en: "Smart Legal Contracts Platform",
    category: "platform",
    summary_ar: "منصة ذكية متخصصة في إعداد وصياغة العقود القانونية الذكية ومراجعة العقود القائمة. تتيح للمستخدمين صياغة عقودهم بأنفسهم بخطوات سهلة، أو طلب إعدادها ومراجعتها بواسطة محامين مختصين، مع لوحة تحكم متكاملة لإدارة الطلبات والمدفوعات.",
    summary_en: "A specialized smart platform for drafting legal contracts and reviewing existing ones. It allows users to draft their own contracts through easy steps, or request preparation and review by specialized lawyers, featuring a comprehensive dashboard for request and payment management.",
    challenge_ar: "صياغة العقود القانونية الموثوقة تتطلب دقة وتكلفة عالية وتستغرق وقتاً طويلاً. الحاجة لمنصة تبسط هذه العملية وتوفر قوالب معتمدة أو وصولاً سريعاً لمحامين بتجربة رقمية سهلة.",
    challenge_en: "Drafting reliable legal contracts requires high precision, cost, and time. There is a need for a platform that simplifies this process, providing certified templates and quick access to lawyers through an easy digital experience.",
    solution_ar: "تم تطوير Z DRAFT لتوفير نماذج عقود ذكية (مثل عقود الإيجار والبيع) مع معالج إلكتروني يسهل تعبئتها واعتمادها، بالإضافة لنظام لطلب التدقيق القانوني وإدارة حساب العميل بشكل رقمي بالكامل.",
    solution_en: "Z DRAFT was developed to provide smart contract templates (like rental and sales) with a wizard for easy completion and approval, plus a system for requesting legal audits and managing client accounts entirely digitally.",
    highlights_ar: ["صياغة عقود فورية وتلقائية", "قوالب عقود إيجار وبيع معتمدة", "طلب مراجعة من محام", "إدارة الملف الشخصي والمدفوعات", "محفظة رقمية وتتبع الطلبات", "معالج (Wizard) لبناء العقد خطوة بخطوة"],
    highlights_en: ["Instant automated drafting", "Certified rent and sale contract templates", "Request lawyer review", "Profile & payment management", "Digital wallet & request tracking", "Step-by-step contract wizard"],
    technologies: ["Next.js", "Web Dashboard", "Smart Contracts", "PDF Generation"],
    accent: "indigo",
    visual: "legal",
    coverImage: "/projects/zdraft/zdraft-1.webp",
    website: "https://zdraft.tech/wizard/rental?contractId=11",
    galleryTitle_ar: "واجهات منصة Z DRAFT",
    galleryTitle_en: "Z DRAFT Platform Interfaces",
    galleryIntro_ar: "نظرة على واجهات المنصة لتصفح الخدمات، النماذج، بناء العقود، وتقديم طلبات المراجعة للمحامين.",
    galleryIntro_en: "A look at the platform interfaces for browsing services, templates, building contracts, and submitting review requests to lawyers.",
    gallery: [
      { src: "/projects/zdraft/zdraft-1.webp", title_ar: "الرئيسية والخدمات الذكية", title_en: "Home & Smart Services", caption_ar: "الواجهة الرئيسية للمنصة تعرض خدمات الصياغة الذاتية والمراجعة وإعداد العقود بواسطة محامين.", caption_en: "The main interface displaying self-drafting, reviewing, and lawyer-prepared contract services." },
      { src: "/projects/zdraft/zdraft-2.webp", title_ar: "استكشاف الخدمات", title_en: "Service Discovery", caption_ar: "قائمة الخدمات المتاحة وتسهيل الاختيار حسب احتياج العميل.", caption_en: "List of available services, simplifying selection based on client needs." },
      { src: "/projects/zdraft/zdraft-3.webp", title_ar: "مكتبة العقود والقوالب", title_en: "Contract Templates Library", caption_ar: "استعراض عقود الإيجار والبيع بأنواعها المتعددة لاختيار العقد المناسب للبدء.", caption_en: "Browsing various rental and sale contracts to select the appropriate starting template." },
      { src: "/projects/zdraft/zdraft-4.webp", title_ar: "طلب مراجعة العقد", title_en: "Contract Review Request", caption_ar: "نموذج لرفع العقود القائمة وتحديد تفاصيل المراجعة المطلوبة من المحامي المختص ودفع الرسوم.", caption_en: "A form to upload existing contracts, specify required review details from a lawyer, and pay fees." },
      { src: "/projects/zdraft/zdraft-5.webp", title_ar: "معالج صياغة العقد", title_en: "Contract Drafting Wizard", caption_ar: "تجربة مستخدم تفاعلية (Wizard) لبناء وتعبئة بيانات العقد خطوة بخطوة مع المعاينة المباشرة.", caption_en: "An interactive wizard experience for building and filling contract data step-by-step with live preview." }
    ]
  },`;

// Replace the legal-services-platform object block
c = c.replace(/\{\s*slug:\s*"legal-services-platform"[\s\S]*?(?=\{\s*slug:)/g, newZdraft + '\n');

fs.writeFileSync('D:\\\\android tog\\\\codely\\\\lib\\\\data\\\\initialData.ts', c);
console.log('Update complete');
