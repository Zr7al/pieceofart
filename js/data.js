/* ============================================================
   PIECE OF ART — Site Data  (js/data.js)
   ─────────────────────────────────────────────────────────────
   SINGLE SOURCE OF TRUTH for all content.

   HOW TO REPLACE PLACEHOLDER DATA:
   ─────────────────────────────────
   Projects  → edit en.name / ar.name, description, location, etc.
               replace image / images[] with real file paths, e.g.
               'Assets/images/projects/villa-1.jpg'
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
     image       — card thumbnail (800×600 recommended)
     images[]    — gallery images for detail page (1400×900 recommended)
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
      image:  'Assets/images/services/interior.jpg',
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
      image:  'Assets/images/services/architecture.jpg',
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
      image:  'Assets/images/services/management.jpg',
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
    { id: 'commercial',     en: 'Offices & Commercial', ar: 'مكاتب وتجاري' },
    { id: 'restaurants',    en: 'Restaurants',     ar: 'مطاعم'   },
    { id: 'hospitality',    en: 'Hospitality',     ar: 'ضيافة'   },
    { id: 'administrative', en: 'Administrative',  ar: 'إداري'   }
  ],


  /* ── PROJECTS ───────────────────────────────────────────── */
  projects: [
    {
      id:       'abu-nusra-showroom',
      slug:     'abu-nusra-showroom',
      category: 'commercial',
      year:     '2024',
      size:     '420 m²',
      featured: false,
      image:    'Assets/projects/abu-nusra-showroom/thumbnail.jpg',
      visuals: [
        'Assets/projects/abu-nusra-showroom/visuals/1.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/2.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/3.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/4.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/5.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/6.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/7.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/8.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/9.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/10.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/11.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/12.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/13.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/14.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/15.jpeg',
        'Assets/projects/abu-nusra-showroom/visuals/16.jpeg'
      ],
      blueprints: [],
      en: {
        name:        'Abu Nusra Showroom',
        location:    'Mecca Street, Amman',
        description: 'A contemporary commercial space designed to enhance product visibility and customer experience, with a focus on spatial clarity, movement flow, and balanced lighting throughout the showroom.',
        philosophy:  'A contemporary commercial space designed to enhance product visibility and customer experience, with a focus on spatial clarity, movement flow, and balanced lighting throughout the showroom.'
      },
      ar: {
        name:        'معرض أبو نصرة',
        location:    'شارع مكة، عمّان',
        description: 'مساحة تجارية معاصرة تهدف إلى تعزيز وضوح عرض المنتجات وتحسين تجربة العملاء، مع التركيز على وضوح التوزيع الداخلي وانسيابية الحركة وتوازن الإضاءة داخل المعرض.',
        philosophy:  'مساحة تجارية معاصرة تهدف إلى تعزيز وضوح عرض المنتجات وتحسين تجربة العملاء، مع التركيز على وضوح التوزيع الداخلي وانسيابية الحركة وتوازن الإضاءة داخل المعرض.'
      }
    },
    {
      id:       'haddad-villas',
      slug:     'haddad-villas',
      category: 'villas',
      year:     '2024',
      size:     '1200 m² per villa (2 villas)',
      featured: false,
      image:    'assets/projects/haddad-villas/thumbnail.jpg',
      visuals: [
        'assets/projects/haddad-villas/visuals/1.jpg',
        'assets/projects/haddad-villas/visuals/2.jpg',
        'assets/projects/haddad-villas/visuals/3.jpg',
        'assets/projects/haddad-villas/visuals/4.jpg',
        'assets/projects/haddad-villas/visuals/5.jpg',
        'assets/projects/haddad-villas/visuals/6.jpg',
        'assets/projects/haddad-villas/visuals/7.jpg',
        'assets/projects/haddad-villas/visuals/8.jpg',
        'assets/projects/haddad-villas/visuals/9.jpg',
        'assets/projects/haddad-villas/visuals/10.jpg',
        'assets/projects/haddad-villas/visuals/11.jpg',
        'assets/projects/haddad-villas/visuals/12.jpg',
        'assets/projects/haddad-villas/visuals/13.jpg',
      ],
      blueprints: [
        'assets/projects/haddad-villas/blueprints/1.jpg',
        'assets/projects/haddad-villas/blueprints/2.jpg',
        'assets/projects/haddad-villas/blueprints/3.jpg',
        'assets/projects/haddad-villas/blueprints/4.jpeg',
        'assets/projects/haddad-villas/blueprints/5.jpeg'
      ],
      en: {
        name:        'Haddad Villas',
        location:    'Fuheis, Jordan',
        description: 'A residential villa project designed to balance functionality and aesthetics within a refined architectural composition.',
        philosophy:  'The project follows a postmodern approach that blends classical and contemporary elements, creating spaces that are both visually expressive and functionally efficient, while ensuring smooth circulation and clear articulation of architectural masses.'
      },
      ar: {
        name:        'فيلا حداد',
        location:    'الفحيص، الأردن',
        description: 'مشروع سكني يحقق التوازن بين الوظيفة والجمال ضمن تكوين معماري متكامل.',
        philosophy:  'تم تصميم المشروع بطراز يجمع بين الكلاسيكية والحداثة (Postmodern)، حيث يحقق التوازن بين الجمال والوظيفة مع ضمان سهولة الحركة وإبراز الكتل المعمارية بشكل واضح.'
      }
    },
    {
      id:       'daher-villa',
      slug:     'daher-villa',
      category: 'villas',
      year:     '2020',
      size:     '250 m²',
      featured: false,
      image:    'assets/projects/daher-villa/thumbnail.jpg',
      visuals: [
        'assets/projects/daher-villa/visuals/1.jpeg',
        'assets/projects/daher-villa/visuals/2.jpeg',
        'assets/projects/daher-villa/visuals/3.jpeg',
        'assets/projects/daher-villa/visuals/4.jpeg',
        'assets/projects/daher-villa/visuals/5.jpeg',
        'assets/projects/daher-villa/visuals/6.jpeg'
      ],
      blueprints: [
        'assets/projects/daher-villa/blueprints/1.jpg'
      ],
      en: {
        name:        'Daher Villa',
        location:    'Jabal Al Weibdeh, Amman',
        description: 'Bridging the authenticity of the 1950s with contemporary design, this project combines traditional stone architecture with a modern extension, creating a balanced architectural dialogue.',
        philosophy:  'The ground floor was carefully restored while a contemporary upper floor was introduced, achieving harmony between heritage preservation and modern living.'
      },
      ar: {
        name:        'فيلا ظاهر',
        location:    'جبل اللويبدة، عمّان',
        description: 'يجمع المشروع بين الطابع التراثي والتوسعة الحديثة ضمن تكوين معماري متوازن.',
        philosophy:  'تم ترميم الطابق الأرضي وإضافة طابق علوي حديث، لتحقيق توازن بين الحفاظ على التراث ومتطلبات الحياة المعاصرة.'
      }
    },
    {
      id:       'qassiyeh-farm',
      slug:     'qassiyeh-farm',
      category: 'farms',
      year:     '2021',
      size:     '700 m² + landscape works',
      featured: false,
      image:    'assets/projects/qassiyeh-farm/thumbnail.jpeg',
      visuals: [
        'assets/projects/qassiyeh-farm/visuals/1.jpeg',
        'assets/projects/qassiyeh-farm/visuals/2.jpeg',
        'assets/projects/qassiyeh-farm/visuals/3.jpeg',
        'assets/projects/qassiyeh-farm/visuals/4.jpeg',
        'assets/projects/qassiyeh-farm/visuals/5.jpeg',
        'assets/projects/qassiyeh-farm/visuals/6.jpeg',
        'assets/projects/qassiyeh-farm/visuals/7.jpeg',
        'assets/projects/qassiyeh-farm/visuals/8.jpeg',
        'assets/projects/qassiyeh-farm/visuals/9.jpeg',
        'assets/projects/qassiyeh-farm/visuals/10.jpeg',
        'assets/projects/qassiyeh-farm/visuals/11.jpeg',
        'assets/projects/qassiyeh-farm/visuals/12.jpeg',
        'assets/projects/qassiyeh-farm/visuals/13.jpeg',
        'assets/projects/qassiyeh-farm/visuals/14.jpeg',
        'assets/projects/qassiyeh-farm/visuals/15.jpeg'
      ],
      blueprints: [
        'assets/projects/qassiyeh-farm/blueprints/1.jpg',
        'assets/projects/qassiyeh-farm/blueprints/2.jpg',
        'assets/projects/qassiyeh-farm/blueprints/3.jpg',
        'assets/projects/qassiyeh-farm/blueprints/4.jpg',
        'assets/projects/qassiyeh-farm/blueprints/5.jpg',
        'assets/projects/qassiyeh-farm/blueprints/6.jpg',
        'assets/projects/qassiyeh-farm/blueprints/7.jpg',
        'assets/projects/qassiyeh-farm/blueprints/8.jpg'
      ],
      en: {
        name:        'Qassiyeh Villa & Farm',
        location:    'Mahis, Jordan',
        description: 'A rural farm project that reflects the concept of architecture adapted to the land, using natural terrain to shape spatial experiences.',
        philosophy:  'The design utilises varying land levels to create multi-level spaces, with careful orientation to maximise natural lighting and ventilation.'
      },
      ar: {
        name:        'فيلا ومزرعة قسسية',
        location:    'ماحص، الأردن',
        description: 'مشروع مزرعة يعكس مفهوم العمارة المتكيفة مع الأرض من خلال استغلال طبيعة الموقع.',
        philosophy:  'يعتمد التصميم على اختلاف المناسيب لخلق فراغات متعددة المستويات مع توجيه مدروس لتحقيق أفضل إضاءة وتهوية.'
      }
    },
    {
      id:       'daher-farm',
      slug:     'daher-farm',
      category: 'farms',
      year:     '',
      size:     '850 m² (multiple buildings)',
      featured: false,
      image:    'assets/projects/daher-farm/thumbnail.jpeg',
      visuals: [
        'assets/projects/daher-farm/visuals/1.jpeg',
        'assets/projects/daher-farm/visuals/2.jpeg',
        'assets/projects/daher-farm/visuals/3.jpeg',
        'assets/projects/daher-farm/visuals/4.jpeg',
        'assets/projects/daher-farm/visuals/5.jpeg',
        'assets/projects/daher-farm/visuals/6.jpg',
        'assets/projects/daher-farm/visuals/7.jpg',
        'assets/projects/daher-farm/visuals/8.jpg',
        'assets/projects/daher-farm/visuals/9.jpg',
        'assets/projects/daher-farm/visuals/10.jpeg',
        'assets/projects/daher-farm/visuals/11.jpeg',
        'assets/projects/daher-farm/visuals/12.jpeg',
        'assets/projects/daher-farm/visuals/13.jpeg',
        'assets/projects/daher-farm/visuals/14.jpeg',
        'assets/projects/daher-farm/visuals/15.jpeg',
        'assets/projects/daher-farm/visuals/16.jpeg',
        'assets/projects/daher-farm/visuals/17.jpeg',
        'assets/projects/daher-farm/visuals/18.jpeg',
        'assets/projects/daher-farm/visuals/19.jpeg',
        'assets/projects/daher-farm/visuals/20.jpeg',
        'assets/projects/daher-farm/visuals/21.jpeg',
        'assets/projects/daher-farm/visuals/22.jpeg'
      ],
      blueprints: [
        'assets/projects/daher-farm/blueprints/1.jpg',
        'assets/projects/daher-farm/blueprints/2.jpg',
        'assets/projects/daher-farm/blueprints/3.jpg',
        'assets/projects/daher-farm/blueprints/4.jpg',
        'assets/projects/daher-farm/blueprints/5.jpeg',
        'assets/projects/daher-farm/blueprints/6.jpg'
      ],
      en: {
        name:        'Daher Farm',
        location:    'Mahis, Jordan',
        description: 'A rural residential project based on the concept of cumulative architecture, distributing functions across multiple buildings that follow the natural terrain.',
        philosophy:  'The main structure is designed as an organic extension of the site\'s original rock, creating a unified identity that blends stone and glass while offering privacy and unique views for each space.'
      },
      ar: {
        name:        'مزرعة ضاهر',
        location:    'ماحص، الأردن',
        description: 'مشروع سكني ريفي يعتمد على توزيع المباني وفق تضاريس الموقع الطبيعي.',
        philosophy:  'تم تصميم المبنى الرئيسي كامتداد عضوي لصخرة الموقع، مع الحفاظ على هوية موحدة تمزج بين الحجر والزجاج وتوفر خصوصية لكل فراغ.'
      }
    },
    {
      id:       'palmira',
      slug:     'palmira',
      category: 'commercial',
      year:     '2025',
      size:     '10,100 m²',
      featured: true,
      image:    'assets/projects/palmira/thumbnail.jpg',
      visuals: [
        'assets/projects/palmira/visuals/1.jpg',
        'assets/projects/palmira/visuals/2.jpg',
        'assets/projects/palmira/visuals/4.jpg'
      ],
      blueprints: [
        'assets/projects/palmira/blueprints/1.jpg'
      ],
      en: {
        name:        'Palmira',
        location:    'Airport Road, Amman',
        description: 'A tourism project that embraces simplicity and natural materials, creating a calm and immersive spatial experience.',
        philosophy:  'The design balances contrasting elements, from the energy of equestrian spaces to the serenity of spa areas, forming a unified retreat rooted in nature.'
      },
      ar: {
        name:        'بالميرا',
        location:    'طريق المطار، عمّان',
        description: 'مشروع سياحي يعتمد على البساطة واستخدام المواد الطبيعية لخلق تجربة مكانية هادئة.',
        philosophy:  'يوازن التصميم بين عناصر متناقضة من الحركة والهدوء ضمن بيئة طبيعية متكاملة.'
      }
    },
    {
      id:       'beit-halima',
      slug:     'beit-halima',
      category: 'restaurants',
      year:     '2023',
      size:     '500 m²',
      featured: false,
      image:    'assets/projects/beit-halima/thumbnail.jpg',
      visuals: [
        'assets/projects/beit-halima/visuals/1.jpeg',
        'assets/projects/beit-halima/visuals/2.jpg',
        'assets/projects/beit-halima/visuals/3.jpg',
        'assets/projects/beit-halima/visuals/4.jpg',
        'assets/projects/beit-halima/visuals/5.jpg',
        'assets/projects/beit-halima/visuals/6.jpg',
        'assets/projects/beit-halima/visuals/7.jpg',
        'assets/projects/beit-halima/visuals/8.jpg',
        'assets/projects/beit-halima/visuals/9.jpg',
        'assets/projects/beit-halima/visuals/10.jpg',
        'assets/projects/beit-halima/visuals/11.jpg',
        'assets/projects/beit-halima/visuals/12.jpg',
        'assets/projects/beit-halima/visuals/13.jpg',
        'assets/projects/beit-halima/visuals/14.jpg',
        'assets/projects/beit-halima/visuals/15.jpg',
        'assets/projects/beit-halima/visuals/16.jpg'
      ],
      blueprints: [
        'assets/projects/beit-halima/blueprints/1.jpg',
        'assets/projects/beit-halima/blueprints/2.jpg'
      ],
      en: {
        name:        'Beit Halima',
        location:    'Boulevard, Amman',
        description: 'A heritage restaurant project that reinterprets heritage through contemporary design, creating a distinctive spatial identity.',
        philosophy:  'Structural elements are transformed into visual features using flowing geometric patterns inspired by Arabic motifs, forming a cohesive and expressive architectural language.'
      },
      ar: {
        name:        'بيت حليمة',
        location:    'البوليفار، عمّان',
        description: 'مشروع يعيد تفسير التراث ضمن إطار معماري معاصر ليخلق هوية بصرية مميزة.',
        philosophy:  'تم تحويل الأعمدة إلى عناصر تصميمية بارزة باستخدام زخارف هندسية عربية بأسلوب حديث وانسيابي.'
      }
    },
    {
      id:       'yaseen-farm',
      slug:     'yaseen-farm',
      category: 'farms',
      year:     '2025',
      size:     '250 m²',
      featured: false,
      image:    'assets/projects/yaseen-farm/thumbnail.jpg',
      visuals: [
        'assets/projects/yaseen-farm/visuals/2.jpg',
        'assets/projects/yaseen-farm/visuals/3.jpg',
        'assets/projects/yaseen-farm/visuals/4.jpg',
        'assets/projects/yaseen-farm/visuals/5.jpg'
      ],
      blueprints: [
        'assets/projects/yaseen-farm/blueprints/1.jpg',
        'assets/projects/yaseen-farm/blueprints/2.jpg'
      ],
      en: {
        name:        'Yaseen Farm',
        location:    'Naour (Seil Al Hasaaban), Jordan',
        description: 'A mountain farm project designed to integrate with the natural terrain and surrounding landscape.',
        philosophy:  'The design follows the land’s topography, using local materials and terraced spaces to maximise views and create harmony with nature.'
      },
      ar: {
        name:        'مزرعة ياسين',
        location:    'ناعور (سيل الحسبان)، الأردن',
        description: 'مشروع مزرعة جبلية يندمج مع طبيعة الموقع وتضاريسه.',
        philosophy:  'يعتمد التصميم على تضاريس الأرض واستخدام الحجر المحلي مع شرفات متدرجة توفر إطلالات مفتوحة.'
      }
    },
    {
      id:       'najlaa',
      slug:     'najlaa',
      category: 'restaurants',
      year:     '2025',
      size:     '80 m²',
      featured: false,
      image:    'assets/projects/najlaa/thumbnail.jpg',
      visuals: [
        'assets/projects/najlaa/visuals/1.jpg',
        'assets/projects/najlaa/visuals/2.jpg',
        'assets/projects/najlaa/visuals/3.jpg',
        'assets/projects/najlaa/visuals/4.jpg',
        'assets/projects/najlaa/visuals/5.jpg',
        'assets/projects/najlaa/visuals/6.jpg',
        'assets/projects/najlaa/visuals/7.jpg',
        'assets/projects/najlaa/visuals/8.jpg',
        'assets/projects/najlaa/visuals/9.jpg',
        'assets/projects/najlaa/visuals/10.jpg'
      ],
      blueprints: [
        'assets/projects/najlaa/blueprints/1.jpg'
      ],
      en: {
        name:        'Najlaa',
        location:    'Jabal Al Weibdeh, Amman',
        description: 'A heritage restaurant project that blends traditional identity with contemporary design elements.',
        philosophy:  'The design preserves the character of the space while introducing modern materials and lighting, creating a balanced and refined dining experience.'
      },
      ar: {
        name:        'نجلاء',
        location:    'جبل الويبدة، عمّان',
        description: 'مشروع مطعم تراثي يدمج بين الهوية الأصلية والتصميم المعاصر.',
        philosophy:  'يحافظ التصميم على روح المكان مع إضافة عناصر حديثة لخلق تجربة متوازنة وأنيقة.'
      }
    },
    {
      id:       'reflection-office',
      slug:     'reflection-office',
      category: 'commercial',
      year:     '2025',
      size:     '280 m²',
      featured: false,
      image:    'assets/projects/reflection-office/thumbnail.jpeg',
      visuals: [
        'assets/projects/reflection-office/visuals/1.jpeg',
        'assets/projects/reflection-office/visuals/2.jpeg',
        'assets/projects/reflection-office/visuals/3.jpeg',
        'assets/projects/reflection-office/visuals/4.jpeg',
        'assets/projects/reflection-office/visuals/5.jpeg',
        'assets/projects/reflection-office/visuals/6.jpeg',
        'assets/projects/reflection-office/visuals/7.jpeg',
        'assets/projects/reflection-office/visuals/8.jpeg',
        'assets/projects/reflection-office/visuals/10.jpeg',
        'assets/projects/reflection-office/visuals/11.jpeg',
        'assets/projects/reflection-office/visuals/12.jpeg',
        'assets/projects/reflection-office/visuals/13.jpeg',
        'assets/projects/reflection-office/visuals/14.jpeg'
      ],
      blueprints: [
        'assets/projects/reflection-office/blueprints/1.jpg'
      ],
      en: {
        name:        'Reflection Company',
        location:    '8th Circle, Amman',
        description: 'An office project based on open planning to enhance communication and efficiency.',
        philosophy:  'The design uses glass partitions to balance privacy and transparency, creating a modern workspace with strong natural lighting.'
      },
      ar: {
        name:        'شركة الانعكاس',
        location:    'الدوار الثامن، عمّان',
        description: 'مشروع إداري يعتمد على المكاتب المفتوحة لتعزيز التواصل داخل بيئة العمل.',
        philosophy:  'يستخدم التصميم القواطع الزجاجية لتحقيق توازن بين الخصوصية والانفتاح مع توزيع فعال للإضاءة الطبيعية.'
      }
    },
    {
      id:       'aqaba-villa',
      slug:     'aqaba-villa',
      category: 'villas',
      year:     '2019',
      size:     'Aqaba, Jordan',
      featured: false,
      image:    'assets/projects/aqaba-villa/thumbnail.jpeg',
      visuals: [
        'assets/projects/aqaba-villa/visuals/1.jpeg',
        'assets/projects/aqaba-villa/visuals/2.jpeg',
        'assets/projects/aqaba-villa/visuals/3.jpeg',
        'assets/projects/aqaba-villa/visuals/4.jpeg',
        'assets/projects/aqaba-villa/visuals/5.jpeg',
        'assets/projects/aqaba-villa/visuals/6.jpeg',
        'assets/projects/aqaba-villa/visuals/7.jpeg'
      ],
      blueprints: [
        'assets/projects/aqaba-villa/blueprints/1.jpg'
      ],
      en: {
        name:        'Aqaba Seaside Villa',
        location:    'Aqaba (Tala Bay), Jordan',
        description: 'A beachfront villa project combining architectural and interior design with a focus on sea views and climate-responsive design.',
        philosophy:  'The design balances openness and privacy, integrating outdoor spaces as a core part of the architectural experience.'
      },
      ar: {
        name:        'فيلا على البحر – العقبة',
        location:    'العقبة (تالا باي)، الأردن',
        description: 'فيلا شاطئية تجمع بين التصميم المعماري والداخلي مع التركيز على الإطلالات والتكيف مع البيئة الساحلية.',
        philosophy:  'يوازن التصميم بين الانفتاح والخصوصية مع دمج المساحات الخارجية ضمن التكوين العام.'
      }
    },
    {
      id:       'omar-badran',
      slug:     'omar-badran',
      category: 'villas',
      year:     '2025',
      size:     '750 m²',
      featured: false,
      image:    'assets/projects/omar-badran/thumbnail.jpg',
      visuals: [
        'assets/projects/omar-badran/visuals/1.jpg',
        'assets/projects/omar-badran/visuals/2.jpg',
        'assets/projects/omar-badran/visuals/3.jpg',
        'assets/projects/omar-badran/visuals/4.jpg',
        'assets/projects/omar-badran/visuals/5.jpg',
        'assets/projects/omar-badran/visuals/6.jpg',
        'assets/projects/omar-badran/visuals/7.jpg',
        'assets/projects/omar-badran/visuals/8.jpg',
        'assets/projects/omar-badran/visuals/9.jpg',
        'assets/projects/omar-badran/visuals/10.jpg',
        'assets/projects/omar-badran/visuals/11.jpg'
      ],
      blueprints: [
        'assets/projects/omar-badran/blueprints/1.jpg'
      ],
      en: {
        name:        'Omar Badran Residence',
        location:    '',
        description: 'A residential project that explores open-plan living while maintaining clear spatial zoning.',
        philosophy:  'The design balances openness and privacy, with carefully defined zones and a dedicated upper level for private living spaces.'
      },
      ar: {
        name:        'عمر بدران',
        location:    '',
        description: 'مشروع سكني يجمع بين المخطط المفتوح وتقسيم الفراغات بشكل مدروس.',
        philosophy:  'يوازن التصميم بين الانفتاح والخصوصية مع توزيع واضح للمساحات وتخصيص الطابق العلوي للخصوصية.'
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
        title:    'Piece of Art',
        subtitle: 'Two decades of shaping space<br/>and crafting architectural vision.',
        cta:      'Explore Our Work'
      },
      servicesPage: {
        heroTitle:    'We design spaces that<br />define how people experience them.',
        heroSubtitle: 'Architecture, interior design, and project management — delivered under one roof. We bring ambitious spaces from concept to completion, without compromise.',
        ctaPrimary:   'Book a Consultation',
        ctaSecondary: 'View Portfolio'
      },
      projectsPage: {

        label:    'Who We Are',
        title:    'Thoughtful Design.<br/>Flawless Execution.',
        body:     'At Piece of Art Design, we believe architecture is not merely construction — it is an expression of identity and harmony with the environment. With over two decades of experience across the Jordanian and regional markets, we have developed a distinctive architectural language that blends the wisdom of experience with contemporary boldness. We do not deliver standard designs; we create bespoke pieces of art that reflect the uniqueness of each space and the ambitions of its owners.',
        cta:      'Learn More'
      },
      services: {
        label:    'What We Do',
        title:    'Our Services',
        intro:    'We partner with you from the very first idea, delivering integrated services that ensure precision in execution and excellence in outcome:'
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
        body:     'We combine the vision of an artist with the precision of an executive. We understand the needs of businesses and professionals in creating environments that reflect their standards and support their goals — backed by a team with a proven track record of transforming complex architectural challenges into visual success.',
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
        storyLabel:   'Our Story',
        storyLead:    'At Piece of Art Design, we believe architecture is not merely construction — it is an expression of identity and harmony with the environment.',
        storyP1:      'With over two decades of experience across the Jordanian and regional markets, we have developed a distinctive architectural language that blends the wisdom of experience with contemporary boldness.',
        storyP2:      'We do not deliver standard designs; we create bespoke pieces of art that reflect the uniqueness of each space and the ambitions of its owners — from private villas and farm estates to offices, commercial complexes, restaurants, and large-scale hospitality projects.',
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
        whyH2:        'We combine the vision of an artist with the precision of an executive.',
        whySub:       'We understand the needs of businesses and professionals in creating environments that reflect their standards and support their goals — backed by a team with a proven track record of transforming complex architectural challenges into visual success.',
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
        ctaScript:    "Let's build<br/>something<br/>remarkable.",
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
        title:    'Piece of Art',
        subtitle: 'القطعة الفنية للتصميم: عشرون عاماً من الخبرة<br/>بنحت الفراغ وتشكيل الرؤى المعمارية.',
        cta:      'استعرض أعمالنا'
      },
      servicesPage: {
        heroTitle:    'نحن نصمم مساحات<br />تحدد كيفية تجربة الناس لها.',
        heroSubtitle: 'العمارة والتصميم الداخلي وإدارة المشاريع — يتم تقديمها تحت سقف واحد. ننتقل بالمساحات الطموحة من المفهوم إلى الاكتمال، دون تنازلات.',
        ctaPrimary:   'احجز استشارة',
        ctaSecondary: 'استعرض أعمالنا'
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
        storyLabel:   'قصتنا',
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
        ctaScript:    'لنبنِ شيئاً<br/>لا يُنسى.',
        ctaBtn1:      'تواصل معنا',
        ctaBtn2:      'استعرض أعمالنا'
      }
    }
  }

}; /* END POA_DATA */
