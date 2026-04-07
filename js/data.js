/* ============================================================
   PIECE OF ART — Site Data  (js/data.js)
   ─────────────────────────────────────────────────────────────
   SINGLE SOURCE OF TRUTH for all content.

   HOW TO REPLACE PLACEHOLDER DATA:
   ─────────────────────────────────
   Projects  → each project folder: main.jpeg (thumbnail), pdf/ (blueprint JPGs),
               3d/ (3D render JPEGs). In data.js: image → main.jpeg; blueprints[]
               → pdf/*.jpg; visuals[] → 3d/*.jpeg
   Services  → edit en.title / ar.title and description
   UI text   → edit translations.en / translations.ar

   ─────────────────────────────────────────────────────────────
   PROJECT DATA STRUCTURE:
     id          — unique string, used in URL: project-detail.html?id=…
     name*       — project title (inside en: / ar: objects)
     category    — must match a category id below (not 'all')
     location*   — city / country (inside en: / ar: objects)
     year        — 4-digit string
     size        — floor area string, e.g. '680 m²'
     description*— paragraph text (inside en: / ar: objects)
     image       — project thumbnail → Assets/projects/<slug>/main.jpeg
     visuals[]   — 3D gallery → files in Assets/projects/<slug>/3d/
     blueprints[]— plan sheets → files in Assets/projects/<slug>/pdf/
     featured    — boolean; only ONE project should have featured: true
   ============================================================ */

'use strict';

const POA_DATA = {

  /* ── SERVICES ───────────────────────────────────────────── */
  services: [
    {
      id:     'interior-design',
      slug:   'interior-design',
      number: '01',
      icon:   'interior',
      image:  'Assets/images/webp/interior-design.webp',
      en: {
        title:       'Interior Design',
        description: 'Most interiors look finished but never feel right. We solve that. Our team designs environments where every material, proportion, and detail is chosen with purpose — creating spaces that feel effortless to inhabit and impossible to forget.',
        bullets: [
          'Space planning that maximises how every room functions',
          'Curated materials, finishes & furniture selection',
          'Photorealistic 3D visuals before anything is ordered',
          'On-site supervision through to final handover'
        ],
        link:        'Book Interior Consultation'
      },
      ar: {
        title:       'التصميم الداخلي',
        description: 'معظم التصاميم الداخلية تبدو مكتملة ولكنها لا تمنح الشعور الصحيح. نحن نعالج ذلك؛ حيث يصمم فريقنا بيئات تُختار فيها كل مادة وكل تفصيلة بدقة متناهية، لنخلق مساحات مريحة للسكن وعصية على النسيان.',
        bullets: [
          'تخطيط المساحات لتحقيق أقصى استفادة من وظائف الغرف',
          'اختيار منسق للمواد والتشطيبات والأثاث',
          'مرئيات ثلاثية الأبعاد واقعية قبل طلب أي مادة',
          'إشراف ميداني حتى التسليم النهائي'
        ],
        link:        'احجز استشارة تصميم داخلي'
      }
    },
    {
      id:     'architecture',
      slug:   'architecture',
      number: '02',
      icon:   'arch',
      image:  'Assets/images/webp/Architecture.webp',
      en: {
        title:       'Architecture',
        description: 'Architecture is more than what a building looks like — it is how it makes people feel and how it performs over decades. We design across project types: villas, farm estates, office buildings, and hospitality — each resolved with the same rigour.',
        bullets: [
          'Concept design that translates your brief into a clear vision',
          'Full architectural drawings & permit coordination',
          'Consultant coordination — structural, MEP, and beyond',
          'Site visits to ensure the build matches the design exactly'
        ],
        link:        'Discuss Your Vision'
      },
      ar: {
        title:       'التصميم المعماري',
        description: 'العمارة تتجاوز مظهر المبنى؛ فهي تتعلق بكيفية شعور الناس داخله وكفاءة أدائه عبر العقود. نصمم مختلف أنواع المشاريع: الفلل، المزارع، المكاتب، والضيافة — وكل منها يُنفذ بنفس الدقة والاتقان.',
        bullets: [
          'تصميم مفاهيمي يترجم متطلباتك إلى رؤية واضحة',
          'رسومات معمارية كاملة وتنسيق التراخيص',
          'تنسيق الاستشاريين — الإنشائي، الكهروميكانيك، وما وراء ذلك',
          'زيارات موقعية لضمان مطابقة البناء للتصميم تماماً'
        ],
        link:        'ناقش رؤيتك المعمارية'
      }
    },
    {
      id:     'project-management',
      slug:   'project-management',
      number: '03',
      icon:   'management',
      image:  'Assets/images/webp/Project Management.webp',
      en: {
        title:       'Project Management',
        description: 'Construction projects fail when oversight fails. We step in as your dedicated project manager — holding contractors accountable, protecting your budget, and keeping your project moving while you stay informed at every stage.',
        bullets: [
          'A detailed plan so every phase is mapped and on track',
          'Budget management that eliminates costly surprises',
          'Contractor procurement and oversight from start to finish',
          'Clear progress reports so you are never left guessing'
        ],
        link:        'Get a Quote'
      },
      ar: {
        title:       'إدارة المشاريع',
        description: 'تفشل مشاريع البناء عندما يفشل الإشراف. نحن نتدخل كمدير مشروع مخصص لك — نحاسب المقاولين، نحمي ميزانيتك، ونحافظ على سير العمل مع إبقائك على اطلاع دائم في كل مرحلة.',
        bullets: [
          'خطة مفصلة بحيث تكون كل مرحلة محددة وتحت السيطرة',
          'إدارة الميزانية التي تلغي المفاجآت المكلفة',
          'اختيار المقاولين والإشراف عليهم من البداية للنهاية',
          'تقارير تقدم واضحة حتى لا تضطر أبداً للتخمين'
        ],
        link:        'احصل على عرض سعر'
      }
    }
  ],


  /* ── PROCESS ────────────────────────────────────────────── */
  process: [
    {
      id: 'discovery',
      en: { title: 'Discovery', description: 'Understanding your vision and project goals.' },
      ar: { title: 'الاكتشاف', description: 'فهم رؤيتك وأهداف المشروع.' }
    },
    {
      id: 'concept',
      en: { title: 'Concept Design', description: 'Translating ideas into architectural forms.' },
      ar: { title: 'التصميم المفهومي', description: 'ترجمة الأفكار إلى أشكال معمارية.' }
    },
    {
      id: 'development',
      en: { title: 'Development', description: 'Refining details and technical planning.' },
      ar: { title: 'التطوير', description: 'تحسين التفاصيل والتخطيط التقني.' }
    },
    {
      id: 'delivery',
      en: { title: 'Delivery', description: 'Execution oversight and final handover.' },
      ar: { title: 'التسليم', description: 'الإشراف على التنفيذ والتسليم النهائي.' }
    }
  ],


  /* ── STATS ──────────────────────────────────────────────── */
  /* To update: change value, suffix, or label text.          */
  stats: [
    {
      value:  20,
      suffix: '+',
      icon:   'years',
      en: { label: 'Years of Experience' },
      ar: { label: 'سنوات من الخبرة'    }
    },
    {
      value:  85,
      suffix: '+',
      icon:   'projects',
      en: { label: 'Projects Completed'  },
      ar: { label: 'مشروع منجز'          }
    },
    {
      value:  60,
      suffix: '+',
      icon:   'clients',
      en: { label: 'Clients Served'      },
      ar: { label: 'عميل راضٍ'           }
    }
  ],


  /* ── CATEGORIES ─────────────────────────────────────────── */
  /* Used on Projects page for filtering. Do NOT change the id values. */
  categories: [
    { id: 'all',            en: 'All',             ar: 'الكل'    },
    { id: 'villas',         en: 'Private Villas',  ar: 'فلل خاصة' },
    { id: 'farms',          en: 'Farm Estates',    ar: 'مزارع'   },
    { id: 'restaurants',    en: 'Restaurants',     ar: 'مطاعم'   },
    { id: 'hospitality',    en: 'Hospitality',     ar: 'ضيافة'   },
    { id: 'administrative', en: 'Administrative',  ar: 'إداري'   }
  ],


  /* ── PROJECTS ───────────────────────────────────────────── */
  projects: [
    {
      id:       'palmira',
      slug:     'palmira',
      category: 'hospitality',
      year:     '2025',
      size:     '10100 m²',
      featured: true,
      image:    'Assets/projects/palmira/main.jpeg',
      visuals: [
        'Assets/projects/palmira/3d/1.jpeg',
        'Assets/projects/palmira/3d/2.jpeg',
        'Assets/projects/palmira/3d/3.jpeg',
        'Assets/projects/palmira/3d/4.jpeg',
        'Assets/projects/palmira/3d/5.jpeg',
        'Assets/projects/palmira/3d/6.jpeg',
        'Assets/projects/palmira/3d/7.jpeg',
        'Assets/projects/palmira/3d/8.jpeg',
        'Assets/projects/palmira/3d/9.jpeg',
        'Assets/projects/palmira/3d/10.jpeg'
      ],
      blueprints: [
        'Assets/projects/palmira/pdf/1.jpg'
      ],
      en: {
        name:        'Palmira',
        location:    'Airport Road, Amman',
        description: 'A design that rejects excess and celebrates simplicity. In Palmira, spaces are shaped using raw, natural materials — clay that preserves coolness, and wood that brings visual warmth. The project brings together contrasting experiences; from the strength of the stables and the speed of horses, to the calm of the spa and the depth of the main pool. Palmira is not just a resort — it is a conscious return to nature.',
        philosophy:  'A design that rejects excess and celebrates simplicity through natural materials and contrasting spatial experiences.'
      },
      ar: {
        name:        'بالميرا',
        location:    'طريق المطار، عمّان',
        description: 'تصميم يرفض التكلف ويحتفي بالبساطة. في بالميرا، قمنا بصياغة الفراغات من خامات فطرية؛ طينٌ يحفظ برودة المكان، وخشبٌ يمنح الدفء البصري. مشروع يجمع تناقضات الجمال؛ من هيبة الاسطبلات وسرعة الخيل، إلى سكون السبا وعمق المسبح الكبير. بالميرا ليست مجرد منتجع، هي عودة واعية للطبيعة.',
        philosophy:  'تصميم يحتفي بالبساطة من خلال مواد طبيعية وتجارب مكانية متناقضة.'
      }
    },
    {
      id:       'omar-badran',
      slug:     'omar-badran',
      category: 'villas',
      year:     '2025',
      size:     '750 m²',
      featured: false,
      image:    'Assets/projects/omar-badran/main.jpg',
      visuals: [
        'Assets/projects/omar-badran/3d/1.jpg',
        'Assets/projects/omar-badran/3d/2.jpg',
        'Assets/projects/omar-badran/3d/3.jpg',
        'Assets/projects/omar-badran/3d/4.jpg',
        'Assets/projects/omar-badran/3d/5.jpg',
        'Assets/projects/omar-badran/3d/6.jpg',
        'Assets/projects/omar-badran/3d/7.jpg',
        'Assets/projects/omar-badran/3d/8.jpg',
        'Assets/projects/omar-badran/3d/9.jpg',
        'Assets/projects/omar-badran/3d/10.jpg',
        'Assets/projects/omar-badran/3d/11.jpg',
        'Assets/projects/omar-badran/3d/12.jpg'
      ],
      blueprints: [
        'Assets/projects/omar-badran/pdf/1.jpg'
      ],
      en: {
        name:        'Omar Badran Residence',
        location:    '',
        description: 'Balancing the openness of modern living with the privacy of a home, this project offers a contemporary definition of intelligent living. The design is based on an open-plan layout that seamlessly connects living spaces, while maintaining clearly defined zoning that subtly separates formal guest areas from everyday family use. The entire upper floor is dedicated to bedrooms, ensuring maximum privacy and tranquillity, all within a simple and refined interior language.',
        philosophy:  'A contemporary approach to residential design that balances openness, zoning, and privacy.'
      },
      ar: {
        name:        'عمر بدران',
        location:    '',
        description: 'بين رحابة الفضاء المفتوح وخصوصية المسكن، يأتي هذا المشروع ليقدم تعريفاً معاصراً للعيش الذكي. ارتكزت فكرة التصميم على خلق مخطط أرضي مفتوح (Open Plan) يجمع بين مناطق الجلوس بانسجام هندسي، مع الحفاظ على "زونات" (Zoning) واضحة ومدروسة تفصل بفطنة بين مساحات استقبال الضيوف الرسمية وأماكن الاستخدام اليومي للعائلة. تم تخصيص الطابق العلوي بالكامل لغرف النوم، لتوفير أقصى درجات السكينة والخصوصية التامة، في تناغم مع لغة التصميم الداخلي البسيطة والأنيقة.',
        philosophy:  'نهج معاصر للتصميم السكني يوازن بين الانفتاح والتنظيم والخصوصية.'
      }
    },
    {
      id:       'ksa',
      slug:     'ksa',
      category: 'restaurants',
      year:     '',
      size:     '',
      featured: false,
      image:    'Assets/projects/ksa/main.jpeg',
      visuals: [
        'Assets/projects/ksa/3d/1.jpeg',
        'Assets/projects/ksa/3d/2.jpeg',
        'Assets/projects/ksa/3d/3.jpeg'
      ],
      blueprints: [
        'Assets/projects/ksa/pdf/1.jpg'
      ],
      en: {
        name:        'KSA',
        location:    'KSA',
        description: 'Further project information will be added when available.',
        philosophy:  'Not specified yet.'
      },
      ar: {
        name:        'KSA',
        location:    'KSA',
        description: 'سيتم إضافة تفاصيل المشروع لاحقاً.',
        philosophy:  'غير محدد حالياً.'
      }
    },
    {
      id:       'najla-weibdeh',
      slug:     'najla-weibdeh',
      category: 'restaurants',
      year:     '2025',
      size:     '80 m²',
      featured: false,
      image:    'Assets/projects/najla-weibdeh/main.jpg',
      visuals: [
        'Assets/projects/najla-weibdeh/3d/1.jpg',
        'Assets/projects/najla-weibdeh/3d/2.jpg',
        'Assets/projects/najla-weibdeh/3d/3.jpg',
        'Assets/projects/najla-weibdeh/3d/4.jpg',
        'Assets/projects/najla-weibdeh/3d/5.jpg',
        'Assets/projects/najla-weibdeh/3d/6.jpg',
        'Assets/projects/najla-weibdeh/3d/7.jpg',
        'Assets/projects/najla-weibdeh/3d/8.jpg',
        'Assets/projects/najla-weibdeh/3d/9.jpg',
        'Assets/projects/najla-weibdeh/3d/10.jpg',
        'Assets/projects/najla-weibdeh/3d/11.jpg',
        'Assets/projects/najla-weibdeh/3d/12.jpg',
        'Assets/projects/najla-weibdeh/3d/13.jpg',
        'Assets/projects/najla-weibdeh/3d/14.jpg',
        'Assets/projects/najla-weibdeh/3d/15.jpg',
        'Assets/projects/najla-weibdeh/3d/16.jpg',
        'Assets/projects/najla-weibdeh/3d/17.jpg',
        'Assets/projects/najla-weibdeh/3d/18.jpg',
        'Assets/projects/najla-weibdeh/3d/19.jpg'
      ],
      blueprints: [
        'Assets/projects/najla-weibdeh/pdf/1.jpg',
        'Assets/projects/najla-weibdeh/pdf/2.jpg',
        'Assets/projects/najla-weibdeh/pdf/3.jpg'
      ],
      en: {
        name:        'Najla',
        location:    'Jabal Al Weibdeh, Amman',
        description: 'Set within the historic fabric of Jabal Al Weibdeh, this project reinterprets an interior space through a refined balance of heritage and contemporary design. The original identity is preserved while introducing modern elements such as patterned traditional tiles and clean granite finishes. The space creates a visual harmony between minimalist wooden furniture and classic curved seating, enhanced by natural light through expansive glass facades — forming a seamless connection between Weibdeh\'s architectural legacy and a contemporary dining experience.',
        philosophy:  'A refined balance between heritage preservation and contemporary spatial design.'
      },
      ar: {
        name:        'نجلاء',
        location:    'جبل الويبدة، عمّان',
        description: 'بين أزقة جبل الويبدة العريقة وحداثة القرن العشرين، يأتي هذا المشروع ليعيد إحياء مساحة داخلية بلمسة تراثية ومعاصرة. تم الحفاظ على هوية المكان التراثية ودمجها بعناصر تصميمية حديثة، مثل بلاط الأرضية التراثي الملون والجرانيت المودرن. يبرز التصميم تناغماً أنيقاً بين الأثاث الخشبي البسيط (Minimalist) والكراسي الكلاسيكية المنحنية، مع توظيف ذكي للإضاءة الطبيعية من خلال الواجهات الزجاجية الواسعة، ليجسد المكان التناغم المثالي بين الإرث المعماري للويبدة والتجربة العصرية.',
        philosophy:  'تصميم يوازن بين الحفاظ على الهوية التراثية وإدخال عناصر معاصرة بشكل متناغم.'
      }
    },
    {
      id:       'reflection-office',
      slug:     'reflection-office',
      category: 'administrative',
      year:     '2025',
      size:     '280 m²',
      featured: false,
      image:    'Assets/projects/reflection-office/main.jpeg',
      visuals: [
        'Assets/projects/reflection-office/3d/1.jpeg',
        'Assets/projects/reflection-office/3d/2.jpeg',
        'Assets/projects/reflection-office/3d/3.jpeg',
        'Assets/projects/reflection-office/3d/4.jpeg',
        'Assets/projects/reflection-office/3d/5.jpeg',
        'Assets/projects/reflection-office/3d/6.jpeg',
        'Assets/projects/reflection-office/3d/7.jpeg',
        'Assets/projects/reflection-office/3d/8.jpeg',
        'Assets/projects/reflection-office/3d/9.jpeg',
        'Assets/projects/reflection-office/3d/10.jpeg',
        'Assets/projects/reflection-office/3d/11.jpeg',
        'Assets/projects/reflection-office/3d/12.jpeg',
        'Assets/projects/reflection-office/3d/13.jpeg'
      ],
      blueprints: [
        'Assets/projects/reflection-office/pdf/1.jpg'
      ],
      en: {
        name:        'Reflection Company',
        location:    '8th Circle, Amman',
        description: 'The project is built around the concept of "flexible transparency," adopting an open office plan to enhance communication and efficiency. Private offices and meeting rooms are integrated using glass partitions, creating a precise balance between privacy and visual connectivity. This approach introduces a sense of openness and modernity while allowing natural light to flow throughout the entire workspace.',
        philosophy:  'A workspace design that balances openness, transparency, and functional privacy.'
      },
      ar: {
        name:        'شركة الانعكاس',
        location:    'الدوار الثامن، عمّان',
        description: 'يرتكز المشروع على مفهوم "الشفافية المرنة"، حيث تم اعتماد مخطط المساحات المفتوحة (Open Office Plan) لتعزيز التواصل وسرعة الإنجاز. تم دمج المكاتب الخاصة وقاعات الاجتماعات باستخدام قواطع الزجاج (السيكوريت) لخلق توازن دقيق بين الخصوصية والاتصال البصري، مما يمنح المكان شعوراً بالاتساع والحداثة ويسمح بتدفق الإضاءة الطبيعية لجميع أرجاء المكتب.',
        philosophy:  'تصميم يعتمد على تحقيق التوازن بين الشفافية والانفتاح مع الحفاظ على الخصوصية الوظيفية.'
      }
    },
    {
      id:       'sukhtyan',
      slug:     'sukhtyan',
      category: 'hospitality',
      year:     '2025',
      size:     '180 m²',
      featured: false,
      image:    'Assets/projects/sukhtyan/main.jpg',
      visuals: [
        'Assets/projects/sukhtyan/3d/1.jpg',
        'Assets/projects/sukhtyan/3d/2.jpg',
        'Assets/projects/sukhtyan/3d/3.jpg',
        'Assets/projects/sukhtyan/3d/4.jpg',
        'Assets/projects/sukhtyan/3d/5.jpg',
        'Assets/projects/sukhtyan/3d/6.jpg'
      ],
      blueprints: [
        'Assets/projects/sukhtyan/pdf/1.jpg'
      ],
      en: {
        name:        'Sukhtian Chalet',
        location:    'Tala Bay, Aqaba',
        description: 'The objective was not simply to design an interior, but to redefine the relationship between the chalet and its surrounding environment. Through a thoughtful redistribution of spaces, the design creates an interior that reflects the calmness and fluidity of the sea. The new layout breaks away from conventional spatial constraints, forming an open and luminous environment where high functionality meets architectural elegance inspired by the charm of Tala Bay.',
        philosophy:  'A spatial approach that connects interior living with the surrounding coastal environment.'
      },
      ar: {
        name:        'سختيان',
        location:    'تالا باي، العقبة',
        description: 'لم يكن الهدف مجرد تصميم داخلي، بل إعادة صياغة العلاقة بين الشاليه وبيئته المحيطة. من خلال إعادة توزيع الفراغات بذكاء، نجحنا في خلق بيئة داخلية تحاكي هدوء البحر وانسيابيته. التصميم الجديد يكسر القيود التقليدية للمساحة ليخلق فضاءً واسعاً ومشرقاً، حيث يلتقي الأداء الوظيفي العالي بالجمال المعماري الذي يفرضه سحر "تالا بيه".',
        philosophy:  'تصميم يربط بين المساحة الداخلية والبيئة الساحلية المحيطة بشكل متناغم.'
      }
    },
    {
      id:       'qawar-residence',
      slug:     'qawar-residence',
      category: 'villas',
      year:     '',
      size:     '600 m²',
      featured: false,
      image:    'Assets/projects/qawar-residence/main.jpg',
      visuals: [
        'Assets/projects/qawar-residence/3d/1.jpg',
        'Assets/projects/qawar-residence/3d/2.jpg',
        'Assets/projects/qawar-residence/3d/3.jpg',
        'Assets/projects/qawar-residence/3d/4.jpg',
        'Assets/projects/qawar-residence/3d/5.jpg',
        'Assets/projects/qawar-residence/3d/6.jpg',
        'Assets/projects/qawar-residence/3d/7.jpg',
        'Assets/projects/qawar-residence/3d/8.jpg',
        'Assets/projects/qawar-residence/3d/9.jpg',
        'Assets/projects/qawar-residence/3d/10.jpg',
        'Assets/projects/qawar-residence/3d/11.jpg'
      ],
      blueprints: [],
      en: {
        name:        'Qawar Residence',
        location:    'Um Uthaina, Amman',
        description: 'This project redefines residential spaces through a comprehensive architectural vision that integrates luxury with functionality. The external facades were redesigned to introduce expansive terraces and panoramic balconies, extending the living experience outward and enhancing spatial openness. Beyond the exterior, the project involved a full re-planning of interior spaces to improve flow and maximize usable area, transforming the building into a contemporary residential landmark that meets the expectations of modern, high-end living.',
        philosophy:  'A residential transformation focused on merging spatial efficiency with architectural elegance.'
      },
      ar: {
        name:        'منزل قعوار',
        location:    'أم أذينة، عمّان',
        description: 'في هذا المشروع، قمنا بإعادة تعريف المساحات السكنية من خلال رؤية معمارية شاملة ركزت على دمج الرفاهية بالوظيفة. تم إعادة تصميم الواجهات الخارجية لتشمل ترسات واسعة وبلاكين بانورامية تمنح الشقق امتداداً بصرياً ومساحات خارجية حيوية. لم يقتصر العمل على المظهر الخارجي، بل شمل إعادة هيكلة الفراغات الداخلية (Space Re-planning) لضمان انسيابية الحركة واستغلال أقصى مساحة ممكنة، مما حول المبنى إلى أيقونة سكنية عصرية تلبي متطلبات العيش الفاخر.',
        philosophy:  'إعادة تصميم سكني يركز على تحقيق التوازن بين الكفاءة الوظيفية والجمال المعماري.'
      }
    },
    {
      id:       'hania-nashif-villa',
      slug:     'hania-nashif-villa',
      category: 'villas',
      year:     '2023',
      size:     '350 m²',
      featured: false,
      image:    'Assets/projects/hania-nashif-villa/main.jpg',
      visuals: [
        'Assets/projects/hania-nashif-villa/3d/1.jpg',
        'Assets/projects/hania-nashif-villa/3d/2.jpg',
        'Assets/projects/hania-nashif-villa/3d/3.jpg',
        'Assets/projects/hania-nashif-villa/3d/4.jpg',
        'Assets/projects/hania-nashif-villa/3d/5.jpg',
        'Assets/projects/hania-nashif-villa/3d/6.jpg',
        'Assets/projects/hania-nashif-villa/3d/7.jpg',
        'Assets/projects/hania-nashif-villa/3d/8.jpg',
        'Assets/projects/hania-nashif-villa/3d/9.jpg',
        'Assets/projects/hania-nashif-villa/3d/10.jpeg',
        'Assets/projects/hania-nashif-villa/3d/11.jpeg',
        'Assets/projects/hania-nashif-villa/3d/12.jpeg',
        'Assets/projects/hania-nashif-villa/3d/13.jpeg'
      ],
      blueprints: [
        'Assets/projects/hania-nashif-villa/pdf/1.jpg',
        'Assets/projects/hania-nashif-villa/pdf/2.jpg'
      ],
      en: {
        name:        'Hania Al Nashif Villa',
        location:    'Jabal Al Weibdeh, Amman',
        description: 'An architectural story spanning three generations. Originally built in 1948 and expanded in the 1970s, the project reaches its latest chapter in 2023 through a comprehensive restoration and the addition of a contemporary upper floor. The design reflects the passage of time, where modernity meets heritage in a unified composition that preserves the spirit of the original structure while introducing a refined, contemporary layer.',
        philosophy:  'A dialogue between heritage preservation and contemporary architectural expression.'
      },
      ar: {
        name:        'فيلا هانية الناشف',
        location:    'جبل الويبدة، عمّان',
        description: 'حكاية معمارية تمتد عبر ثلاثة أجيال؛ بدأت في عام 1948 كبناء أصيل، وشهدت توسعة في السبعينات، لنتوجها في عام 2023 بمشروع ترميم شامل وإضافة طابق أول عصري. التصميم يعكس تطور الزمن، حيث تلتقي الحداثة مع الإرث في تكوين واحد يروي قصة المكان وتطوره عبر العقود.',
        philosophy:  'حوار معماري يجمع بين الحفاظ على التراث والتعبير المعاصر.'
      }
    },
    {
      id:       'haddad-villas',
      slug:     'haddad-villas',
      category: 'villas',
      year:     '2023',
      size:     '1200 m² per villa (2 villas)',
      featured: false,
      image:    'Assets/projects/haddad-villas/main.jpg',
      visuals: [
        'Assets/projects/haddad-villas/3d/1.jpg',
        'Assets/projects/haddad-villas/3d/2.jpg',
        'Assets/projects/haddad-villas/3d/3.jpg',
        'Assets/projects/haddad-villas/3d/4.jpg',
        'Assets/projects/haddad-villas/3d/5.jpg',
        'Assets/projects/haddad-villas/3d/6.jpg',
        'Assets/projects/haddad-villas/3d/7.jpg',
        'Assets/projects/haddad-villas/3d/8.jpg',
        'Assets/projects/haddad-villas/3d/9.jpg',
        'Assets/projects/haddad-villas/3d/10.jpg',
        'Assets/projects/haddad-villas/3d/11.jpg',
        'Assets/projects/haddad-villas/3d/12.jpg',
        'Assets/projects/haddad-villas/3d/13.jpg'
      ],
      blueprints: [
        'Assets/projects/haddad-villas/pdf/1.jpg',
        'Assets/projects/haddad-villas/pdf/2.jpg',
        'Assets/projects/haddad-villas/pdf/3.jpg',
        'Assets/projects/haddad-villas/pdf/4.jpeg',
        'Assets/projects/haddad-villas/pdf/5.jpeg',
        'Assets/projects/haddad-villas/pdf/6.jpg',
        'Assets/projects/haddad-villas/pdf/7.jpg',
        'Assets/projects/haddad-villas/pdf/8.jpg',
        'Assets/projects/haddad-villas/pdf/9.jpg'
      ],
      en: {
        name:        'Haddad Villas',
        location:    'Fuheis, Jordan',
        description: 'This project stands as a bold architectural statement that challenges convention in Fuheis. The design is defined by the interplay of white geometric masses and expansive glass surfaces, reinforcing a strong sense of visual openness. A careful balance is achieved between privacy in the upper levels and complete transparency on the ground floor, where living spaces seamlessly extend into the pool and surrounding landscape. Clean lines and high-end finishes position the villas as a contemporary expression of modern living that celebrates light and space.',
        philosophy:  'A contemporary architectural approach that balances openness, privacy, and spatial fluidity.'
      },
      ar: {
        name:        'فيلا حداد',
        location:    'الفحيص، الأردن',
        description: 'يبرز هذا المشروع كقطعة فنية تتحدى المألوف في منطقة ماحص، حيث تم الاعتماد على تداخل الكتل الهندسية البيضاء مع مساحات زجاجية واسعة لتعزيز مفهوم الانفتاح البصري. يعكس التصميم توازناً مثالياً بين الخصوصية في الطوابق العليا والشفافية المطلقة في الطابق الأرضي التي تدمج صالات المعيشة بمنطقة المسبح واللاندسكيب الخارجي. الخطوط النظيفة (Clean Lines) والتشطيبات الفاخرة تجعل من هذا المسكن أيقونة للحياة العصرية التي تحتفي بالضوء والمساحة.',
        philosophy:  'تصميم معماري معاصر يوازن بين الانفتاح والخصوصية وانسيابية الفراغات.'
      }
    },
    {
      id:       'shisha-cafe',
      slug:     'shisha-cafe',
      category: 'restaurants',
      year:     '',
      size:     '',
      featured: false,
      image:    'Assets/projects/shisha-cafe/main.jpg',
      visuals: [
        'Assets/projects/shisha-cafe/3d/1.jpg',
        'Assets/projects/shisha-cafe/3d/2.jpg',
        'Assets/projects/shisha-cafe/3d/3.jpg',
        'Assets/projects/shisha-cafe/3d/4.jpg',
        'Assets/projects/shisha-cafe/3d/5.jpg',
        'Assets/projects/shisha-cafe/3d/6.jpg',
        'Assets/projects/shisha-cafe/3d/7.jpg',
        'Assets/projects/shisha-cafe/3d/8.jpg',
        'Assets/projects/shisha-cafe/3d/9.jpg'
      ],
      blueprints: [
        'Assets/projects/shisha-cafe/pdf/1.jpg'
      ],
      en: {
        name:        'Shisha Café',
        location:    'Sweifieh, Amman',
        description: 'The interior design of this café is based on the concept of visual clarity and smart functional zoning. The bar area is clearly distinguished from seating zones through contrasts in form and color, while textured wooden 3D wall panels introduce depth and visual interest. The layout offers a variety of seating options tailored to different user needs, maintaining smooth circulation and a balanced flow of light that highlights the material palette.',
        philosophy:  'A functional interior approach focused on clarity, zoning, and material expression.'
      },
      ar: {
        name:        'شيشة كافيه',
        location:    'الصويفية، عمّان',
        description: 'يرتكز التصميم الداخلي لهذا الكافيه على مفهوم "الوضوح البصري" وتوزيع المناطق الوظيفية بذكاء. تم الفصل بين منطقة الخدمة (Bar Area) ومناطق الجلوس عبر تباين الكتل والألوان، مع استخدام جدران خشبية ذات ملمس ثلاثي الأبعاد (3D Wall Panels) لإضافة عمق فني للمكان. يوفر التصميم خيارات متنوعة للجلوس تتناسب مع احتياجات الزوار، مع الحفاظ على انسيابية الحركة وتدفق الإضاءة التي تبرز تفاصيل المواد المستخدمة.',
        philosophy:  'تصميم داخلي يركز على الوضوح والتنظيم الوظيفي وإبراز الخامات.'
      }
    },
    {
      id:       'daher-heritage-villa',
      slug:     'daher-heritage-villa',
      category: 'villas',
      year:     '2020',
      size:     '250 m²',
      featured: false,
      image:    'Assets/projects/daher-heritage-villa/main.jpeg',
      visuals: [
        'Assets/projects/daher-heritage-villa/3d/1.jpeg',
        'Assets/projects/daher-heritage-villa/3d/2.jpeg',
        'Assets/projects/daher-heritage-villa/3d/3.jpeg'
      ],
      blueprints: [
        'Assets/projects/daher-heritage-villa/pdf/1.jpg'
      ],
      en: {
        name:        'Daher Heritage Villa',
        location:    'Jabal Al Weibdeh, Amman',
        description: 'Bridging the heritage of the 1950s with contemporary architecture, this project in Jabal Al Weibdeh combines traditional stone construction with a modern extension. The ground floor was carefully restored to preserve its original character, while a new upper level introduces a contemporary architectural expression. The result is a balanced composition that respects the site\'s architectural legacy while adapting it to modern living.',
        philosophy:  'A balance between heritage preservation and contemporary architectural intervention.'
      },
      ar: {
        name:        'فيلا ضاهر',
        location:    'جبل الويبدة، عمّان',
        description: 'بين عراقة الخمسينات وحداثة القرن العشرين، يأتي هذا المشروع في جبل الويبدة ليجمع بين جدران حجرية تراثية وتوسعة عصرية. تم ترميم الطابق الأرضي بعناية، وإضافة طابق علوي يجسد الحداثة، في تناغم يحترم الإرث المعماري للمكان.',
        philosophy:  'تصميم يجمع بين الحفاظ على التراث والتحديث المعماري بشكل متوازن.'
      }
    },
    {
      id:       'mahis',
      slug:     'mahis',
      category: 'farms',
      year:     '',
      size:     '',
      featured: false,
      image:    'Assets/projects/mahis/main.jpeg',
      visuals: [
        'Assets/projects/mahis/3d/1.jpg',
        'Assets/projects/mahis/3d/2.jpg',
        'Assets/projects/mahis/3d/3.jpg',
        'Assets/projects/mahis/3d/4.jpeg',
        'Assets/projects/mahis/3d/5.jpeg',
        'Assets/projects/mahis/3d/6.jpeg',
        'Assets/projects/mahis/3d/7.jpeg',
        'Assets/projects/mahis/3d/8.jpeg',
        'Assets/projects/mahis/3d/9.jpeg',
        'Assets/projects/mahis/3d/10.jpeg',
        'Assets/projects/mahis/3d/11.jpeg',
        'Assets/projects/mahis/3d/12.jpeg',
        'Assets/projects/mahis/3d/13.jpeg'
      ],
      blueprints: [
        'Assets/projects/mahis/pdf/1.jpg',
        'Assets/projects/mahis/pdf/2.jpg',
        'Assets/projects/mahis/pdf/3.jpg',
        'Assets/projects/mahis/pdf/4.jpg'
      ],
      en: {
        name:        'Mahis',
        location:    'Mahis, Jordan',
        description: 'Project details will be updated soon.',
        philosophy:  'Not specified yet.'
      },
      ar: {
        name:        'ماحص',
        location:    'ماحص، الأردن',
        description: 'سيتم تحديث تفاصيل المشروع قريباً.',
        philosophy:  'غير محدد حالياً.'
      }
    },
    {
      id:       'qassiyeh-farm',
      slug:     'qassiyeh-farm',
      category: 'farms',
      year:     '2021',
      size:     '700 m² + landscape works',
      featured: false,
      image:    'Assets/projects/qassiyeh-farm/main.jpeg',
      visuals: [
        'Assets/projects/qassiyeh-farm/3d/1.jpeg',
        'Assets/projects/qassiyeh-farm/3d/2.jpeg',
        'Assets/projects/qassiyeh-farm/3d/3.jpeg',
        'Assets/projects/qassiyeh-farm/3d/4.jpeg',
        'Assets/projects/qassiyeh-farm/3d/5.jpeg',
        'Assets/projects/qassiyeh-farm/3d/6.jpeg',
        'Assets/projects/qassiyeh-farm/3d/7.jpeg',
        'Assets/projects/qassiyeh-farm/3d/8.jpeg',
        'Assets/projects/qassiyeh-farm/3d/9.jpeg',
        'Assets/projects/qassiyeh-farm/3d/10.jpeg',
        'Assets/projects/qassiyeh-farm/3d/11.jpeg',
        'Assets/projects/qassiyeh-farm/3d/12.jpeg',
        'Assets/projects/qassiyeh-farm/3d/13.jpeg',
        'Assets/projects/qassiyeh-farm/3d/14.jpeg',
        'Assets/projects/qassiyeh-farm/3d/15.jpeg'
      ],
      blueprints: [
        'Assets/projects/qassiyeh-farm/pdf/1.jpg',
        'Assets/projects/qassiyeh-farm/pdf/2.jpg',
        'Assets/projects/qassiyeh-farm/pdf/3.jpg',
        'Assets/projects/qassiyeh-farm/pdf/4.jpg',
        'Assets/projects/qassiyeh-farm/pdf/5.jpg',
        'Assets/projects/qassiyeh-farm/pdf/6.jpg',
        'Assets/projects/qassiyeh-farm/pdf/7.jpg',
        'Assets/projects/qassiyeh-farm/pdf/8.jpg'
      ],
      en: {
        name:        'Qassiyeh Villa & Farm',
        location:    'Mahis, Jordan',
        description: 'A rural farm project in Mahis that embodies the concept of architecture adapted to the land. The design leverages the varying mountain levels to create a sequence of multi-level spaces, enhancing spatial diversity and experience. Careful orientation studies ensure optimal use of natural light and cross-ventilation, resulting in a comfortable and environmentally responsive living environment.',
        philosophy:  'A design approach rooted in adapting architecture to natural terrain and environmental conditions.'
      },
      ar: {
        name:        'فيلا ومزرعة قسسية',
        location:    'ماحص، الأردن',
        description: 'مشروع مزرعة ريفية في منطقة ماحص، يجسد مفهوم "العمارة المتكيفة مع الأرض". تم توظيف المناسيب الجبلية المختلفة لخلق فراغات معمارية متعددة المستويات، مع دراسة دقيقة للتوجيه (Orientation) لضمان الاستفادة القصوى من الإضاءة الطبيعية والتهوية الداخلية.',
        philosophy:  'تصميم يعتمد على التكيف مع طبيعة الأرض والاستفادة من الظروف البيئية.'
      }
    },
    {
      id:       'aqaba-seaside-villa',
      slug:     'aqaba-seaside-villa',
      category: 'villas',
      year:     '2019',
      size:     '',
      featured: false,
      image:    'Assets/projects/aqaba-seaside-villa/main.jpeg',
      visuals: [
        'Assets/projects/aqaba-seaside-villa/3d/1.jpeg',
        'Assets/projects/aqaba-seaside-villa/3d/2.jpeg',
        'Assets/projects/aqaba-seaside-villa/3d/3.jpeg',
        'Assets/projects/aqaba-seaside-villa/3d/4.jpeg',
        'Assets/projects/aqaba-seaside-villa/3d/5.jpeg',
        'Assets/projects/aqaba-seaside-villa/3d/6.jpeg'
      ],
      blueprints: [
        'Assets/projects/aqaba-seaside-villa/pdf/1.jpeg',
        'Assets/projects/aqaba-seaside-villa/pdf/2.jpg',
        'Assets/projects/aqaba-seaside-villa/pdf/3.jpeg',
        'Assets/projects/aqaba-seaside-villa/pdf/4.jpg',
        'Assets/projects/aqaba-seaside-villa/pdf/5.jpeg'
      ],
      en: {
        name:        'Aqaba Seaside Villa',
        location:    'Aqaba (Tala Bay), Jordan',
        description: 'A fully integrated architectural and interior design project for a beachfront villa in Tala Bay, Aqaba. The design development focused on maximizing sea views while incorporating architectural elements suited to the coastal climate. The project achieves a balance between openness and privacy, with outdoor spaces designed as an extension of the architectural composition, enhancing the overall living experience.',
        philosophy:  'A coastal design approach that integrates architecture with climate, views, and outdoor living.'
      },
      ar: {
        name:        'فيلا على البحر – العقبة',
        location:    'العقبة (تالا باي)، الأردن',
        description: 'مشروع تصميم متكامل (Architectural & Interior Design) لفيلا شاطئية في منطقة تالا بيه - العقبة. تم تطوير المخططات المعمارية والفرش الداخلي وتنسيق المواقع عام 2018، مع التركيز على استغلال الإطلالات البحرية وتوظيف العناصر المعمارية التي تلائم المناخ الساحلي. يبرز المشروع التناغم بين المساحات المفتوحة والخصوصية، مع ساحات خارجية مصممة لتكون جزءاً لا يتجزأ من التكوين المعماري.',
        philosophy:  'تصميم ساحلي يدمج العمارة مع المناخ والإطلالات والمساحات الخارجية.'
      }
    },
    {
      id:       'beit-halima',
      slug:     'beit-halima',
      category: 'restaurants',
      year:     '2023',
      size:     '500 m²',
      featured: false,
      image:    'Assets/projects/beit-halima/main.jpg',
      visuals: [
        'Assets/projects/beit-halima/3d/1.jpg',
        'Assets/projects/beit-halima/3d/2.jpg',
        'Assets/projects/beit-halima/3d/3.jpg',
        'Assets/projects/beit-halima/3d/4.jpg',
        'Assets/projects/beit-halima/3d/5.jpg',
        'Assets/projects/beit-halima/3d/6.jpg',
        'Assets/projects/beit-halima/3d/7.jpg',
        'Assets/projects/beit-halima/3d/8.jpg',
        'Assets/projects/beit-halima/3d/9.jpg',
        'Assets/projects/beit-halima/3d/10.jpg',
          'Assets/projects/beit-halima/3d/11.jpg',
        'Assets/projects/beit-halima/3d/12.jpg'
      ],
      blueprints: [
        'Assets/projects/beit-halima/pdf/1.jpg',
        'Assets/projects/beit-halima/pdf/2.jpg'
      ],
      en: {
        name:        'Beit Halima',
        location:    'Boulevard, Amman',
        description: 'A reinterpretation of commercial space through the fusion of visual heritage and contemporary architecture. The design transforms structural elements — particularly the central columns — into visual focal points by wrapping them in flowing geometric forms inspired by traditional Arabic patterns. These forms extend seamlessly into the ceiling, creating a unified spatial language that connects the entire interior. The result is a strong visual identity that blends authenticity with a modern architectural expression.',
        philosophy:  'A design approach that transforms structural elements into a unified visual language rooted in heritage.'
      },
      ar: {
        name:        'بيت حليمة',
        location:    'البوليفار، عمّان',
        description: 'إعادة صياغة للمساحات التجارية من خلال دمج الموروث البصري بالحداثة العمرانية. ارتكزت فكرة التصميم على تحويل العناصر الإنشائية (الأعمدة الوسطية) إلى نقاط جذب بصرية عبر تغليفها بأشكال هندسية عربية مستوحاة من الزخارف التقليدية ولكن بخطوط انسيابية غير حادة. يمتد هذا التكوين الهندسي نحو السقف ليخلق وحدة متكاملة تربط الفراغات ببعضها، مما يمنح المطعم هوية بصرية قوية تمزج بين الأصالة والروح العصرية.',
        philosophy:  'تصميم يحول العناصر الإنشائية إلى هوية بصرية متكاملة مستوحاة من التراث.'
      }
    }
  ],


  /* ── UI TRANSLATIONS ────────────────────────────────────── */
  /* Static page text — referenced via data-i18n="section.key" in HTML */
  translations: {
    en: {
      nav: {
        home:     'Home',
        about:    'About',
        services: 'Services',
        projects: 'Projects',
        careers:  'Careers',
        contact:  'Contact'
      },
      hero: {
        eyebrow:  'Design & Project Management',
        headline: '',
        accent:   'Piece of Art',
        cta:      'Explore Our Work'
      },
      servicesPage: {
        heroTitle:    'We design spaces that<br />define how people experience them.',
        heroSubtitle: 'Architecture, interior design, and project management — delivered under one roof. We bring ambitious spaces from concept to completion, without compromise.',
        ctaPrimary:   'Book a Consultation',
        ctaSecondary: 'View Portfolio',
        visualLabel:  'Our disciplines',
        montageInterior:   'Interior Design',
        montageArchitecture: 'Architecture',
        montagePM:         'Project Management',
        processLabel:      'How we work',
        processTitle:      'From concept to completion',
        processIntro:      'A disciplined path keeps creativity aligned with scope, budget, and delivery — at every stage.',
        scrollHint:        'Scroll'
      },
      projectsPage: {

        label:    'Who We Are',
        title:    'Thoughtful Design.<br/>Flawless Execution.',
        body:     'At Piece of Art Design, we believe architecture is not merely construction — it is an expression of identity and harmony with the land. With over twenty years of experience in the Jordanian and regional markets, we have forged a distinctive architectural language that blends the wisdom of deep experience with the boldness of a contemporary spirit. We do not deliver ready-made designs; we create bespoke "pieces of art" that breathe with the uniqueness of each place and fulfill the ambitions of business owners and corporations.',
        cta:      'About Our Studio'
      },
      services: {
        label:    'What We Do',
        title:    'Our Services',
        intro:    'We are your companions from the very first idea, delivering integrated services that ensure precision in execution and beauty in outcome:'
      },
      philosophy: {
        label:    'Our Approach',
        title:    'Respecting Nature.',
        quote:    'Respecting nature... is our philosophy of building.',
        body:     'We adopt principles of organic architecture, designing in harmony with the land by preserving natural elements such as rocks and trees — allowing the structure to become an extension of its environment rather than an intrusion. Our integration of functional intelligence within open spaces, while maintaining user privacy, defines our signature in luxury villas and commercial projects.'
      },
      whyus: {
        label:    'Why Choose Us',
        title:    'Vision Meets<br/>Precision.',
        body:     'Because we combine the vision of an artist-engineer with the precision of an executive director. We understand the needs of business owners and corporations in creating living and working environments that reflect their refinement and serve their goals — through a team with a long archive of architectural challenges transformed into visual successes.',
        p1title:  '20+ Years Experience',
        p2title:  'On-Time Delivery',
        p3title:  'Bespoke Approach'
      },
      featured: {
        label:    'Featured Work',
        cta:      'View Project',
        viewAll:  'View All Projects'
      },
      testimonials: {
        label:    'Client Words',
        title:    'What They Say'
      },
      cta: {
        label:    'Start a Conversation',
        title:    'Have a Project in Mind?',
        subtitle: "Let's build something extraordinary together. Reach out and we'll arrange a consultation.",
        primary:  'Get In Touch',
        secondary:'Our Work'
      },
      footer: {
        tagline:    'Design &amp; Project Management Studio.<br/>Crafting spaces of lasting distinction.',
        navHeading: 'Navigation',
        svcHeading: 'Services',
        conHeading: 'Contact',
        copyright:  'Piece of Art. All rights reserved.'
      },
      contact: {
        label:              'Contact Us',
        title:              'Get in Touch',
        subtitle:           "We're here to discuss your project and bring your vision to life.<br/>Reach out and let's start building something extraordinary together.",
        formHeading:        'Let\'s Talk About Your Project',
        nameLabel:          'Full Name',
        namePlaceholder:    'Your full name',
        emailLabel:         'Email Address',
        emailPlaceholder:   'We\'ll get back to you here',
        phoneLabel:         'Phone Number',
        phonePlaceholder:   'Optional',
        subjectLabel:       'Subject',
        subjectPlaceholder: 'What\'s this about?',
        messageLabel:       'Message',
        messagePlaceholder: 'Tell us how we can help…',
        submit:             'Send Message',
        sending:            'Sending…',
        infoHeading:        'Prefer a Direct Approach?',
        hours:              'Sunday – Thursday, 8 AM – 4 PM',
        location:           'Amman, Jordan',
        directions:         'Get Directions',
        successMsg:         'Thank you! We received your message and will get back to you shortly.',
        errorRequired:      'Please fill in all required fields.',
        errorServer:        'Server error. Please contact us directly at info@pieceofartjo.com',
        errorNetwork:       'Network error. Please try again or email us at info@pieceofartjo.com'
      },
      projectsPage: {
        heroTitle:      'Our Projects',
        heroSubtitle:   'A selection of spaces designed and delivered with precision.',
        viewProject:    'View Project',
        featuredLabel:  'Featured Project'
      },
      modal: {
        visuals:    '3D Visuals',
        blueprints: 'Blueprints',
        year:       'Year',
        area:       'Area',
        philosophy: 'Design Philosophy'
      },
      aboutPage: {
        heroEyebrow:  'Est. 2004 · Amman, Jordan',
        heroTitle:    'A studio that designs the way spaces make people feel.',
        heroAnchor:   'Our Story',
        stat1val:     '20+',
        stat1lbl:     'Years of practice',
        stat2val:     '85+',
        stat2lbl:     'Projects completed',
        stat3val:     '60+',
        stat3lbl:     'Clients served',
        stat4val:     '6',
        stat4lbl:     'Project disciplines',
        whoLabel:     'Who We Are',
        whoHeading:   'Twenty years of sculpting space and shaping vision.',
        processLabel: 'How We Work',
        processTitle: 'A disciplined path, every time.',
        step1title:   'Discover',
        step1desc:    'We begin by listening — understanding the people, the site, and the ambition before a single line is drawn.',
        step2title:   'Design',
        step2desc:    'Concept to fully resolved architecture: drawings, 3D visuals, and material specs — all aligned before construction begins.',
        step3title:   'Execute',
        step3desc:    'On-site coordination with contractors and craftsmen. Rigorous budget tracking. No surprises.',
        step4title:   'Deliver',
        step4desc:    'A completed space that performs exactly as designed. On time. On budget. Every time.',
        storyLead:    'At Piece of Art Design, we believe architecture is not merely construction — it is an expression of identity and harmony with the land.',
        storyP1:      'With over twenty years of experience in the Jordanian and regional markets, we have forged a distinctive architectural language that blends the wisdom of deep experience with the boldness of a contemporary spirit.',
        storyP2:      'We do not deliver ready-made designs; we create bespoke "pieces of art" that breathe with the uniqueness of each place and fulfill the ambitions of business owners and corporations — from private villas and farm estates to offices, commercial complexes, restaurants, and large-scale hospitality projects.',
        storyP3:      'The approach has not changed: every project begins with curiosity, proceeds with rigour, and finishes only when the space is exactly what it needs to be.',
        visualQuote:  '"Architecture is not merely construction — it is an expression of identity."',
        scopeLabel:   'Our Scope',
        scopeH2:      'Every project type.<br/>One standard of work.',
        scope1name:   'Private Villas',
        scope1desc:   'Residences designed around how a family actually lives — organic, private, and built to endure.',
        scope2name:   'Farm Estates',
        scope2desc:   'Agricultural and rural properties that balance practicality with a strong sense of place.',
        scope3name:   'Offices &amp; Commercial',
        scope3desc:   'Workplaces and commercial complexes that project identity and drive productivity.',
        scope4name:   'Restaurants',
        scope4desc:   'Hospitality environments where atmosphere is as considered as the menu.',
        scope5name:   'Hospitality &amp; Tourism',
        scope5desc:   'Resorts, lodges, and guest experiences built to leave a lasting impression.',
        scope6name:   'Administrative Buildings',
        scope6desc:   'Institutional buildings that communicate authority through architectural clarity.',
        whyLabel:     'Why Choose Us',
        whyH2:        'We combine the vision of an artist-engineer with the precision of an executive director.',
        whySub:       'We understand the needs of business owners and corporations in creating living and working environments that reflect their refinement and serve their goals — through a team with a long archive of architectural challenges transformed into visual successes.',
        why1title:    'Everything under one roof',
        why1body:     'Architecture, interior design, and project management as a single coordinated service — no separate consultants, no conflicting advice, no gaps.',
        why2title:    'What you see is what gets built',
        why2body:     'We produce fully resolved drawings and 3D visuals before construction begins. The space delivered matches the space designed — every time.',
        why3title:    'Honest budgets from day one',
        why3body:     'We cost projects accurately before they start. Rigorous budget tracking means no costly surprises mid-construction.',
        why4title:    'We tell you what the space needs',
        why4body:     'We are honest with our clients — even when it is not what they want to hear. The best projects happen when there is trust on both sides.',
        why5title:    'You are never chasing us',
        why5body:     'Regular updates, a single point of contact, and a team that stays on top of your project so you do not have to.',
        ctaLabel:     'Start Here',
        ctaLine:      'Have a project in mind? Let\'s talk.',
        ctaBtn1:      'Get In Touch',
        ctaBtn2:      'View Our Work'
      }
    },

    ar: {
      nav: {
        home:     'الرئيسية',
        about:    'عن الشركة',
        services: 'الخدمات',
        projects: 'المشاريع',
        careers:  'وظائف',
        contact:  'تواصل'
      },
      hero: {
        eyebrow:  'تصميم وإدارة مشاريع',
        headline: '',
        accent:   'Piece of Art',
        cta:      'استعرض أعمالنا'
      },
      servicesPage: {
        heroTitle:    'نحن نصمم مساحات<br />تحدد كيفية تجربة الناس لها.',
        heroSubtitle: 'العمارة والتصميم الداخلي وإدارة المشاريع — يتم تقديمها تحت سقف واحد. ننتقل بالمساحات الطموحة من المفهوم إلى الاكتمال، دون تنازلات.',
        ctaPrimary:   'احجز استشارة',
        ctaSecondary: 'استعرض أعمالنا',
        visualLabel:  'مجالات عملنا',
        montageInterior:   'التصميم الداخلي',
        montageArchitecture: 'العمارة',
        montagePM:         'إدارة المشاريع',
        processLabel:      'أساليب العمل',
        processTitle:      'من الفكرة إلى التسليم',
        processIntro:      'مسار منضبط يحافظ على توازن الإبداع مع النطاق والميزانية والجدول الزمني.',
        scrollHint:        'مرر لأسفل'
      },
      projectsPage: {
        heroTitle:      'مشاريعنا',
        heroSubtitle:   'مجموعة مختارة من المساحات المصممة والمنفذة بدقة.',
        viewProject:    'عرض المشروع',
        featuredLabel:  'المشروع المميز'
      },
      modal: {
        visuals:    'مرئيات ثلاثية الأبعاد',
        blueprints: 'مخططات',
        year:       'السنة',
        area:       'المساحة',
        philosophy: 'الفلسفة'
      },
      about: {
        label:    'من نحن',
        title:    'تصميم مدروس.<br/>تنفيذ متقن.',
        body:     'في القطعة الفنية للتصميم، نؤمن بأن العمارة ليست مجرد بناء، بل هي تجسيد للهوية وتناغم مع الأرض. بخبرة تمتد لأكثر من عشرين عاماً في السوق الأردني والإقليمي، نجحنا في صياغة لغة معمارية خاصة تمزج بين حكمة الخبرة الطويلة وجرأة الروح العصرية. نحن لا نقدم تصاميم جاهزة، بل نخلق "قطعاً فنية" تتنفس بخصوصية المكان وتلبي طموحات أصحاب الأعمال والشركات.',
        cta:      'اعرف أكثر'
      },
      services: {
        label:    'ما نقدمه',
        title:    'خدماتنا',
        intro:    'نحن رفقاء الرحلة من الفكرة الأولى، نقدم خدمات متكاملة تضمن دقة التنفيذ وجمالية المخرج:'
      },
      philosophy: {
        label:    'فلسفتنا',
        title:    'احترام الطبيعة.',
        quote:    'احترام الطبيعة.. فلسفة بناء.',
        body:     'نتبنى في مشاريعنا مبادئ العمارة العضوية؛ حيث نحترم تضاريس الموقع ونبني حول عناصره الطبيعية كالصخور والأشجار، ليكون المبنى امتداداً للأرض لا دخيلاً عليها. دمجنا للذكاء الوظيفي في المساحات المفتوحة مع الحفاظ على خصوصية المستخدم هو ما يميز بصمتنا في الفلل النخبوية والمشاريع التجارية.'
      },
      whyus: {
        label:    'لماذا نحن',
        title:    'الرؤية تلتقي<br/>بالدقة.',
        body:     'لأننا نجمع بين رؤية المهندس الفنان ودقة المدير التنفيذي. نحن ندرك احتياجات أصحاب الشركات والمكاتب في خلق بيئات عمل وسكن تعكس رقيّهم وتخدم أهدافهم، من خلال فريق يمتلك أرشيفاً طويلاً من التحديات المعمارية المحولة إلى نجاحات بصرية.',
        p1title:  'أكثر من ٢٠ عاماً من الخبرة',
        p2title:  'التسليم في الموعد',
        p3title:  'تصميم على المقاس'
      },
      featured: {
        label:    'عمل مميز',
        cta:      'عرض المشروع',
        viewAll:  'عرض جميع المشاريع'
      },
      testimonials: {
        label:    'آراء العملاء',
        title:    'ماذا يقولون'
      },
      cta: {
        label:    'ابدأ المحادثة',
        title:    'هل لديك مشروع في ذهنك؟',
        subtitle: 'لنبني شيئاً استثنائياً معاً. تواصل معنا وسنرتب استشارة.',
        primary:  'تواصل معنا',
        secondary:'أعمالنا'
      },
      footer: {
        tagline:    'استوديو للتصميم وإدارة المشاريع.<br/>نصنع مساحات من الفخامة الخالدة.',
        navHeading: 'التنقل',
        svcHeading: 'الخدمات',
        conHeading: 'التواصل',
        copyright:  'Piece of Art. جميع الحقوق محفوظة.'
      },
      contact: {
        label:              'تواصل معنا',
        title:              'تواصل معنا',
        subtitle:           'نحن هنا لنناقش مشروعك ونحوّل رؤيتك إلى واقع.<br/>تواصل معنا ولنبدأ معاً في بناء شيء استثنائي.',
        formHeading:        'أخبرنا عن مشروعك',
        nameLabel:          'الاسم الكامل',
        namePlaceholder:    'اسمك الكامل',
        emailLabel:         'البريد الإلكتروني',
        emailPlaceholder:   'سنردّ عليك هنا',
        phoneLabel:         'رقم الهاتف',
        phonePlaceholder:   'اختياري',
        subjectLabel:       'الموضوع',
        subjectPlaceholder: 'ما الذي تودّ الاستفسار عنه؟',
        messageLabel:       'الرسالة',
        messagePlaceholder: 'أخبرنا كيف يمكننا مساعدتك…',
        submit:             'إرسال الرسالة',
        sending:            'جارٍ الإرسال…',
        infoHeading:        'تفضّل بالتواصل المباشر',
        hours:              'الأحد – الخميس، 8 ص – 4 م',
        location:           'عمّان، الأردن',
        directions:         'الحصول على الاتجاهات',
        successMsg:         'شكراً! تلقّينا رسالتك وسنردّ عليك قريباً.',
        errorRequired:      'يرجى تعبئة جميع الحقول المطلوبة.',
        errorServer:        'خطأ في الخادم. يرجى التواصل معنا مباشرة على info@pieceofartjo.com',
        errorNetwork:       'خطأ في الشبكة. يرجى المحاولة مجدداً أو مراسلتنا على info@pieceofartjo.com'
      },
      projectsPage: {
        heroTitle:    'مشاريعنا',
        heroSubtitle: 'مختارات من المساحات المصممة والمنجزة بدقة.',
        viewProject:  'عرض المشروع'
      },
      modal: {
        visuals:    'المرئيات ثلاثية الأبعاد',
        blueprints: 'المخططات',
        year:       'السنة',
        area:       'المساحة',
        philosophy: 'فلسفة التصميم'
      },
      aboutPage: {
        heroEyebrow:  'تأسست ٢٠٠٤ · عمّان، الأردن',
        heroTitle:    'استوديو يُشكّل الفراغ ويُعيد رسم المعنى.',
        heroAnchor:   'قصتنا',
        stat1val:     '+٢٠',
        stat1lbl:     'سنة من الخبرة',
        stat2val:     '+٨٥',
        stat2lbl:     'مشروع منجز',
        stat3val:     '+٦٠',
        stat3lbl:     'عميل راضٍ',
        stat4val:     '٦',
        stat4lbl:     'تخصصات مشاريع',
        whoLabel:     'من نحن',
        whoHeading:   'عشرون عاماً من نحت الفراغ وتشكيل الرؤية.',
        processLabel: 'كيف نعمل',
        processTitle: 'مسار منضبط، في كل مرة.',
        step1title:   'الاستكشاف',
        step1desc:    'نبدأ بالاستماع — نفهم الناس والموقع والطموح قبل رسم أي خط.',
        step2title:   'التصميم',
        step2desc:    'من الفكرة إلى العمارة المتكاملة: مخططات ومرئيات ثلاثية الأبعاد ومواصفات مواد — كلها متوافقة قبل بدء البناء.',
        step3title:   'التنفيذ',
        step3desc:    'تنسيق ميداني مع المقاولين والحرفيين. متابعة صارمة للميزانية. بلا مفاجآت.',
        step4title:   'التسليم',
        step4desc:    'فراغ مكتمل يؤدي بالضبط كما صُمِّم. في الوقت المحدد. ضمن الميزانية. في كل مرة.',
        storyLead:    'في القطعة الفنية للتصميم، نؤمن بأن العمارة ليست مجرد بناء، بل هي تجسيد للهوية وتناغم مع الأرض.',
        storyP1:      'بخبرة تمتد لأكثر من عشرين عاماً في السوق الأردني والإقليمي، نجحنا في صياغة لغة معمارية خاصة تمزج بين حكمة الخبرة الطويلة وجرأة الروح العصرية.',
        storyP2:      'نحن لا نقدم تصاميم جاهزة، بل نخلق "قطعاً فنية" تتنفس بخصوصية المكان وتلبي طموحات أصحاب الأعمال والشركات — من الفلل الخاصة والمزارع إلى المكاتب والمجمعات التجارية والمطاعم والمشاريع السياحية الكبرى.',
        storyP3:      'لم يتغير النهج: كل مشروع يبدأ بفضول، ويسير بدقة، ولا ينتهي إلا حين يكون الفراغ تماماً ما ينبغي أن يكون.',
        visualQuote:  '"العمارة ليست مجرد بناء — بل هي تجسيد للهوية."',
        scopeLabel:   'نطاق أعمالنا',
        scopeH2:      'كل نوع من المشاريع.<br/>معيار واحد من العمل.',
        scope1name:   'الفلل الخاصة',
        scope1desc:   'مساكن مصممة حول طريقة حياة العائلة الفعلية — عضوية، خاصة، ومبنية لتدوم.',
        scope2name:   'المزارع والعقارات الريفية',
        scope2desc:   'عقارات زراعية وريفية توازن بين العملية وروح المكان الأصيل.',
        scope3name:   'المكاتب والمجمعات التجارية',
        scope3desc:   'بيئات عمل ومجمعات تجارية تعكس الهوية وتعزز الإنتاجية.',
        scope4name:   'المطاعم',
        scope4desc:   'فضاءات ضيافة تُدرس فيها الأجواء بالعناية ذاتها التي يُدرس فيها القائمة.',
        scope5name:   'الضيافة والسياحة',
        scope5desc:   'منتجعات وملاجئ وتجارب ضيافة مصممة لتترك انطباعاً راسخاً.',
        scope6name:   'المباني الإدارية',
        scope6desc:   'مبانٍ مؤسسية وحكومية تعكس السلطة من خلال الوضوح المعماري.',
        whyLabel:     'لماذا نحن',
        whyH2:        'نجمع بين رؤية الفنان ودقة المدير التنفيذي.',
        whySub:       'ندرك احتياجات أصحاب الشركات في خلق بيئات تعكس رقيّهم وتخدم أهدافهم — بفريق يملك أرشيفاً من التحديات المعمارية المحوّلة إلى نجاحات بصرية.',
        why1title:    'كل شيء تحت سقف واحد',
        why1body:     'العمارة والتصميم الداخلي وإدارة المشاريع كخدمة واحدة متكاملة — بلا استشاريين منفصلين، ولا تضارب في الآراء، ولا ثغرات.',
        why2title:    'ما تراه هو ما يُبنى',
        why2body:     'ننتج مخططات متكاملة ومرئيات ثلاثية الأبعاد قبل بدء البناء. الفراغ المُسلَّم يطابق الفراغ المُصمَّم — في كل مرة.',
        why3title:    'ميزانيات واضحة منذ اليوم الأول',
        why3body:     'نُقدِّر تكاليف المشاريع بدقة قبل البدء. المتابعة الصارمة للميزانية تعني لا مفاجآت مكلفة في منتصف التنفيذ.',
        why4title:    'نقول لك ما تحتاجه المساحة',
        why4body:     'نحن صادقون مع عملائنا — حتى حين لا يكون ذلك ما يودّون سماعه. أفضل المشاريع تنشأ حين يسود الثقة الصريحة بين الطرفين.',
        why5title:    'لن تضطر لملاحقتنا',
        why5body:     'تحديثات دورية، ونقطة تواصل واحدة، وفريق يتابع مشروعك حتى لا تضطر أنت إلى ذلك.',
        ctaLabel:     'ابدأ من هنا',
        ctaLine:      'هل لديك مشروع في ذهنك؟ لنتحدث.',
        ctaBtn1:      'تواصل معنا',
        ctaBtn2:      'استعرض أعمالنا'
      }
    }
  }

}; /* END POA_DATA */

