export type ServiceIcon = "web" | "mobile" | "dashboard" | "backend" | "systems" | "rescue";

export interface ServiceItem {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  icon: ServiceIcon;
  deliverables_ar: string[];
  deliverables_en: string[];
}

export interface PortfolioItem {
  slug: string;
  title_ar: string;
  title_en: string;
  eyebrow_ar: string;
  eyebrow_en: string;
  category: "business" | "mobile" | "web" | "platform";
  summary_ar: string;
  summary_en: string;
  challenge_ar: string;
  challenge_en: string;
  solution_ar: string;
  solution_en: string;
  highlights_ar: string[];
  highlights_en: string[];
  technologies: string[];
  accent: "cyan" | "violet" | "blue" | "indigo" | "sky" | "amber" | "gold" | "bronze" | "teal";
  visual: "shipping" | "pos" | "education" | "legal" | "cv";
  coverImage?: string;
  website?: string;
  galleryTitle_ar?: string;
  galleryTitle_en?: string;
  galleryIntro_ar?: string;
  galleryIntro_en?: string;
  gallery?: {
    src: string;
    title_ar: string;
    title_en: string;
    caption_ar: string;
    caption_en: string;
  }[];
}

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "web-platforms",
    title_ar: "منصات وتطبيقات الويب",
    title_en: "Web Platforms",
    description_ar: "تصميم وتطوير منصات سحابية ومواقع تفاعلية عالية الأداء، مصممة وفق أحدث المعايير البرمجية لضمان السرعة والتوسع المستقبلي.",
    description_en: "From company websites to SaaS products and operational platforms, we build clear experiences on scalable foundations.",
    icon: "web",
    deliverables_ar: ["مواقع شركات", "منصات SaaS", "بوابات عملاء", "تطبيقات ويب داخلية"],
    deliverables_en: ["Company websites", "SaaS platforms", "Client portals", "Internal web apps"],
  },
  {
    id: "mobile-apps",
    title_ar: "تطبيقات الموبايل",
    title_en: "Mobile Apps",
    description_ar: "تطوير تطبيقات هواتف ذكية (iOS & Android) فائقة السلاسة، متصلة بنظام خلفي متين ومصممة لتوفير تجربة مستخدم استثنائية.",
    description_en: "Practical Flutter apps connected to robust backends and designed around real user workflows.",
    icon: "mobile",
    deliverables_ar: ["Android و iOS", "Flutter", "Offline-first عند الحاجة", "إشعارات وربط APIs"],
    deliverables_en: ["Android & iOS", "Flutter", "Offline-first when needed", "Notifications & APIs"],
  },
  {
    id: "dashboards",
    title_ar: "لوحات التحكم والتشغيل",
    title_en: "Dashboards & Operations",
    description_ar: "لوحات تشغيل وإدارة مركزية تمكنك من متابعة العمليات، الصلاحيات، الحسابات والتقارير عبر واجهات منظمة ودقيقة.",
    description_en: "Operational dashboards for orders, users, accounting, reports and permissions — built around workflows, not just tables.",
    icon: "dashboard",
    deliverables_ar: ["RBAC وصلاحيات", "تقارير وفلاتر", "إجراءات جماعية", "حالات تحميل وخطأ واضحة"],
    deliverables_en: ["RBAC & permissions", "Reports & filters", "Bulk actions", "Clear loading & error states"],
  },
  {
    id: "backend-apis",
    title_ar: "Backend و APIs",
    title_en: "Backend & APIs",
    description_ar: "هندسة وبناء برمجيات خلفية (APIs) متطورة وآمنة تربط التطبيقات والمنصات وتتكامل بسلاسة مع الأنظمة الخارجية.",
    description_en: "Structured, secure APIs that connect web and mobile products with permissions, data and external integrations.",
    icon: "backend",
    deliverables_ar: ["Laravel", "REST APIs", "Authentication", "Queues & integrations"],
    deliverables_en: ["Laravel", "REST APIs", "Authentication", "Queues & integrations"],
  },
  {
    id: "business-systems",
    title_ar: "أنظمة الأعمال المخصصة",
    title_en: "Custom Business Systems",
    description_ar: "أتمتة وحوكمة إجراءات العمل التشغيلية في نظام برمجي موحد يربط المبيعات والمخزون والعمليات الميدانية.",
    description_en: "We turn day-to-day operations into focused software for retail, logistics, education, services and internal teams.",
    icon: "systems",
    deliverables_ar: ["POS ومخزون", "إدارة عمليات", "أنظمة متعددة الأدوار", "تقارير وطباعات"],
    deliverables_en: ["POS & inventory", "Operations management", "Multi-role systems", "Reports & printing"],
  },
  {
    id: "existing-products",
    title_ar: "تطوير وإنقاذ المشاريع القائمة",
    title_en: "Existing Product Rescue",
    description_ar: "فحص وتطوير البرمجيات القائمة، إعادة هيكلة البنية البرمجية، رفع مستويات الأمان والأداء، وتحسين تجربة الاستخدام.",
    description_en: "We review existing products, clean structure, fix defects, integrate APIs and improve UX without unnecessary rewrites.",
    icon: "rescue",
    deliverables_ar: ["Code review", "إصلاح المشاكل", "Refactoring", "Production hardening"],
    deliverables_en: ["Code review", "Bug fixing", "Refactoring", "Production hardening"],
  },
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    slug: "deliver-it",
    title_ar: "Deliver It",
    title_en: "Deliver It",
    eyebrow_ar: "منصة مؤسسية لإدارة الشحن والعمليات اللوجستية",
    eyebrow_en: "Enterprise Logistics & Parcel Delivery Operations Platform",
    category: "business",
    summary_ar: "منصة تشغيل متكاملة لشركات الشحن وإدارة توصيل الطرود B2B/B2C، تغطي دورة حياة الشحنة من طلبات الاستلام لدى التجار والاستلام بالباركود داخل المخزن، مرورًا بالتوزيع الميداني والتسليم الجزئي، وحتى التحصيلات المالية وتسويات التجار وعهد المناديب.",
    summary_en: "An enterprise B2B/B2C logistics operations platform that manages the shipment lifecycle from merchant pickup requests and warehouse barcode intake through field dispatch, partial delivery, COD reconciliation, merchant settlements and driver cash custody.",
    challenge_ar: "عمليات الشحن اليومية تجمع بين التجار والمخازن والمناديب والعملاء والمحاسبة، ومع تعدد حالات الشحنة تصبح الأخطاء التشغيلية والمالية أكثر احتمالًا، خصوصًا في التسليم الجزئي والمرتجعات والتحصيل النقدي واعتماد الحالات الميدانية. المطلوب كان نظامًا يجعل شركة الشحن صاحبة الحالة الرسمية ويجمع التشغيل والمحاسبة والصلاحيات في مسار واحد قابل للمراجعة.",
    challenge_en: "Daily logistics operations span merchants, warehouses, couriers, recipients and accounting teams. With many shipment states, the risk of operational and financial errors grows around partial delivery, returns, cash collection and field updates. The platform needed to keep the logistics company as the authority over official statuses while connecting operations, accounting and permissions in one auditable workflow.",
    solution_ar: "تم تصميم لوحة Deliver It كمركز قيادة تشغيلي يربط إدارة الشحنات بمركز العمليات، المندوبين، التجار، المحادثات، التقارير والمحاسبة. يدعم النظام محرك تسليم جزئي يقسم البوليصة عند استلام بعض العناصر ورفض أخرى، ونظام استلام بالباركود، وطباعة مجمعة للملصقات الحرارية وA4، وتسويات التجار وعهد المناديب وقيود مالية، مع RBAC لأدوار الإدارة والعمليات والمحاسبة والدعم.",
    solution_en: "Deliver It was designed as an operational command center connecting shipment management, operations, drivers, merchants, chat, reporting and accounting. It includes a partial-delivery engine that splits shipments when only part of an order is accepted, warehouse barcode intake, bulk thermal/A4 label printing, merchant settlements, driver COD custody and ledger workflows, all protected by role-based access for management, operations, accounting and support.",
    highlights_ar: [
      "مركز عمليات موحد للاستلام والتأكيد والتوزيع والتحديثات والمرتجعات",
      "محرك تسليم جزئي وتقسيم البوالص مع Retry وReturn Cases",
      "احتساب COD للقطع المستلمة مع الحفاظ على قواعد رسوم الشحن",
      "استلام مخزني بالباركود مع كشف المسح المكرر والدفعات الناقصة",
      "طباعة Bulk للملصقات الحرارية 10×15 وA4 مع CODE128 SVG",
      "إدارة المناديب والتجار والمستخدمين والصلاحيات RBAC",
      "مطابقة عهد المناديب والتحصيلات النقدية وتسويات التجار",
      "دفتر قيود مالية وإغلاق ومراجعة الفترات الشهرية",
      "تقارير تشغيلية ومالية قابلة للتصفية والتصدير",
      "محادثات داخلية تربط الدعم والتشغيل بالتجار"
    ],
    highlights_en: [
      "Unified operations center for pickup, intake, dispatch, field updates and returns",
      "Partial-delivery shipment splitting with retry and return child cases",
      "COD calculation for accepted items while preserving shipping-fee rules",
      "Warehouse barcode intake with duplicate-scan and missing-batch handling",
      "Bulk 10×15 thermal and A4 label printing with a pure CODE128 SVG engine",
      "Drivers, merchants, users and role-based access control",
      "Driver cash custody, COD reconciliation and merchant settlements",
      "Automated ledger workflows and monthly accounting close",
      "Filterable operational and financial reporting with export workflows",
      "Internal chat connecting support, operations and merchants"
    ],
    technologies: ["React 19", "TypeScript", "Vite", "Context API", "Domain Reducers", "Lucide React", "CODE128 SVG", "LocalStorage"],
    accent: "indigo",
    visual: "shipping",
    coverImage: "/projects/deliver-it/deliver-it-cover.webp",
    website: "https://deliver-it-dashboard.vercel.app/",
    galleryTitle_ar: "لوحة Deliver It عبر دورة التشغيل الكاملة",
    galleryTitle_en: "Deliver It across the full logistics workflow",
    galleryIntro_ar: "هذه لقطات فعلية من لوحة التشغيل توضح كيف تم تنظيم المراحل الأساسية داخل شركة الشحن: المتابعة اليومية، مركز العمليات، إدارة الشحنات، المندوبين والتجار، الصلاحيات، المحاسبة، التقارير والمحادثات — ضمن واجهة واحدة متماسكة.",
    galleryIntro_en: "These real dashboard views show how the logistics workflow is organized across daily monitoring, the operations center, shipment management, drivers, merchants, permissions, accounting, reporting and internal chat within one coherent interface.",
    gallery: [
      { src: "/projects/deliver-it/overview.webp", title_ar: "الرئيسية ومؤشرات التشغيل", title_en: "Operations overview", caption_ar: "ملخص لحظي للشحنات وحالات التسليم والتحصيلات والتسويات والمندوبين النشطين مع أحدث الشحنات.", caption_en: "A live operational overview of shipments, delivery states, collections, settlements, active drivers and recent shipments." },
      { src: "/projects/deliver-it/operations-center.webp", title_ar: "مركز العمليات", title_en: "Operations center", caption_ar: "واجهة تشغيلية لتأكيد الاستلام من التجار، توزيع الشحنات، متابعة البوالص واعتماد الحالات قبل انتقالها للمرحلة التالية.", caption_en: "An operational workspace for merchant pickup intake, shipment assignment, airwaybill handling and controlled status approval." },
      { src: "/projects/deliver-it/shipments.webp", title_ar: "إدارة الشحنات", title_en: "Shipment management", caption_ar: "بحث وفلاتر حسب الحالة والمحافظة والمندوب والتاجر مع عرض رقم الشحنة والحالة والدفع والمبلغ والإجراءات المتاحة.", caption_en: "Search and filters by status, governorate, driver and merchant with shipment identifiers, payment state, amounts and actions." },
      { src: "/projects/deliver-it/users-permissions.webp", title_ar: "المستخدمون والصلاحيات", title_en: "Users & permissions", caption_ar: "إدارة المستخدمين والأدوار والصلاحيات التفصيلية مع فصل واضح بين الإدارة والعمليات والمحاسبة والدعم.", caption_en: "Detailed user, role and permission management separating management, operations, accounting and support responsibilities." },
      { src: "/projects/deliver-it/drivers.webp", title_ar: "إدارة المناديب", title_en: "Driver management", caption_ar: "متابعة حالة المندوب والمنطقة والعهدة وتسليمات اليوم والكاش المعلق مع إجراءات الإدارة والتعديل.", caption_en: "Driver status, zones, custody, daily deliveries and pending cash with operational management actions." },
      { src: "/projects/deliver-it/merchants.webp", title_ar: "إدارة التجار", title_en: "Merchant management", caption_ar: "بيانات التجار وأحجام الشحنات وقيم الدوران والتسويات المعلقة وإجمالي التجارة في شاشة واحدة.", caption_en: "Merchant profiles, shipment volumes, turnover, pending settlements and overall merchant activity in one view." },
      { src: "/projects/deliver-it/accounting-close.webp", title_ar: "المحاسبة وتقفيلة الشهر", title_en: "Accounting & monthly close", caption_ar: "مراجعة قيمة أوردرات البزنس والتحصيل COD ومستحقات التجار وصافي الشركة مع قائمة تحقق لإغلاق الفترة.", caption_en: "Monthly reconciliation of order value, COD collections, merchant liabilities and company net position with a close checklist." },
      { src: "/projects/deliver-it/reports.webp", title_ar: "التقارير والإحصائيات", title_en: "Reports & analytics", caption_ar: "تقارير مرنة للمبيعات والبلاد والتشغيل والمناديب والمحافظات مع مؤشرات سريعة وتصدير Excel.", caption_en: "Flexible reporting across sales, regions, operations, drivers and governorates with quick KPIs and Excel export." },
      { src: "/projects/deliver-it/chat.webp", title_ar: "المحادثات", title_en: "Internal chat", caption_ar: "مساحة تواصل داخلية بين فريق التشغيل والتجار لمتابعة الاستفسارات وحالات الشحنات بدون فصلها عن النظام.", caption_en: "Built-in communication between operations teams and merchants so shipment discussions stay inside the operating system." },
      { src: "/projects/deliver-it/shipments-alt.webp", title_ar: "فلاتر وحالات الشحنات", title_en: "Shipment status filtering", caption_ar: "عرض آخر لإدارة الشحنات يبرز حالات مثل في الطريق والمرتجع مع التحكم في الفلاتر وإعادة الضبط والإجراءات السريعة.", caption_en: "A shipment-state view highlighting in-transit and returned cases with filter controls, reset actions and quick row tools." }
    ],
  },
  {
    slug: "tog-pos",
    title_ar: "طوق السحابي (TOG)",
    title_en: "TOG Cloud",
    eyebrow_ar: "نظام محاسبي سحابي ونقاط بيع",
    eyebrow_en: "Cloud Accounting & POS System",
    category: "business",
    summary_ar: "نظام محاسبي سحابي متكامل للمؤسسات الصغيرة والمتوسطة، يجمع نقاط البيع وإدارة المنتجات والمخزون والمعاملات المالية والفوترة الإلكترونية والتقارير في تجربة واحدة يمكن الوصول إليها من الأجهزة الذكية.",
    summary_en: "An integrated cloud accounting system for small and medium businesses, combining point of sale, products, inventory, financial transactions, e-invoicing and reporting in one experience accessible across smart devices.",
    challenge_ar: "إدارة المبيعات والمخزون والفواتير والحسابات من أدوات منفصلة تخلق أخطاء وتكرارًا في العمل وتُصعّب على صاحب النشاط معرفة وضعه المالي والتشغيلي بسرعة، خصوصًا مع الحاجة إلى الفوترة الإلكترونية وضريبة القيمة المضافة والطباعة اليومية.",
    challenge_en: "Running sales, inventory, invoices and accounting across separate tools creates duplicated work and makes it harder for business owners to understand their financial and operational position, especially when e-invoicing, VAT and day-to-day printing are part of the workflow.",
    solution_ar: "تم بناء طوق كمنظومة موحدة تربط نقطة البيع بالمنتجات والمخزون والملخصات والتقارير والفواتير الإلكترونية والطباعة. الواجهة مصممة لتقليل خطوات التشغيل اليومية، مع وصول سحابي ودعم الأجهزة الذكية وخيارات دفع وباقات تناسب أحجام أعمال مختلفة.",
    solution_en: "TOG was shaped as one connected system linking point of sale with products, inventory, summaries, reports, electronic invoices and printing. The experience reduces daily operational steps while supporting cloud access, smart devices and flexible payment and plan options.",
    highlights_ar: ["نقطة بيع سريعة وواضحة", "إدارة المنتجات والمخزون", "فواتير إلكترونية وربط ضريبي", "ملخصات وتقارير يومية", "طباعة الفواتير وربط الطابعات", "دعم ضريبة القيمة المضافة", "أجهزة كاشير محمولة وملحقات POS", "وصول سحابي من الأجهزة الذكية", "خيارات دفع وباقات متعددة بينها باقة مجانية محدودة المدة"],
    highlights_en: ["Fast, focused point of sale", "Product & inventory management", "Electronic invoicing & tax integration", "Daily summaries & reports", "Invoice printing & printer setup", "VAT support", "Mobile POS devices & accessories", "Cloud access across smart devices", "Multiple payment options and plans, including a limited free plan"],
    technologies: ["Flutter", "Cloud Platform", "POS", "E-Invoicing", "ZATCA Integration"],
    accent: "amber",
    visual: "pos",
    coverImage: "/projects/tog/tog-complete-showcase.webp",
    website: "https://tog.sa/",
    galleryTitle_ar: "طوق داخل بيئة العمل",
    galleryTitle_en: "TOG in the real workflow",
    galleryIntro_ar: "بدل عرض Mockups عامة، هذه لقطات فعلية من تجربة طوق توضح نقطة البيع، المنتجات، التقارير، الفوترة والطباعة كأجزاء مترابطة من نفس النظام.",
    galleryIntro_en: "Rather than generic mockups, these product views show TOG across the actual workflow: point of sale, products, reports, invoicing and printing as connected parts of the same system.",
    gallery: [
      { src: "/projects/tog/tog-pos.webp", title_ar: "نقطة البيع", title_en: "Point of Sale", caption_ar: "واجهة بيع موجهة للاستخدام السريع مع المنتجات والتسعير وإتمام الفاتورة.", caption_en: "A checkout-focused interface for products, pricing and completing the sale quickly." },
      { src: "/projects/tog/tog-summary-reports.webp", title_ar: "الملخصات والتقارير", title_en: "Summaries & Reports", caption_ar: "متابعة المبيعات والمقبوضات والمصروفات والمرتجعات بصورة يومية واضحة.", caption_en: "A clear daily view of sales, receipts, expenses and returns." },
      { src: "/projects/tog/tog-electronic-invoices.webp", title_ar: "الفوترة الإلكترونية", title_en: "Electronic Invoicing", caption_ar: "إصدار الفواتير إلكترونيًا ضمن نفس تدفق المبيعات بدون فصل المستخدم عن النظام.", caption_en: "Electronic invoices issued as part of the same sales workflow without moving users to a separate tool." },
      { src: "/projects/tog/tog-printing.webp", title_ar: "الطباعة", title_en: "Printing", caption_ar: "إعداد الطابعات واختبارها والتحكم في سيناريوهات طباعة الفواتير.", caption_en: "Printer setup, testing and control over invoice printing scenarios." },
      { src: "/projects/tog/tog-products.webp", title_ar: "إدارة المنتجات", title_en: "Product Management", caption_ar: "قائمة منتجات قابلة للبحث والمتابعة ضمن إدارة النشاط اليومية.", caption_en: "Searchable product management integrated into everyday business operations." },
      { src: "/projects/tog/tog-services.webp", title_ar: "الخدمات والعمليات", title_en: "Services & Operations", caption_ar: "وصول موحد لنقطة البيع والفروع والملخص والمناوبات والسندات والتقارير.", caption_en: "Unified access to POS, branches, summaries, shifts, vouchers and reports." },
      { src: "/projects/tog/tog-ecosystem.webp", title_ar: "منظومة متعددة الأجهزة", title_en: "Multi-device Ecosystem", caption_ar: "تجربة تمتد بين الموبايل وشاشة التشغيل وأجهزة نقطة البيع في نفس بيئة العمل.", caption_en: "An experience spanning mobile, operations screens and point-of-sale hardware in one environment." },
      { src: "/projects/tog/tog-brand.webp", title_ar: "هوية طوق", title_en: "TOG Identity", caption_ar: "هوية المنتج المرئية المبنية حول اللون الأصفر وطابع نقاط البيع والتجارة.", caption_en: "The product identity built around TOG's yellow retail and point-of-sale visual language." },
      { src: "/projects/tog/tog-sunmi-v2s.webp", title_ar: "نقطة بيع محمولة SUNMI V2s", title_en: "SUNMI V2s Mobile POS", caption_ar: "تشغيل طوق على جهاز كاشير محمول يجمع شاشة نقطة البيع والطباعة والدفع في جهاز واحد مناسب للعمل الميداني ونقاط البيع السريعة.", caption_en: "TOG running on a handheld SUNMI V2s terminal that combines the POS interface, printing and payment-ready hardware in one mobile device." },
      { src: "/projects/tog/tog-accounting-ecosystem-poster.webp", title_ar: "منظومة طوق المحاسبية", title_en: "TOG Accounting Ecosystem", caption_ar: "عرض متكامل للبرنامج مع الشاشات والأجهزة والطابعات والباركود والملحقات التي تخدم نقاط البيع والمخزون والمحاسبة.", caption_en: "A complete view of the software alongside screens, printers, barcode devices and accessories used across POS, inventory and accounting workflows." },
      { src: "/projects/tog/tog-zatca-integration.webp", title_ar: "الربط مع هيئة الزكاة والضريبة والجمارك", title_en: "ZATCA Integration", caption_ar: "تكامل الفوترة مع هيئة الزكاة والضريبة والجمارك لتسهيل إرسال الفواتير ودعم الامتثال داخل دورة البيع.", caption_en: "E-invoicing integration with the Zakat, Tax and Customs Authority to simplify invoice submission and support compliance within the sales flow." },
      { src: "/projects/tog/tog-mobile-cashier.webp", title_ar: "كاشير متنقل", title_en: "Mobile Cashier", caption_ar: "تجربة كاشير محمولة للمطاعم والكافيهات والتموينات والمتاجر والمندوبين مع طباعة فورية وإدارة المبيعات والمخزون.", caption_en: "A mobile cashier experience for restaurants, cafés, retail and field teams with instant receipt printing plus sales and inventory operations." },
      { src: "/projects/tog/tog-complete-showcase.webp", title_ar: "طوق كنظام تشغيل متكامل", title_en: "TOG Complete Showcase", caption_ar: "تجميع بصري يوضح البرنامج، الكاشير المحمول، التكامل الضريبي، الأجهزة والملحقات كمنظومة واحدة مترابطة.", caption_en: "A portfolio overview presenting the software, mobile cashier, tax integration, devices and accessories as one connected operating system." }
    ],
  },
  {
    slug: "gear",
    title_ar: "Gear",
    title_en: "Gear",
    eyebrow_ar: "منصة نقل وطلب رحلات متعددة الخدمات",
    eyebrow_en: "Multi-service Transportation Platform",
    category: "platform",
    summary_ar: "منصة نقل تجمع تطبيق الراكب وتطبيق الكابتن في تجربة واحدة، وتغطي الحجز الفوري، الرحلات داخل المدينة وخارجها، التأجير بالساعة، التوصيل، متابعة الرحلة، الأرباح والمحفظة والتقييمات.",
    summary_en: "A transportation platform combining the rider app and the captain app in one experience, covering instant booking, in-city and outstation trips, hourly rental, delivery, trip tracking, earnings, wallet flows and ratings.",
    challenge_ar: "تطبيقات النقل لا تعتمد فقط على الخريطة؛ بل على تدفق متكامل يربط البحث عن الرحلة، التسعير، اختيار نوع الخدمة، إدارة الطلبات، سجل الرحلات، المحفظة، التقييمات وتجربة السائق والراكب بشكل متناسق وسهل الاستخدام.",
    challenge_en: "Mobility products are not just about maps. They depend on a coherent flow connecting trip search, pricing, service types, order handling, trip history, wallet flows, ratings and a smooth experience for both riders and captains.",
    solution_ar: "تم تقديم Gear كمنظومة تشغيل واضحة: تطبيق للراكب يركز على سهولة الحجز واختيار الخدمة والتسعير الشفاف ومتابعة المسار، وتطبيق للكابتن يركز على استقبال الطلبات وإدارة الرحلات والأرباح والمحفظة والحساب الشخصي، مع دعم أنواع متعددة من الرحلات والخدمات.",
    solution_en: "Gear was presented as a focused operating system for mobility: a rider app built around fast booking, service selection, transparent pricing and route tracking, alongside a captain app centered on accepting requests, managing trips, earnings, wallet activity and profile controls, with support for multiple trip types and services.",
    highlights_ar: ["تطبيق راكب وتطبيق كابتن", "رحلات داخل المدينة وخارجها", "تأجير بالساعة وخدمة التوصيل", "خرائط وتتبع مباشر للمسار", "تقدير تكلفة الرحلة قبل التأكيد", "سجل الرحلات والتقييمات", "الأرباح والمحفظة للسائق", "إشعارات وتجربة تشغيل يومية واضحة"],
    highlights_en: ["Rider app and captain app", "In-city and outstation trips", "Hourly rental and delivery service", "Maps and live route tracking", "Fare preview before confirmation", "Trip history and ratings", "Captain earnings and wallet", "Notifications and clear daily operations"],
    technologies: ["Flutter", "Maps & Geolocation", "Trip Management", "Wallet & Ratings"],
    accent: "blue",
    visual: "shipping",
    coverImage: "/projects/gear/gear-cover.webp",
    galleryTitle_ar: "Gear من منظور الراكب والكابتن",
    galleryTitle_en: "Gear across rider and captain workflows",
    galleryIntro_ar: "هذه لقطات حقيقية من المنتج توضح كيف تم التعامل مع رحلات الراكب وعمليات الكابتن داخل نفس المنصة، من الحجز والخريطة واختيار نوع الرحلة حتى السجل والأرباح والمحفظة.",
    galleryIntro_en: "These product views show how the platform handles both rider journeys and captain operations in one system, from booking, maps and trip-type selection to history, earnings and wallet management.",
    gallery: [
      { src: "/projects/gear/rider-home.webp", title_ar: "واجهة الراكب الرئيسية", title_en: "Rider home", caption_ar: "خريطة البداية مع أنواع الخدمات المتاحة والبحث السريع عن سائق.", caption_en: "The rider home map with available services and quick driver search." },
      { src: "/projects/gear/rider-pricing.webp", title_ar: "اختيار المركبة والتسعير", title_en: "Vehicle selection & pricing", caption_ar: "عرض الخيارات المختلفة للمركبات مع التكلفة التقديرية قبل تأكيد الطلب.", caption_en: "Different vehicle options with upfront estimated pricing before confirming the trip." },
      { src: "/projects/gear/rider-outstation.webp", title_ar: "الرحلات الخارجية", title_en: "Outstation booking", caption_ar: "رحلات خارج المدينة مع تحديد نوع الرحلة والوقت والتاريخ وعدد الركاب.", caption_en: "Outstation travel with trip type, date, time and passenger count controls." },
      { src: "/projects/gear/rider-delivery.webp", title_ar: "خدمة التوصيل", title_en: "Delivery flow", caption_ar: "إدخال نقاط الاستلام والوصول وإضافة وجهات ضمن تجربة التوصيل.", caption_en: "Pickup and drop-off inputs with additional stops inside the delivery flow." },
      { src: "/projects/gear/rider-rental.webp", title_ar: "التأجير بالساعة", title_en: "Hourly rental", caption_ar: "سيناريو حجز مركبة بالساعة مع تحديد نوع الإيجار والمدة ومعلومات الانطلاق والوصول.", caption_en: "Hourly booking flow with rental type, duration and trip details." },
      { src: "/projects/gear/rider-menu.webp", title_ar: "قائمة الراكب", title_en: "Rider navigation", caption_ar: "تنقل واضح بين الرئيسية والحجوزات والحساب والإشعارات والسياسات داخل التطبيق.", caption_en: "Clear navigation across home, trips, account, notifications and policy pages." },
      { src: "/projects/gear/captain-live-trip.webp", title_ar: "متابعة الرحلة للكابتن", title_en: "Captain live trip view", caption_ar: "تفاصيل الرحلة الجارية مع حالة الاتصال والمسافة والسعر وتفاصيل المشوار.", caption_en: "Live trip details for the captain including connection state, distance, pricing and trip information." },
      { src: "/projects/gear/captain-history.webp", title_ar: "سجل الرحلات", title_en: "Trip history", caption_ar: "قائمة الرحلات المنفذة مع البيانات الأساسية والتكلفة والمسافة وحالة كل رحلة.", caption_en: "A trip log showing completed rides with timing, pricing, distance and status details." },
      { src: "/projects/gear/captain-earnings.webp", title_ar: "الأرباح والملخص", title_en: "Earnings dashboard", caption_ar: "لوحة تبين أرباح اليوم وإجمالي الرحلات وساعات العمل والحجوزات المقترحة.", caption_en: "A daily earnings view showing revenue, trip totals, work duration and suggested bookings." },
      { src: "/projects/gear/captain-wallet.webp", title_ar: "المحفظة والسحب", title_en: "Wallet & withdrawals", caption_ar: "متابعة الرصيد وسجل العمليات وأرباح الرحلات ورسوم الإدارة وسحب الأموال.", caption_en: "Wallet tracking with balances, earnings entries, admin fees and withdrawal actions." },
      { src: "/projects/gear/captain-ratings.webp", title_ar: "التقييمات", title_en: "Ratings", caption_ar: "عرض تقييمات الرحلات السابقة بصورة تساعد الكابتن على متابعة جودة الخدمة.", caption_en: "Ratings from past trips helping captains monitor service quality." },
      { src: "/projects/gear/captain-profile.webp", title_ar: "الملف الشخصي للكابتن", title_en: "Captain profile", caption_ar: "بيانات الحساب والمركبة ومعلومات الكابتن ضمن صفحة ملف واضحة ومباشرة.", caption_en: "Captain account and vehicle details presented in a focused profile view." }
    ],
  },
  {
    slug: "bub-book-your-beauty",
    title_ar: "BUB – Book Your Beauty",
    title_en: "BUB – Book Your Beauty",
    eyebrow_ar: "منصة حجز صالونات وخدمات تجميل",
    eyebrow_en: "Beauty Services Booking Platform",
    category: "mobile",
    summary_ar: "تطبيق ذكي لحجز صالونات التجميل وخدمات العناية الشخصية في عُمان، يجمع اكتشاف المراكز ومقارنة الخدمات والفلترة والحجز والمتابعة والدفع في تجربة واحدة، مع أدوات تشغيل لمقدمي الخدمات.",
    summary_en: "A beauty-services booking app for Oman that brings salon discovery, service comparison, filtering, booking, tracking and payment into one experience, alongside operating tools for service providers.",
    challenge_ar: "الوصول إلى مركز تجميل مناسب غالبًا يتطلب مكالمات ورسائل ومقارنة غير منظمة بين الأسعار والمواعيد والخدمات. وفي الجهة الأخرى يحتاج مقدم الخدمة إلى إدارة الموظفين والخدمات والحجوزات بطريقة واضحة بدون الاعتماد على متابعة يدوية متفرقة.",
    challenge_en: "Finding the right beauty provider often means calls, messages and scattered comparisons across pricing, availability and services. Providers also need a clear way to manage staff, services and bookings without fragmented manual follow-up.",
    solution_ar: "تم تصميم BUB كمنصة تربط العميل بالمركز من أول البحث والفلترة واختيار الخدمة والموعد، ثم إرسال طلب الحجز وانتظار موافقة المركز قبل الدفع. ويكمل ذلك جانب إداري لمقدمي الخدمات لإدارة الموظفين والخدمات والحجوزات من نفس المنظومة.",
    solution_en: "BUB connects customers with providers from search and filtering through service and time selection, booking request, provider approval and then payment. A provider-side management flow complements the customer app with staff, services and booking administration.",
    highlights_ar: ["اكتشاف صالونات ومراكز التجميل", "بحث وفلترة حسب المنطقة والسعر والخدمة والتقييم", "اختيار الخدمة والموعد المناسب", "تأكيد المركز للحجز قبل الدفع", "متابعة حالة الحجوزات", "المفضلة ومقارنة الخيارات", "إدارة الموظفين والخدمات لمقدم الخدمة", "تجربة عربية واضحة وموجهة للموبايل"],
    highlights_en: ["Salon and beauty-center discovery", "Filtering by location, price, service and rating", "Service and appointment selection", "Provider approval before payment", "Booking status tracking", "Favorites and option comparison", "Provider staff and service management", "Arabic-first mobile experience"],
    technologies: ["Mobile App", "Booking Platform", "Service Marketplace", "Payments & Scheduling"],
    accent: "gold",
    visual: "cv",
    coverImage: "/projects/bub/cover.webp",
    galleryTitle_ar: "رحلة الحجز وإدارة الخدمة داخل BUB",
    galleryTitle_en: "Booking and provider operations inside BUB",
    galleryIntro_ar: "اللقطات التالية توضح المنتج من الجهتين: العميل الذي يبحث ويقارن ويحجز، ومقدم الخدمة الذي يدير بياناته وخدماته وحجوزاته.",
    galleryIntro_en: "These product views show both sides of the platform: the customer discovering and booking services, and the provider managing listings, staff and appointments.",
    gallery: [
      { src: "/projects/bub/overview.webp", title_ar: "نظرة شاملة على المنتج", title_en: "Product overview", caption_ar: "عرض يجمع رحلة البحث والحجوزات وإدارة الموظفين والخدمات ضمن هوية BUB.", caption_en: "A combined view of discovery, bookings and provider operations in the BUB visual identity." },
      { src: "/projects/bub/home.webp", title_ar: "الرئيسية واكتشاف الخدمات", title_en: "Home & discovery", caption_ar: "تصنيفات وخدمات مقترحة مع وصول سريع للبحث والحجز والمفضلة.", caption_en: "Categories and featured services with fast access to search, booking and favorites." },
      { src: "/projects/bub/search.webp", title_ar: "البحث", title_en: "Search", caption_ar: "بحث مباشر عن صالون أو مركز تجميل أو خدمة محددة مع اختيار نطاق البحث.", caption_en: "Direct search across salons, beauty centers and specific services with focused search modes." },
      { src: "/projects/bub/results.webp", title_ar: "نتائج البحث والفلاتر", title_en: "Results & filters", caption_ar: "فلترة النتائج ومقارنة المراكز والخدمات للوصول إلى الاختيار الأنسب.", caption_en: "Filtered results help users compare providers and services before choosing." },
      { src: "/projects/bub/service-detail.webp", title_ar: "تفاصيل الخدمة والحجز", title_en: "Service detail & booking", caption_ar: "تفاصيل الخدمة والموقع والحالة والتقييم مع دعوة واضحة لإرسال طلب الحجز.", caption_en: "Service, location, availability and rating details with a clear booking action." },
      { src: "/projects/bub/favorites.webp", title_ar: "المفضلة", title_en: "Favorites", caption_ar: "حفظ الخدمات والمراكز المفضلة للرجوع إليها والمقارنة بينها بسهولة.", caption_en: "Saved providers and services make repeat discovery and comparison easier." },
      { src: "/projects/bub/provider-dashboard.webp", title_ar: "لوحة مقدم الخدمة", title_en: "Provider dashboard", caption_ar: "إدارة المكان والخدمات والموظفين من جانب مقدم الخدمة ضمن نفس المنصة.", caption_en: "Provider-side management for the venue, services and staff inside the same platform." }
    ],
  },
  {
    slug: "zone-services",
    title_ar: "Zone",
    title_en: "Zone",
    eyebrow_ar: "سوق خدمات وحجوزات متعددة المجالات",
    eyebrow_en: "Multi-category Services Marketplace",
    category: "mobile",
    summary_ar: "منصة رقمية تعمل كوسيط بين المستخدمين ومقدمي الخدمات، وتجمع خدمات مثل قاعات الأفراح ومراكز التجميل والصيانة وغيرها في مكان واحد لاكتشاف الخيارات والتواصل معها وحجزها بسهولة.",
    summary_en: "A digital marketplace connecting users with service providers across categories such as wedding venues, beauty centers, maintenance and everyday services, making discovery, contact and booking easier from one place.",
    challenge_ar: "تعدد مقدمي الخدمات واختلاف طرق التواصل والحجز يجعل البحث عن خيار مناسب عملية تستغرق وقتًا، كما يحتاج مقدم الخدمة إلى طريقة موحدة لإدارة خدماته وحجوزاته ومواعيده بدل الاعتماد على أدوات منفصلة.",
    challenge_en: "Scattered providers and inconsistent booking methods make service discovery time-consuming. Providers also need one place to manage their services, bookings and schedules instead of relying on disconnected tools.",
    solution_ar: "تم بناء Zone كطبقة وسيطة منظمة بين الطرفين: المستخدم يستكشف الخدمات ويحجز ويتابع حالته، بينما يحصل مقدم الخدمة على لوحة تحكم لإدارة الخدمات والجداول والمواعيد والحجوزات والتواصل من داخل نفس المنصة.",
    solution_en: "Zone acts as an organized layer between both sides: users discover services, place bookings and follow their status, while providers manage offerings, schedules, appointments and booking operations from the same platform.",
    highlights_ar: ["اكتشاف خدمات من مجالات متعددة", "حجوزات ومتابعة حالة الطلب", "إدارة المواعيد والجداول", "مفضلة للوصول السريع للخدمات", "لوحة تحكم لمقدم الخدمة", "إدارة الخدمات والحجوزات من مكان واحد", "دعم تصنيفات مثل المناسبات والتجميل والصيانة", "تجربة عربية مباشرة على الموبايل"],
    highlights_en: ["Multi-category service discovery", "Bookings and request-status tracking", "Schedule and appointment management", "Favorites for quick access", "Provider control panel", "Services and bookings managed in one place", "Categories spanning events, beauty and maintenance", "Arabic-first mobile UX"],
    technologies: ["Mobile App", "Service Marketplace", "Bookings", "Scheduling"],
    accent: "bronze",
    visual: "cv",
    coverImage: "/projects/zone/cover.webp",
    galleryTitle_ar: "من اكتشاف الخدمة إلى إدارة الحجز",
    galleryTitle_en: "From service discovery to booking operations",
    galleryIntro_ar: "تعرض هذه اللقطات كيف يخدم Zone المستخدم ومقدم الخدمة معًا، من تصفح التصنيفات والحجوزات وحتى ضبط الجداول ولوحة التحكم.",
    galleryIntro_en: "These views show how Zone supports both users and providers, from browsing categories and bookings to schedule configuration and provider controls.",
    gallery: [
      { src: "/projects/zone/category.webp", title_ar: "تصنيفات الخدمات", title_en: "Service categories", caption_ar: "تجميع الخدمات في أقسام واضحة لتسهيل الوصول إلى النوع المطلوب بسرعة.", caption_en: "Services grouped into clear categories so users can reach the right type quickly." },
      { src: "/projects/zone/bookings.webp", title_ar: "حجوزاتي", title_en: "My bookings", caption_ar: "سجل للحجوزات مع حالات القبول والرفض وتفاصيل كل طلب.", caption_en: "A booking log with acceptance and rejection states plus request details." },
      { src: "/projects/zone/schedule.webp", title_ar: "إدارة المواعيد", title_en: "Schedule management", caption_ar: "تعديل جدول المكان أو الخدمة، أيام العطلات، ساعات العمل وساعات الراحة.", caption_en: "Provider scheduling for venue or service hours, days off and break periods." },
      { src: "/projects/zone/more.webp", title_ar: "لوحة تحكم الخدمات", title_en: "Service control panel", caption_ar: "وصول مباشر لإدارة الخدمات والحجوزات والحساب والإعدادات من شاشة واحدة.", caption_en: "Direct access to services, bookings, account and settings from a single control area." },
      { src: "/projects/zone/logo.webp", title_ar: "هوية Zone", title_en: "Zone identity", caption_ar: "الهوية البصرية للتطبيق المبنية حول حرف Z ودرجات البني والبرونزي.", caption_en: "The app identity built around the Z mark and brown/bronze visual language." }
    ],
  },
  {
    slug: "my-fanni",
    title_ar: "ماي فني",
    title_en: "My Fanni",
    eyebrow_ar: "منصة حجز خدمات صيانة وفنيين",
    eyebrow_en: "Maintenance & Technician Booking Platform",
    category: "mobile",
    summary_ar: "منصة تساعد المستخدم على الوصول إلى فنيين لخدمات الصيانة المختلفة، مع حجز الموعد المناسب، متابعة الخدمة، الاطلاع على التقييمات، والتحقق من بيانات الفنيين لتقديم تجربة أكثر ثقة وتنظيمًا.",
    summary_en: "A maintenance-services platform that helps users reach technicians, book suitable appointments, track service progress, review ratings and rely on verified technician information for a more organized and trusted experience.",
    challenge_ar: "طلب خدمات الصيانة غالبًا يبدأ بمشكلة ثقة: من الفني المناسب؟ هل سيصل في الموعد؟ وما مستوى جودة عمله؟ كما أن الاعتماد على المكالمات فقط يجعل الحجز والمتابعة والتقييم غير منظمين.",
    challenge_en: "Home maintenance starts with a trust problem: finding the right technician, knowing when they will arrive and judging service quality. Phone-only coordination also makes booking, tracking and feedback fragmented.",
    solution_ar: "ماي فني يجمع رحلة الخدمة في تطبيق واحد: اختيار نوع الصيانة، تحديد الموعد، التعامل مع فنيين موثقين، متابعة الفني والخدمة، ثم الاستفادة من التقييمات والمراجعات. ويضيف النظام عناصر ثقة مثل الكفالة وخيارات الدفع الآمنة وخدمة العملاء.",
    solution_en: "My Fanni brings the service journey into one app: choose the maintenance category, book a time, work with verified technicians, follow the technician and service, then use ratings and reviews. Trust features such as service warranty, secure payment options and customer support reinforce the flow.",
    highlights_ar: ["حجز المواعيد حسب التاريخ والوقت", "تتبع الفني والخدمة في الوقت الفعلي", "تقييمات ومراجعات قبل الحجز", "توثيق بيانات وخبرات الفنيين", "كفالة على الخدمات", "خيارات دفع آمنة", "خدمات تكييف وسباكة وكهرباء وصيانة عامة", "خدمة عملاء ودعم داخل رحلة الخدمة"],
    highlights_en: ["Date and time appointment booking", "Real-time technician and service tracking", "Ratings and reviews before booking", "Verified technician data and experience", "Service warranty", "Secure payment options", "HVAC, plumbing, electrical and general maintenance", "Customer support throughout the service journey"],
    technologies: ["Mobile App", "Field Services", "Booking", "Real-time Tracking"],
    accent: "teal",
    visual: "cv",
    coverImage: "/projects/my-fanni/cover.webp",
    galleryTitle_ar: "خدمات الصيانة والثقة داخل ماي فني",
    galleryTitle_en: "Maintenance workflows and trust inside My Fanni",
    galleryIntro_ar: "الواجهات توضح تصنيفات الخدمات، ضمانات المنصة، والتنقل داخل تجربة حجز الصيانة، مع هوية تركوازية وصفراء واضحة.",
    galleryIntro_en: "The product views show service categories, platform guarantees and the maintenance-booking experience within a clear teal-and-yellow identity.",
    gallery: [
      { src: "/projects/my-fanni/home-menu.webp", title_ar: "الرئيسية وقائمة التنقل", title_en: "Home & navigation", caption_ar: "الخدمات الأساسية مثل التكييف والسباكة مع وصول مباشر للطلبات والمواعيد وخدمة العملاء.", caption_en: "Core services such as HVAC and plumbing with quick access to requests, appointments and support." },
      { src: "/projects/my-fanni/guarantee.webp", title_ar: "ضمان ماي فني", title_en: "My Fanni guarantee", caption_ar: "شرح عناصر الثقة مثل الفنيين المعتمدين، كفالة الخدمات، الدفع الآمن وخدمة العملاء.", caption_en: "Trust-building information covering verified technicians, service warranty, secure payments and support." },
      { src: "/projects/my-fanni/hvac.webp", title_ar: "خدمات التكييف والتهوية", title_en: "HVAC services", caption_ar: "تقسيم واضح لخدمات التكييف المركزي والسبليت والتهوية وعقود الصيانة السنوية.", caption_en: "A clear breakdown of central AC, split units, ventilation and annual maintenance contracts." },
      { src: "/projects/my-fanni/brand.webp", title_ar: "هوية ماي فني", title_en: "My Fanni identity", caption_ar: "هوية بصرية مباشرة تربط شخصية الفني بألوان الأصفر والأسود لخدمات الصيانة.", caption_en: "A direct visual identity connecting the technician character with yellow and black maintenance branding." }
    ],
  },
  
    {
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
  },
{
    slug: "medskai",
    title_ar: "MedSkAi",
    title_en: "MedSkAi",
    eyebrow_ar: "منصة تعليمية ومجتمع مهني للعلوم الطبية والصحية التطبيقية",
    eyebrow_en: "Digital Learning & Career Platform for Applied Medical & Health Sciences",
    category: "mobile",
    summary_ar: "منصة رقمية مخصصة لطلاب وخريجي وممارسي العلوم الطبية والصحية التطبيقية في مصر والشرق الأوسط، تجمع بين الدورات التدريبية التخصصية، مجتمعات التخصص المباشرة، شهادات الكفاءة الموثقة، وفرص التوظيف والتدريب العملي.",
    summary_en: "A digital learning and career platform built specifically for Applied Medical and Health Sciences students, graduates, and professionals in Egypt and the MENA region, integrating specialized courses, specialty communities, verified certificates, and career opportunities.",
    challenge_ar: "تنشأ في مجال العلوم الطبية التطبيقية فجوة بين الدراسة النظرية والتطبيق الكلينيكي والميداني في المستشفيات والمعامل. ويواجه الطلاب والممارسون صعوبة في الوصول لمحتوى عملي متخصص، الحصول على شهادات مرتبطة بتقييمات حقيقية، وبناء ملف شخصي يبرز كفاءاتهم لدى المؤسسات الطبية وسوق العمل.",
    challenge_en: "Applied medical and health science professionals face a gap between academic theory and practical clinical/laboratory practice. Students and practitioners struggle to find structured continuing education, earn performance-tied certificates, and showcase verified skills to healthcare employers.",
    solution_ar: "تم تطوير تطبيق MedSkAi لتوفير بيئة تعليمية هاتفية متكاملة تشمل دورات تخصصية يقدمها خبراء وممارسون في 12+ تخصصاً طبياً (مثل الأشعة، التخدير والرعاية المركزة، المختبرات، الأجهزة الطبية)، مع تقييمات واختبارات قياس الكفاءة، وشهادات موثقة، ومجتمعات لمناقشة الحالات الكلينيكية، ومحرك وظائف وتدريب يعتمد عليه أكثر من 1,200 طالب وخريج عبر 17+ جامعة.",
    solution_en: "MedSkAi was developed to deliver a mobile-first learning experience featuring expert-led courses across 12+ medical specialties (Radiology, Respiratory Care, ICU & Anesthesia, Medical Labs, Biomedical Engineering, etc.), competency-based assessment, verified certificates, specialty discussion groups, and a career profile builder trusted by 1,200+ students and graduates across 17+ universities.",
    highlights_ar: [
      "دورات تدريبية عملية في 12+ تخصصاً طبياً وصحياً تطبيقياً",
      "نظام اختبارات وتدريبات عملية مرتبطة بالشهادات الموثقة",
      "مجتمعات تخصصية لمناقشة الحالات الكلينيكية وتبادل الخبرات",
      "بناء ملف شخصي وسيرة ذاتية موثقة للممارسين والطلاب",
      "ربط الخريجين بفرص التوظيف والتدريب والورش العمل (MedSkAi Careers)",
      "مدونة طبية متجددة لمتابعة أحدث التقنيات والتطورات الطبية",
      "دعم تحميل الدروس والتعلم بدون إنترنت (Offline Access)",
      "تجربة تطبيق موبايل متجاوبة وسلسة للأندرويد والأيفون"
    ],
    highlights_en: [
      "Expert-led practical courses across 12+ medical specialties",
      "Competency-based quizzes and performance-verified certificates",
      "Specialty-focused discussion communities for clinical cases",
      "Professional CV and career profile builder for medical pros",
      "Career bridge linking graduates to jobs, internships and workshops",
      "Medical articles and blogs on emerging healthcare technologies",
      "Offline lesson downloading for continuous learning",
      "Native mobile user experience optimized for iOS & Android"
    ],
    technologies: ["Flutter", "REST APIs", "Firebase", "State Management", "PDF Certificates", "Media Streaming"],
    accent: "indigo",
    visual: "education",
    coverImage: "/projects/medskai/cover.webp",
    website: "https://play.google.com/store/apps/details?id=soft.tadrees.ahmed_alazhry",
    galleryTitle_ar: "واجهات تطبيق MedSkAi وتجربة التعلم والتشغيل",
    galleryTitle_en: "MedSkAi App Screens & User Workflow",
    galleryIntro_ar: "لقطات حقيقية من داخل التطبيق تظهر الشاشة الرئيسية وتصنيفات التخصصات الطبية، تصفح الدورات والأسعار، متابعة الكورسات المسجلة والإنجاز، الملف الشخصي وإدارة الإعدادات والشهادات.",
    galleryIntro_en: "Real application screens highlighting medical specialty discovery, course catalog and pricing, learning progress tracking, and professional profile management.",
    gallery: [
      { src: "/projects/medskai/home.webp", title_ar: "الرئيسية واكتشاف التخصصات", title_en: "Home & Specialty Discovery", caption_ar: "الشاشة الرئيسية للتطبيق تتيح اكتشاف التخصصات الطبية المختلفة مثل الأشعة، الصحة العامة، والمهارات الطبية، بالإضافة للدورات الأكثر إقبالاً.", caption_en: "Main home screen featuring medical specialty discovery including Radiology, Public Health, and Soft Skills alongside popular courses." },
      { src: "/projects/medskai/courses.webp", title_ar: "كتالوج الدورات والتفاصيل", title_en: "Course Catalog & Details", caption_ar: "استعراض الدورات المتاحة مع الفلاتر، التخصصات، المحاضرين، التسعير وإمكانية البدء المباشر في الدورة.", caption_en: "Browse available courses with filters, specialties, instructors, pricing and instant enrollment." },
      { src: "/projects/medskai/my-course.webp", title_ar: "متابعة التعلم والدورات المسجلة", title_en: "My Courses & Progress", caption_ar: "متابعة نسبة إنجاز الدورات المسجلة، حالة التقدم، الدروس المكتملة ومدة الاشتراك.", caption_en: "Track enrollment progress, course completion percentages, and subscription validity." },
      { src: "/projects/medskai/profile.webp", title_ar: "الملف الشخصي والإعدادات", title_en: "Profile & Achievements", caption_ar: "إدارة الملف الشخصي، الوصول إلى الشهادات المكتسبة، المشتريات، المجموعات التخصصية والدروس المحملة.", caption_en: "Manage profile settings, access earned certificates, order history, specialty groups, and downloaded lessons." }
    ],
  },
  {
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
    website: "https://edubridge-dashboard-two.vercel.app/grades",
    galleryTitle_ar: "واجهات نظام EduBridge",
    galleryTitle_en: "EduBridge System Interfaces",
    galleryIntro_ar: "نظرة على واجهات النظام المختلفة التي تغطي لوحات المعلومات، إعدادات النظام، ومتابعة الأنشطة المدرسية اليومية.",
    galleryIntro_en: "A look at the various system interfaces covering dashboards, system configurations, and daily school activity monitoring.",
    gallery: [
      { src: "/projects/edubridge/edubridge-1.webp", title_ar: "لوحة المعلومات والتقارير", title_en: "Dashboard and Reports", caption_ar: "واجهة تحكم تستعرض إحصائيات عامة للمدرسة ومؤشرات الأداء الأساسية.", caption_en: "A dashboard displaying general school statistics and key performance indicators." },
      { src: "/projects/edubridge/edubridge-2.webp", title_ar: "إدارة الإعدادات والتهيئات", title_en: "Settings and Configuration", caption_ar: "شاشة لضبط إعدادات النظام وتخصيص الصلاحيات وإدارة البيانات الأساسية.", caption_en: "A screen to configure system settings, permissions, and manage core data." },
      { src: "/projects/edubridge/edubridge-3.webp", title_ar: "العمليات اليومية", title_en: "Daily Operations", caption_ar: "متابعة المهام اليومية والأنشطة المدرسية ضمن بيئة عمل منظمة.", caption_en: "Monitoring daily tasks and school activities within an organized workspace." },
      { src: "/projects/edubridge/edubridge-4.webp", title_ar: "إدارة الفصول والشؤون", title_en: "Classes and Affairs", caption_ar: "واجهة مخصصة لإدارة بيانات الفصول والطلاب والمتابعة الأكاديمية.", caption_en: "A dedicated interface for managing class data, students, and academic tracking." },
      
      { src: "/projects/edubridge/edubridge-5.webp", title_ar: "شؤون الموظفين والمعلمين", title_en: "Staff and Teachers", caption_ar: "نظام لإدارة شؤون المعلمين والموظفين والجداول الزمنية.", caption_en: "A system for managing teacher and staff affairs and schedules." },
      { src: "/projects/edubridge/edubridge-6.webp", title_ar: "الفصول والمواد الدراسية", title_en: "Classes and Subjects", caption_ar: "دليل المقررات والمواد التعليمية والفصول والشعب الدراسية وتوزيعها.", caption_en: "Guide for academic subjects, classes, and their distribution." },
      { src: "/projects/edubridge/edubridge-7.webp", title_ar: "الجداول وحصص الانتظار", title_en: "Schedules and Substitutions", caption_ar: "جداول حصص الفصول الأسبوعية وتكليف معلمي الانتظار لتغطية غياب زملائهم.", caption_en: "Weekly class schedules and assigning substitute teachers." },
      { src: "/projects/edubridge/edubridge-8.webp", title_ar: "السلوك والمواظبة", title_en: "Behavior and Attendance", caption_ar: "الملاحظات السلوكية المرصودة واعتمادها لإشعار ولي الأمر بالتدخل التربوي.", caption_en: "Monitored behavioral notes and approvals for parent notifications." },
      { src: "/projects/edubridge/edubridge-9.webp", title_ar: "الحضور والغياب", title_en: "Attendance and Absence", caption_ar: "رصد غياب الطلاب اليومي وقائمة الإنذار المبكر للمتجاوزين للحد المسموح.", caption_en: "Daily student absence tracking and early warning list for limit exceeders." },
      { src: "/projects/edubridge/edubridge-10.webp", title_ar: "الدرجات والاختبارات", title_en: "Grades and Exams", caption_ar: "كنترول الدرجات الأكاديمي، قوالب التقييم، واعتماد نتائج منتصف ونهاية الفصل.", caption_en: "Academic grade control, evaluation templates, and term results approval." }
]
  }
];

export const COMPANY_INFO = {
  name: "Codely",
  email: "agency.codely@gmail.com",
  tagline: "WE BUILD. YOU GROW.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "201023817658",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+20 102 381 7658",
};
